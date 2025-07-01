<?php
header("Access-Control-Allow-Origin: http://localhost:5500");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$host = "127.0.0.1";
$port = 3310;
$dbname = "user_system";
$username = "root";
$password = "littlewen666";

$conn = new mysqli($host, $username, $password, $dbname, $port);
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "❌ 資料庫連接失敗: " . $conn->connect_error]);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $pass = trim($_POST["password"]);

    // 檢查是否有空值
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

    // 密碼加密
    $hashed_password = password_hash($pass, PASSWORD_BCRYPT);

    // 檢查 Email 是否已存在
    $check = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $check->bind_param("s", $email);
    $check->execute();
    $result = $check->get_result();
    
    if ($result->num_rows > 0) {
        echo json_encode(["status" => "error", "message" => "❌ Email 已被使用！"]);
    } else {
        // 插入新用戶
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $user, $email, $hashed_password);
        
        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "✅ 註冊成功！請登入"]);
        } else {
            echo json_encode(["status" => "error", "message" => "❌ 註冊失敗，請稍後再試"]);
        }
    }
    $conn->close();
}
?>
