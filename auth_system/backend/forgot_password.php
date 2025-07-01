<?php
require_once "db.php";
require_once "send_email.php"; // 引入寄信功能

header("Access-Control-Allow-Origin: http://localhost:5500");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"]);

    if (empty($email)) {
        echo json_encode(["status" => "error", "message" => "❌ 請輸入 Email！"]);
        exit();
    }

    // 檢查 Email 是否存在於 users 資料表
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 0) {
        echo json_encode(["status" => "error", "message" => "❌ 該 Email 未註冊！"]);
        exit();
    }

    // 產生隨機 Reset Token
    $reset_token = bin2hex(random_bytes(32));
    $expires_at = date("Y-m-d H:i:s", strtotime("+1 hour")); 

    // 刪除舊的 Reset Token（如果有）
    $conn->query("DELETE FROM password_resets WHERE email = '$email'");

    // 存入新的 Reset Token
    $insert_stmt = $conn->prepare("INSERT INTO password_resets (email, reset_token, expires_at) VALUES (?, ?, ?)");
    $insert_stmt->bind_param("sss", $email, $reset_token, $expires_at);
    
    if ($insert_stmt->execute()) {
        // ✅ 發送重設密碼郵件給該用戶
        $reset_link = "http://localhost:8000/auth_system/public/reset_password.html?token=$reset_token";
        if (sendPasswordResetEmail($email, $reset_link)) {
            echo json_encode(["status" => "success", "message" => "✅ 重設密碼郵件已發送！請檢查您的信箱"]);
        } else {
            echo json_encode(["status" => "error", "message" => "❌ 郵件發送失敗，請稍後再試"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "❌ 發送失敗，請稍後再試"]);
    }

    $conn->close();
}
?>
