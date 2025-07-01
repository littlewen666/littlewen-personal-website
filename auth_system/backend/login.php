<?php
session_start();
require_once "db.php";

header("Access-Control-Allow-Origin: http://localhost:5500");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);
    $ip_address = $_SERVER["REMOTE_ADDR"]; // 紀錄 IP 來防止暴力破解

    if (empty($email) || empty($password)) {
        echo json_encode(["status" => "error", "message" => "❌ 所有欄位皆需填寫！"]);
        exit();
    }

    // 1️⃣ 檢查是否超過登入失敗次數 (例如 5 次)
    $check_attempts = $conn->prepare("SELECT COUNT(*) AS attempt_count FROM login_attempts WHERE email = ? AND attempt_time > (NOW() - INTERVAL 15 MINUTE)");
    $check_attempts->bind_param("s", $email);
    $check_attempts->execute();
    $result = $check_attempts->get_result()->fetch_assoc();  // 使用 fetch_assoc()
    $attempts = $result['attempt_count'];

    // 顯示錯誤次數，並在次數過多時給出警告
    if ($attempts >= 5) {
        echo json_encode(["status" => "error", "attempts" => $attempts , "message" => "🚫 嘗試登入過多次，請稍後再試！(錯誤次數: $attempts 次，將禁止登入 15 分鐘)"]);
        exit();
    }

    // 檢查帳號是否存在
    $stmt = $conn->prepare("SELECT id, username, email, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    // 檢查是否找到用戶
    if ($stmt->num_rows > 0) {
        // 綁定結果到變數
        $stmt->bind_result($user_id, $username, $email, $hashed_password);
        $stmt->fetch();

        // 驗證密碼
        if (password_verify($password, $hashed_password)) {
            $_SESSION["user_id"] = $user_id;
            $_SESSION["username"] = $username;

            // 生成 Session Token
            $session_token = bin2hex(random_bytes(32));
            $expires_at = date("Y-m-d H:i:s", strtotime("+1 day"));
            $insert_session = $conn->prepare("INSERT INTO sessions (user_id, session_token, expires_at) VALUES (?, ?, ?)");
            $insert_session->bind_param("iss", $user_id, $session_token, $expires_at);
            $insert_session->execute();

            // ✅ 登入成功後，重置錯誤次數
            $reset_attempts = $conn->prepare("DELETE FROM login_attempts WHERE email = ?");
            $reset_attempts->bind_param("s", $email);
            $reset_attempts->execute();

            // 返回成功的登入訊息
            $response = [
                "status" => "success",
                "message" => "✅ 登入成功！請稍後跳轉",
                "session_token" => $session_token,
                "username" => $username,
                "email" => $email,
                "id" => $user_id
            ];
            echo json_encode($response);
        } else {
            // 密碼錯誤，記錄失敗嘗試
            $log_attempt = $conn->prepare("INSERT INTO login_attempts (email, ip_address) VALUES (?, ?)");
            $log_attempt->bind_param("ss", $email, $ip_address);
            $log_attempt->execute();

            echo json_encode([
                "status" => "error",
                "attempts" => $attempts + 1,  // 顯示目前錯誤次數
                "remaining_attempts" => 5 - ($attempts + 1),  // 顯示剩餘次數
                "message" => " ❌ 密碼錯誤！ 連續錯誤達到 5 次將禁止 $email 登入 15 分鐘！"
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "❌ 帳號不存在！",
            "attempts" => $attempts,  // 顯示目前錯誤次數
            "remaining_attempts" => 5 - $attempts,  // 顯示剩餘次數
        ]);
    }

    $conn->close();
}
?>
