//https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAbDNyZzNk-xNqPXWZdYB9heGzPuoML-rE

document.getElementById("chatButton").onclick = function() {
    let chatBox = document.getElementById("chatContainer");
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
};


function closeChat() {
    document.getElementById("chatContainer").style.display = "none";
}



async function loadPrompt() {
    const response = await fetch("promotion.yaml"); // 讀取 YAML 檔案
    const yamlText = await response.text(); // 以文字格式讀取
    const data = jsyaml.load(yamlText); // 解析 YAML

    return data.assistence || "找不到 AI 助理的設定";
}

async function chatGemini(query) {
    let chatBody = document.getElementById("chatBody");
    chatBody.innerHTML += `<p><strong>您：</strong> ${query}</p>`;
    document.getElementById("chatInput").value = "";

    // 取得 AI 助理的 Prompt
    const assistPrompt = await loadPrompt();

    // 發送請求到 Gemini API
    const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAbDNyZzNk-xNqPXWZdYB9heGzPuoML-rE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: `${assistPrompt}\n\n使用者問題：${query}` }] }]
        })
    });

    const data = await response.json();
    let reply = data.candidates ? data.candidates[0].content.parts[0].text : "抱歉，我無法回應。";

    chatBody.innerHTML += `<p><strong>AI：</strong> ${reply}</p>`;
    chatBody.scrollTop = chatBody.scrollHeight;
}

// 發送按鈕
document.getElementById("sendButton_AI").onclick = function() {
    let userQuery = document.getElementById("chatInput").value;
    if (userQuery.trim() !== "") {
        chatGemini(userQuery);
    }
};
document.getElementById("chatInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // 檢查是否按下 Enter
      event.preventDefault(); // 避免換行
      document.getElementById("sendButton_AI").click(); // 觸發按鈕點擊事件
    }
  });
  



document.getElementById("chatButton").onclick = function() {
    let chatBox = document.getElementById("chatContainer");
    let button = document.getElementById("chatButton");

    if (chatBox.style.display === "flex") {
        chatBox.style.display = "none";
    } else {
        let rect = button.getBoundingClientRect(); // 取得按鈕的位置
        chatBox.style.right = window.innerWidth - rect.right  + "px"; // 讓對話框對齊按鈕左側
        chatBox.style.bottom = window.innerHeight - rect.top  + "px"; // 讓對話框顯示在按鈕上方
        chatBox.style.display = "flex";
    }
};
// 讓 `chatContainer` 可以拖動
dragElement(document.getElementById("chatContainer"));

function dragElement(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  // 讓 `chatHeader` 成為拖動的手把
  document.getElementById("chatHeader").onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
