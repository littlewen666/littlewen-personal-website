<?php
session_start();
require_once "db.php"; 

// 設定 CORS 頭資訊
header("Access-Control-Allow-Origin: *"); // 允許所有來源
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

// 新增回覆
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    checkLogin();

    $data = json_decode(file_get_contents("php://input"), true);
    $user_id = $_SESSION["user_id"];
    $message_id = intval($data["message_id"]);
    $content = trim($data["content"]);

    if (empty($content)) {
        echo json_encode(["status" => "error", "message" => "❌ 回覆內容不能為空！"]);
        exit();
    }

    $stmt = $conn->prepare("INSERT INTO replies (message_id, user_id, content) VALUES (?, ?, ?)");
    $stmt->bind_param("iis", $message_id, $user_id, $content);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "✅ 回覆成功！"]);
    } else {
        echo json_encode(["status" => "error", "message" => "❌ 回覆失敗，請稍後再試！"]);
    }
    exit();
}

$conn->close();
?>
