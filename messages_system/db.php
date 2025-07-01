<?php
header("Access-Control-Allow-Origin: http://localhost:5500");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// MySQL 連線
$host = "127.0.0.1";
$port = 3310;
$dbname = "user_system";
$username = "root";
$password = "littlewen666";

$conn = new mysqli($host, $username, $password, $dbname, $port);
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "❌ 資料庫連接失敗: " . $conn->connect_error]));
}
?>
