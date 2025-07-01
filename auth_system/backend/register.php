<?php
// 允許 localhost 和 127.0.0.1 兩種方式訪問 API
if (isset($_SERVER["HTTP_ORIGIN"]) && preg_match("/^http:\/\/(localhost|127\.0\.0\.1):5500$/", $_SERVER["HTTP_ORIGIN"])) {
    header("Access-Control-Allow-Origin: " . $_SERVER["HTTP_ORIGIN"]);
}
header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $pass = trim($_POST["password"]);

    if (empty($user) || empty($email) || empty($pass)) {
        echo json_encode(["status" => "error", "message" => "❌ 所有欄位皆需填寫！"]);
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "❌ 無效的 Email 格式！"]);
        exit();
    }

    if (strlen($pass) < 6) {
        echo json_encode(["status" => "error", "message" => "❌ 密碼長度需至少 6 碼！"]);
        exit();
    }

    $hashed_password = password_hash($pass, PASSWORD_BCRYPT);

    // 檢查是否有同樣的電子郵件
    $check = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $check->bind_param("s", $email);
    $check->execute();
    $result = $check->get_result();
    
    if ($result->num_rows > 0) {
        echo json_encode(["status" => "error", "message" => "❌ Email 已被使用！"]);
    } else {
        // 插入新使用者資料
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $user, $email, $hashed_password);
        
        // 檢查 SQL 執行是否成功
        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "✅ 註冊成功！請登入"]);
        } else {
            // 若執行失敗，返回具體錯誤訊息
            echo json_encode([
                "status" => "error", 
                "message" => "❌ 註冊失敗，請稍後再試。錯誤原因：" . $stmt->error
            ]);
        }
    }

    // 關閉資料庫連線
    $conn->close();
}
?>
