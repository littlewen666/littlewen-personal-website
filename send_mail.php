<?php

$allowed_origins = ["http://localhost:5500", "http://127.0.0.1:5500"];

if (isset($_SERVER["HTTP_ORIGIN"]) && in_array($_SERVER["HTTP_ORIGIN"], $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER["HTTP_ORIGIN"]);
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Access-Control-Allow-Credentials: true");

// 如果是 OPTIONS 預檢請求，直接返回 200
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}





use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'] ?? '未提供姓名';
    $email = $_POST['email'] ?? '未提供 Email';
    $subject = $_POST['subject'] ?? '無標題';
    $message = $_POST['message'] ?? '未提供訊息';

    // 確保資訊完整
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo json_encode(["success" => false, "error" => "請填寫完整資訊！"]);
        exit;
    }

    $mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = '11011102@gm.nttu.edu.tw'; // 你的 Gmail
        $mail->Password = 'pekn ubce tjyb agns'; // 使用 Gmail 應用程式密碼
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress('littlewen6@gmail.com'); // ✅ 正確的收件人

        $mail->Subject = $subject;
        $mail->Body = "姓名: $name\nEmail: $email\n\n訊息:\n$message";

        if ($mail->send()) {
            echo json_encode(["success" => true, "message" => "📩 Email 已成功發送！"]);
        } else {
            echo json_encode(["success" => false, "error" => "郵件發送失敗"]);
        }
    } catch (Exception $e) {
        echo json_encode(["success" => false, "error" => $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "不允許的請求方法"]);
}
?>
