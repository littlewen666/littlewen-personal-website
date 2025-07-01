document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    function applyDarkMode(state) {
        if (state === "enabled") {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    }

    // 讀取 localStorage 並套用黑暗模式
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "enabled") {
        applyDarkMode("enabled");
    }

    // 監聽按鈕點擊，切換模式
    toggleButton.addEventListener("click", function () {
        const currentMode = body.classList.contains("dark-mode") ? "disabled" : "enabled";
        applyDarkMode(currentMode);
    });
});