<?php
session_start();
if (!isset($_SESSION["user_id"])) {
    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <title>會員中心</title>
</head>
<body>

    <h2>歡迎, <?php echo $_SESSION["username"]; ?>！</h2>
    <a href="logout.php">登出</a>

</body>
</html>
