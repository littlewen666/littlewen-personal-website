<?php
session_start();
require_once "db.php";

header("Access-Control-Allow-Origin: http://localhost:5500");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $session_id = bin2hex(random_bytes(16));

    $stmt = $conn->prepare("INSERT INTO guest_users (session_id) VALUES (?)");
    $stmt->bind_param("s", $session_id);
    
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "session_id" => $session_id]);
    } else {
        echo json_encode(["status" => "error", "message" => "❌ 訪客登入失敗！"]);
    }

    $conn->close();
}
?>
