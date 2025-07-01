
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


// 更新用戶資料
document.getElementById("updateButton").addEventListener("click", function() {
    const newUsername = document.getElementById("newUsername").value.trim();
    const newEmail = document.getElementById("newEmail").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();

    if (newUsername === "" || newEmail === "" || newPassword === "") {
        alert("所有欄位皆需填寫！");
        return;
    }

    // 呼叫後端更新資料
    $.ajax({
        url: "http://localhost:8000/auth_system/backend/update_account.php",
        type: "POST",
        data: { username: newUsername, email: newEmail, password: newPassword },
        success: function(response) {
            if (response.status === "success") {
                // 更新本地存儲
                localStorage.setItem("username", newUsername);
                localStorage.setItem("email", newEmail);
                alert("資料更新成功！");
                window.location.reload();
            } else {
                alert(response.message);
            }
        },
        error: function() {
            alert("更新資料失敗，請稍後再試！");
        }
    });
});

// 登出功能
document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.removeItem("session_token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("user_id");
    alert("您已成功登出！");
    window.location.href = "http://localhost:5500/auth_system/public/login.html";
});

// 刪除帳號
document.getElementById("deleteButton").addEventListener("click", function() {
    if (confirm("確定要刪除您的帳號嗎？此操作無法撤銷！")) {
        // 呼叫後端刪除帳號
        $.ajax({
            url: "http://localhost:8000/auth_system/backend/delete_account.php",
            type: "POST",
            data: { email: localStorage.getItem("email") },
            success: function(response) {
                if (response.status === "success") {
                    alert("帳號已成功刪除！");
                    window.location.href = "http://localhost:5500/auth_system/public/login.html";
                } else {
                    alert(response.message);
                }
            },
            error: function() {
                alert("刪除帳號失敗，請稍後再試！");
            }
        });
    }
});
document.getElementById("toggleLoginPassword").addEventListener("click", function () {
    let passwordField = document.getElementById("login_password");
    let icon = this.querySelector("i");

    if (passwordField.type === "password") {
        passwordField.type = "text";  // 顯示密碼
        icon.textContent = "visibility_off";  // 切換成隱藏圖標
    } else {
        passwordField.type = "password";  // 隱藏密碼
        icon.textContent = "visibility";  // 切換成顯示圖標
    }
});
