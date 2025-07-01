<?php
session_start();
require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user_id = trim($_POST["user_id"]);
    $username = isset($_POST["username"]) ? trim($_POST["username"]) : null;
    $email = isset($_POST["email"]) ? trim($_POST["email"]) : null;
    $password = isset($_POST["password"]) ? password_hash(trim($_POST["password"]), PASSWORD_BCRYPT) : null;
    $currentPassword = trim($_POST["current_password"]);

    // 檢查當前密碼是否正確
    if ($currentPassword) {
        $stmt = $conn->prepare("SELECT password FROM users WHERE id = ?");
        $stmt->bind_param("i", $user_id);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($hashed_password);
            $stmt->fetch();

            if (!password_verify($currentPassword, $hashed_password)) {
                echo json_encode(["status" => "error", "message" => "❌ 當前密碼錯誤！"]);
                exit;
            }
        } else {
            echo json_encode(["status" => "error", "message" => "❌ 用戶不存在！"]);
            exit;
        }
    }

    // 如果更改了 username，檢查是否已存在相同的 username
    if ($username) {
        $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? AND id != ?");
        $stmt->bind_param("si", $username, $user_id);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            echo json_encode(["status" => "error", "message" => "❌ 該名稱已被使用！"]);
            exit;
        }
    }

    // 更新資料庫
    $updateQuery = "UPDATE users SET ";
    $params = [];
    $types = "";

    if ($username) {
        $updateQuery .= "username = ?, ";
        $params[] = $username;
        $types .= "s";
    }
    if ($email) {
        $updateQuery .= "email = ?, ";
        $params[] = $email;
        $types .= "s";
    }
    if ($password) {
        $updateQuery .= "password = ?, ";
        $params[] = $password;
        $types .= "s";
    }

    // 移除最後的逗號
    $updateQuery = rtrim($updateQuery, ", ");
    $updateQuery .= " WHERE id = ?";

    $params[] = $user_id;
    $types .= "i";

    // 準備更新語句
    $stmt = $conn->prepare($updateQuery);
    $stmt->bind_param($types, ...$params);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "帳戶資料已更新！"]);
    } else {
        echo json_encode(["status" => "error", "message" => "資料更新失敗，請稍後再試！"]);
    }

    $stmt->close();
    $conn->close();
}
?>
