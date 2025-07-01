function register() {
    let username = $("#username").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();

    if (username === "" || email === "" || password === "") {
        $("#message").text("❌ 所有欄位皆需填寫！");
        return;
    }

    $.ajax({
        url: "http://localhost:8000/register.php",
        type: "POST",
        data: { username: username, email: email, password: password },
        dataType: "json",  // 告訴 jQuery 期望 JSON 格式
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
