<?php
require_once "db.php";
header("Access-Control-Allow-Origin: http://localhost:5500");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $token = $_POST["token"];
    $new_password = $_POST["new_password"];
    $lang = $_POST["lang"] ?? "zh"; 

    // 設定雙語翻譯
    $messages = [
        "zh" => [
            "fields_required" => "❌ 所有欄位皆需填寫！",
            "invalid_token" => "❌ 無效的重設連結或已過期！",
            "expired_token" => "❌ 該重設連結已過期！",
            "reset_success" => "✅ 密碼重設成功！請使用新密碼登入。",
            "reset_failed" => "❌ 密碼重設失敗，請稍後再試。"
        ],
        "en" => [
            "fields_required" => "❌ All fields are required!",
            "invalid_token" => "❌ Invalid reset link or expired!",
            "expired_token" => "❌ The reset link has expired!",
            "reset_success" => "✅ Password reset successful! Please log in with your new password.",
            "reset_failed" => "❌ Password reset failed, please try again later."
        ]
    ];

    if (empty($token) || empty($new_password)) {
        echo json_encode(["status" => "error", "message" => $messages[$lang]["fields_required"]]);
        exit();
    }

    // 檢查 token 是否存在
    $stmt = $conn->prepare("SELECT email, expires_at FROM password_resets WHERE reset_token = ?");
    $stmt->bind_param("s", $token);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 0) {
        echo json_encode(["status" => "error", "message" => $messages[$lang]["invalid_token"]]);
        exit();
    }

    // 取得 token 資料
    $stmt->bind_result($email, $expires_at);
    $stmt->fetch();

    if (strtotime($expires_at) < time()) {
        echo json_encode(["status" => "error", "message" => $messages[$lang]["expired_token"]]);
        exit();
    }

    // 更新密碼
    $hashed_password = password_hash($new_password, PASSWORD_BCRYPT);
    $update_stmt = $conn->prepare("UPDATE users SET password = ? WHERE email = ?");
    $update_stmt->bind_param("ss", $hashed_password, $email);
    
    if ($update_stmt->execute()) {
        // 刪除使用過的 reset_token
        $conn->query("DELETE FROM password_resets WHERE reset_token = '$token'");
        echo json_encode(["status" => "success", "message" => $messages[$lang]["reset_success"]]);
    } else {
        echo json_encode(["status" => "error", "message" => $messages[$lang]["reset_failed"]]);
    }

    $conn->close();
}
?>

?>
