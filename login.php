<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登入 | Web App</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

    <div class="container">
        <h2>登入帳號</h2>

        <div class="input-group">
            <label for="login_email">電子郵件</label>
            <input type="email" id="login_email" placeholder="請輸入您的 Email">
        </div>

        <div class="input-group">
            <label for="login_password">密碼</label>
            <div class="password-wrapper">
                <input type="password" id="login_password" placeholder="請輸入密碼">
                <span id="toggleLoginPassword">👁</span>
            </div>
        </div>

        <button onclick="login()">登入</button>
        <p id="login_message"></p>

        <div class="other-options">
            <p>還沒有帳號？<a href="register.html">立即註冊</a></p>
            <p><a href="forgot_password.html">忘記密碼？</a></p>

            <p>使用 Google 登入</p>
            <button class="google-btn" onclick="googleLogin()">🔵 Google 登入</button>

            <p>訪客登入</p>
            <button class="guest-btn" onclick="guestLogin()">👤 訪客登入</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
