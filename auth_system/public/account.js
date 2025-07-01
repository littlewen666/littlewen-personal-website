window.onload = function() {
    checkLoginStatus();
};

function checkLoginStatus() {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");

    if (username && email) {
        // 顯示帳戶資訊
        document.getElementById("userName").innerText = `姓名: ${username}`;
        document.getElementById("userEmail").innerText = `電子郵件: ${email}`;
    } else {
        // 未登入，跳轉至登入頁
        window.location.href = "http://localhost:5500/auth_system/public/login.html";
    }
}

// 登出
document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.removeItem("session_token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("user_id");
    alert("您已成功登出！");
    window.location.href = "http://localhost:5500/index.html";
});

// 更新用戶資料
// 更新用戶資料
document.getElementById("updateButton").addEventListener("click", function() {
    const newUsername = document.getElementById("newUsername").value.trim();
    const newEmail = document.getElementById("newEmail").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();

    // 呼叫後端更新資料
    $.ajax({
        url: "http://localhost:8000/auth_system/backend/update_account.php",
        type: "POST",
        data: { 
            username: newUsername, 
            email: newEmail, 
            password: newPassword,
            current_password: document.getElementById("currentPassword").value.trim(), 
            user_id: localStorage.getItem("user_id")  // 傳遞用戶 ID
        },
        success: function(response) {
            if (response.status === "success") {
                // 更新本地存儲
                if (newUsername) localStorage.setItem("username", newUsername);
                if (newEmail) localStorage.setItem("email", newEmail);

                // 顯示成功訊息
                alert(response.message);  // 顯示更新成功的提示

                // 更新畫面顯示
                document.getElementById("userName").innerText = `姓名: ${newUsername || localStorage.getItem("username")}`;
                document.getElementById("userEmail").innerText = `電子郵件: ${newEmail || localStorage.getItem("email")}`;
                document.getElementById("userPassword").innerText = newPassword ? "******" : document.getElementById("userPassword").innerText;
                
                // 隱藏表單，顯示更新後資料
                toggleField("newUsernameField");
                toggleField("newEmailField");
                toggleField("newPasswordField");
            } else {
                alert(response.message);  // 顯示錯誤訊息
            }
        },
        error: function() {
            alert("更新資料失敗，請稍後再試！");
        }
    });
});


document.getElementById("deleteButton").addEventListener("click", function() {
    if (confirm("再次確定要刪除您的帳號嗎？此操作無法撤銷！")) {
        // 呼叫後端刪除帳號
        $.ajax({
            url: "http://localhost:8000/auth_system/backend/delete_account.php",
            type: "POST",
            data: { user_id: localStorage.getItem("user_id") }, 
            success: function(response) {
                if (response.status === "success") {
                    alert("帳號已成功刪除！");
                    window.location.href = "http://localhost:5500/index.html";  
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
