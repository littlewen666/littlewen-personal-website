<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// PHPMailer 位置
require_once __DIR__ . '/../../PHPMailer-master/src/Exception.php';
require_once __DIR__ . '/../../PHPMailer-master/src/PHPMailer.php';
require_once __DIR__ . '/../../PHPMailer-master/src/SMTP.php';

function sendPasswordResetEmail($email, $reset_link) {
    $mail = new PHPMailer(true);

    try {
        // 設定 SMTP 伺服器
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; 
        $mail->SMTPAuth = true;
        $mail->Username = '11011102@gm.nttu.edu.tw';  // ✅ **這裡是發送者 Gmail**
        $mail->Password = 'pekn ubce tjyb agns';    // ✅ **你的 Gmail 應用程式密碼**
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // 設定 Email 內容
        $mail->setFrom('11011102@gm.nttu.edu.tw', 'Personal website Support'); // ✅ **發件人**
        $mail->addAddress($email); // ✅ **收件人（用戶輸入的 Email）**
        $mail->Subject = 'Password Reset Request';
        $mail->Body = "請點擊以下連結來重設您的密碼 (Please click the link below to reset your password):\n$reset_link\n該連結將在 1 小時內失效 (This link will expire in 1 hour).";

        // 發送 Email
        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("Email 發送失敗 (Email sending failed): " . $mail->ErrorInfo);
        return false;
    }
}
?>

