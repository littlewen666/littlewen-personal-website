document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // 防止表單刷新

    // 取得表單資料
    const formData = new FormData(this);

    // 前端輸入驗證
    if (!formData.get("name") || !formData.get("email") || !formData.get("subject") || !formData.get("message")) {
        document.getElementById("formMessage").textContent = "❌ 請填寫完整資訊！";
        return;
    }

    // 發送請求到 PHP 處理郵件發送
    const response = await fetch("http://localhost:8000/send_mail.php", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        },
        credentials: "include" // 允許傳送 cookie 或 token
    });

    const data = await response.json(); // 解析 JSON 回應

    // 顯示回應訊息
    document.getElementById("formMessage").textContent = data.success ? "✅ Email 已成功發送！" : "❌ 發送失敗：" + data.error;
});

// 🔴 摺疊表單按鈕事件
document.getElementById("toggleForm").addEventListener("click", function () {
    const formContainer = document.getElementById("contactFormContainer");
    const lifeSection = document.getElementById("life");

    formContainer.classList.toggle("hidden");

});
