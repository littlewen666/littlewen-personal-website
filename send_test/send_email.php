<?php
header("Access-Control-Allow-Origin: *");  // 允許跨域請求
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'] ?? '未提供姓名';
    $email = $_POST['email'] ?? '未提供Email';
    $message = $_POST['message'] ?? '未提供訊息';

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["success" => false, "error" => "請填寫完整資訊！"]);
        exit;
    }

    $mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Gmail SMTP 伺服器
        $mail->SMTPAuth = true;
        $mail->Username = '11011102@gm.nttu.edu.tw';  // 你的 Gmail
        $mail->Password = 'pekn ubce tjyb agns';  // 你的 Gmail 應用程式密碼
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress('11011102@gm.nttu.edu.tw');  // 收件者
        $mail->Subject = "來自 $name 的訊息";
        $mail->Body = "姓名: $name\nEmail: $email\n\n訊息:\n$message";

        if ($mail->send()) {
            echo json_encode(["success" => true, "message" => "郵件發送成功"]);
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
