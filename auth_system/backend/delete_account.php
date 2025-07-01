<?php
session_start();
require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // 確保傳遞的是 user_id
    $user_id = trim($_POST["user_id"]);

    // 確保資料不為空
    if (empty($user_id)) {
        echo json_encode(["status" => "error", "message" => "無效的用戶 ID"]);
        exit();
    }

    // 刪除帳號
    $stmt = $conn->prepare("DELETE FROM users WHERE id = ?");
    $stmt->bind_param("i", $user_id);

    if ($stmt->execute()) {
        // 刪除成功後清除 session
        session_unset();
        session_destroy();
        echo json_encode(["status" => "success", "message" => "帳號已成功刪除！"]);
    } else {
        echo json_encode(["status" => "error", "message" => "刪除帳號失敗，請稍後再試！"]);
    }

    $stmt->close();
    $conn->close();
}
?>
