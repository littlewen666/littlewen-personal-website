

function handleScrollAnimations() {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
      
      if (inView) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
  }

  document.addEventListener("scroll", handleScrollAnimations);
  document.addEventListener("DOMContentLoaded", () => {
    handleScrollAnimations();  // 初始載入時也檢查一次
  });
  document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("rippleCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    let ripples = [];

    document.addEventListener("click", (e) => {
      for (let i = 0; i < 4 + Math.random() * 2; i++) { // 生成4~5個水波
        let offsetX = (Math.random() - 0.5) * 10; // 讓水波紋位置有些微偏移
        let offsetY = (Math.random() - 0.5) * 10;

        ripples.push({
          x: e.clientX + offsetX,
          y: e.clientY + offsetY,
          radius: 0,
          alpha: 1,
          colorFactor: Math.random() * 50 + 50 // 讓每個水波顏色稍微不同
        });
      }
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < ripples.length; i++) {
        let ripple = ripples[i];
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = `rgba(${ripple.colorFactor}, ${ripple.colorFactor}, ${ripple.colorFactor}, ${ripple.alpha})`; 
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.closePath();

        ripple.radius += 1.5; 
        ripple.alpha -= 0.02; 

        if (ripple.alpha <= 0) {
          ripples.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  });
// Materialize - Initializers
$(document).ready(function () {
    $(".scrollspy").scrollSpy()
    // Initialize collapse button
    $(".button-collapse").sideNav({
        menuWidth: 190, // Default is 240
        edge: "left", // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    })
    })

var typed = new Typed('.typing',{
    strings: ["Learning", "Development", "Exploration", "Journaling"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 40
    });


    window.onload = function() {
      checkLoginStatus();
  };
  
  function checkLoginStatus() {
    const guestSession = localStorage.getItem("session_token");
    const username = localStorage.getItem("username");
    const user_id = localStorage.getItem("user_id");
    const currentLang = localStorage.getItem("language") || "zh"; // 確保語言設定

    console.log("Guest session: ", guestSession);  
    console.log("Username: ", username); 
    console.log("user_id: ", user_id);
    console.log("Current Language: ", currentLang);

    const loginButton = document.getElementById("loginButton");
    if (!loginButton) {
        console.warn("loginButton not found.");
        return;
    }

    if (guestSession && username) {
        loginButton.innerText = currentLang === "zh" 
            ? `您好! ${username} 點此前往帳戶設定` 
            : `Hello! ${username}, Click here to go to account settings`;

        loginButton.onclick = function() {
            setTimeout(() => {
                window.location.href = "http://localhost:5500/auth_system/public/account.html"; 
            }, 100); 
        };
    } else {
        loginButton.innerText = currentLang === "zh" 
            ? "請登入使用留言功能" 
            : "Please log in to use the commenting feature";

        loginButton.onclick = function() {
            setTimeout(() => {
                window.location.href = "http://localhost:5500/auth_system/public/login.html"; 
            }, 100);  
        };
    }
}


  
  function handleLoginClick() {
      // 點擊時檢查登入狀態並執行對應動作
      checkLoginStatus();
  }
  