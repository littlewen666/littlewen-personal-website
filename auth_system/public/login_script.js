
function register() {
    let username = $("#username").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();

    if (username === "" || email === "" || password === "") {
        $("#message").text("❌ 所有欄位皆需填寫！");
        return;
    }

    $.ajax({
        url: "http://localhost:8000/auth_system/backend/register.php",  // 正確的 API 路徑
        type: "POST",
        data: { username: username, email: email, password: password },
        dataType: "json",
        success: function(response) {
            $("#message").css("color", response.status === "success" ? "green" : "red").text(response.message);
            if (response.status === "success") {
                setTimeout(() => window.location.href = "login.html", 2000);
            }
        },
        error: function(xhr, status, error) {
            console.log("❌ AJAX 錯誤", error);
            $("#message").css("color", "red").text("❌ 註冊失敗，請稍後再試！");
        }
    });
}

function login() {
    let email = $("#login_email").val().trim();
    let password = $("#login_password").val().trim();

    if (email === "" || password === "") {
        $("#login_message").text("❌ 所有欄位皆需填寫！");
        return;
    }

    $.ajax({
        url: "http://localhost:8000/auth_system/backend/login.php",
        type: "POST",
        data: { email: email, password: password },
        dataType: "json",
        success: function(response) {
            $("#login_message").css("color", response.status === "success" ? "green" : "red").text(response.message);
            if (response.status === "success") {
                // 存儲更多的用戶身份資訊
                localStorage.setItem("session_token", response.session_token);
                localStorage.setItem("username", response.username);
                localStorage.setItem("email", response.email);  // 用戶的電子郵件
                localStorage.setItem("user_id", response.id);  // 用戶 ID
                
                // 重定向至 index.html
                setTimeout(() => window.location.href = "http://localhost:5500/index.html", 2000);
            } else {
                // 顯示錯誤訊息，包括剩餘登入次數
                const message = response.message + " 🚫 錯誤次數：" + response.attempts + "，剩餘次數：" + response.remaining_attempts;
                $("#login_message").css("color", "red").text(message);
            }
        },
        error: function(xhr, status, error) {
            console.log("❌ AJAX 錯誤", error);
            $("#login_message").css("color", "red").text("❌ 登入失敗，請稍後再試！");
        }
    });
}

function guestLogin() {
    $.ajax({
        url: "http://localhost:8000/auth_system/backend/guest_login.php",  // API 路徑
        type: "POST",
        dataType: "json",
        success: function(response) {
            if (response.status === "success") {
                // 存儲訪客身份資訊到 localStorage
                localStorage.setItem("guest_session", response.session_id);  // 訪客的 session ID
                localStorage.setItem("guest_username", response.guest_username);  // 訪客的用戶名（默認為 "Guest"）

                // 跳轉至 index.html
                window.location.href = "http://localhost:5500/index.html";
            } else {
                $("#login_message").text(response.message);  // 顯示錯誤訊息
            }
        },
        error: function() {
            $("#login_message").text("❌ 訪客登入失敗！");
        }
    });
}

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return params.get('token'); // 取得 URL 中的 token
}

function resetPassword() {
    const token = getQueryParams();
    const newPassword = $("#new_password").val().trim();
    const confirmPassword = $("#confirm_password").val().trim();

    if (newPassword === "" || confirmPassword === "") {
        $("#reset_message").text("❌ 所有欄位皆需填寫！");
        return;
    }

    if (newPassword !== confirmPassword) {
        $("#reset_message").text("❌ 密碼不一致，請重新輸入！");
        return;
    }

    // 傳送密碼重設請求
    $.ajax({
        url: "http://localhost:8000//backend/reset_password.php",
        type: "POST",
        data: { token: token, new_password: newPassword },
        dataType: "json",
        success: function(response) {
            $("#reset_message").css("color", response.status === "success" ? "green" : "red").text(response.message);
            if (response.status === "success") {
                setTimeout(() => window.location.href = "login.html", 2000); // 成功後跳轉至登入頁
            }
        },
        error: function(xhr, status, error) {
            console.log("❌ AJAX 錯誤", error);
            $("#reset_message").css("color", "red").text("❌ 重設密碼失敗，請稍後再試！");
        }
    });
}
