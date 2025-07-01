<?php
session_start();
require_once "db.php"; // 連接資料庫
if (!isset($_SESSION["user_id"])) {
    echo json_encode(["status" => "error", "message" => "❌ 用戶未登入"]);
    exit();
}
// 設定 CORS 頭資訊
header("Access-Control-Allow-Origin: http://localhost:5500");


header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // 允許的方法
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // 允許的標頭
header("Access-Control-Allow-Credentials: true"); // 允許攜帶憑證
header("Content-Type: application/json; charset=UTF-8");

// 預檢請求 (OPTIONS 方法)
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

// 確保用戶已登入
function checkLogin() {
    if (!isset($_SESSION["user_id"])) {
        echo json_encode(["status" => "error", "message" => "❌ 請先登入！"]);
        exit();
    }
}
if (!$conn) {
    die("❌ 連接失敗：" . mysqli_connect_error());
}

// 取得留言 (最近 5 則)
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $offset = isset($_GET["offset"]) ? intval($_GET["offset"]) : 0;
    $limit = isset($_GET["limit"]) ? intval($_GET["limit"]) : 5;

    $stmt = $conn->prepare("
        SELECT messages.id, messages.user_id, users.username, messages.content, messages.created_at 
        FROM messages 
        JOIN users ON messages.user_id = users.id 
        ORDER BY messages.created_at DESC 
        LIMIT ?, ?
    ");
    $stmt->bind_param("ii", $offset, $limit);
    $stmt->execute();
    $result = $stmt->get_result();
    
    $messages = [];
    while ($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }

    echo json_encode(["status" => "success", "messages" => $messages]);
    exit();
}

// 新增留言
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    checkLogin();

    $data = json_decode(file_get_contents("php://input"), true);
    error_log("收到留言內容：" . json_encode($data));
    $user_id = $_SESSION["user_id"];
    $content = trim($data["content"]);

    if (empty($content)) {
        echo json_encode(["status" => "error", "message" => "❌ 內容不能為空！"]);
        exit();
    }

    $stmt = $conn->prepare("INSERT INTO messages (user_id, content) VALUES (?, ?)");
    $stmt->bind_param("is", $user_id, $content);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "✅ 留言成功！"]);
    } else {
        echo json_encode(["status" => "error", "message" => "❌ 留言失敗，請稍後再試！"]);
    }
    exit();
}

// 修改留言
if ($_SERVER["REQUEST_METHOD"] === "PUT") {
    checkLogin();

    $data = json_decode(file_get_contents("php://input"), true);
    $message_id = intval($data["message_id"]);
    $content = trim($data["content"]);
    $user_id = $_SESSION["user_id"];

    if (empty($content)) {
        echo json_encode(["status" => "error", "message" => "❌ 內容不能為空！"]);
        exit();
    }

    $stmt = $conn->prepare("UPDATE messages SET content = ? WHERE id = ? AND user_id = ?");
    $stmt->bind_param("sii", $content, $message_id, $user_id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "✅ 留言修改成功！"]);
    } else {
        echo json_encode(["status" => "error", "message" => "❌ 修改失敗，可能沒有權限！"]);
    }
    exit();
}

// 刪除留言
if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    checkLogin();

    $data = json_decode(file_get_contents("php://input"), true);
    $message_id = intval($data["message_id"]);
    $user_id = $_SESSION["user_id"];

    $stmt = $conn->prepare("DELETE FROM messages WHERE id = ? AND user_id = ?");
    $stmt->bind_param("ii", $message_id, $user_id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "✅ 留言刪除成功！"]);
    } else {
        echo json_encode(["status" => "error", "message" => "❌ 刪除失敗，可能沒有權限！"]);
    }
    exit();
}

$conn->close();
?>
