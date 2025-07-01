$(document).ready(function () {
    let offset = 0;
    const limit = 5;

    // 取得留言
    function loadMessages() {
        $.ajax({
            url: `http://localhost:8000/messages_system/messages.php?offset=${offset}&limit=${limit}`,
            type: "GET",
            dataType: "json",
            xhrFields: { withCredentials: true }, // 確保傳遞 session
            success: function (data) {
                if (data.status === "success") {
                    data.messages.forEach(renderMessage);
                    offset += limit;
                } else {
                    alert("❌ 載入留言失敗！");
                }
            },
            error: function () {
                alert("❌ 伺服器錯誤，請稍後再試！");
            }
        });
    }

    // 顯示留言
    function renderMessage(message) {
        const messageList = $("#messageList");
        const li = $("<li>").addClass("collection-item").attr("data-id", message.id);

        let messageHTML = `
            <strong>${message.username}</strong>：${message.content}
            <br><small>${message.created_at}</small>
            <span class="reaction-btn" onclick="reactToMessage(${message.id})">❤️</span>
            <span class="reply-btn" onclick="showReplyBox(${message.id})">回覆</span>`;

        if (message.isOwner) {
            messageHTML += `
                <span class="edit-btn" onclick="editMessage(${message.id})">✏️</span>
                <span class="delete-btn" onclick="deleteMessage(${message.id})">🗑️</span>`;
        }

        messageHTML += `<div class="replies" id="replies-${message.id}"></div>`;

        li.html(messageHTML);
        messageList.append(li);
    }

    // 送出留言
    $("#submitMessage").click(function () {
        const content = $("#messageInput").val().trim();
        const session_token = localStorage.getItem("session_token");
    
        if (!content) {
            alert("❌ 留言不能為空！");
            return;
        }
    
        console.log("📡 發送留言請求...", { content });
    
        $.ajax({
            url: "http://localhost:8000/messages_system/messages.php",
            type: "POST",
            contentType: "application/json",
            headers: { "Authorization": `Bearer ${session_token}` },
            data: JSON.stringify({ content }),
            success: function (data) {
                console.log("✅ 留言回應:", data);
                if (data.status === "success") {
                    $("#messageInput").val("");
                    renderMessage(data.message);
                } else {
                    alert("❌ 發送留言失敗：" + data.message);
                }
            },
            error: function (xhr, status, error) {
                console.error("❌ AJAX 錯誤:", error, "狀態碼:", xhr.status, "回應:", xhr.responseText);
                alert("❌ 發送留言時發生錯誤，請檢查 F12 Console！");
            }
        });
    });
    

    // 點擊查看更多
    $("#loadMore").click(loadMessages);

    loadMessages(); // 初始載入留言
});

// 回覆留言
function showReplyBox(messageId) {
    const replyBox = $(`
        <div class="reply-box">
            <textarea id="reply-${messageId}" placeholder="回覆內容..."></textarea>
            <button onclick="sendReply(${messageId})" class="btn small teal">回覆</button>
        </div>
    `);
    $(`#replies-${messageId}`).append(replyBox);
}

function sendReply(messageId) {
    const content = $(`#reply-${messageId}`).val().trim();
    const session_token = localStorage.getItem("session_token");

    if (!content) {
        alert("❌ 回覆內容不能為空！");
        return;
    }

    $.ajax({
        url: "http://localhost:8000/messages_system/replies.php",
        type: "POST",
        contentType: "application/json",
        headers: { "Authorization": `Bearer ${session_token}` },
        data: JSON.stringify({ message_id: messageId, content }),
        success: function (data) {
            if (data.status === "success") {
                renderMessage(data.reply);
            } else {
                alert("❌ 回覆失敗！");
            }
        },
        error: function () {
            alert("❌ 伺服器錯誤，請稍後再試！");
        }
    });
}

// 按表情符號
function reactToMessage(messageId) {
    const session_token = localStorage.getItem("session_token");

    $.ajax({
        url: "http://localhost:8000/messages_system/reactions.php",
        type: "POST",
        contentType: "application/json",
        headers: { "Authorization": `Bearer ${session_token}` },
        data: JSON.stringify({ message_id: messageId, reaction_type: "like" }),
        success: function (data) {
            if (!data.success) {
                alert("❌ 反應失敗！");
            }
        },
        error: function () {
            alert("❌ 伺服器錯誤，請稍後再試！");
        }
    });
}

// 刪除留言
function deleteMessage(messageId) {
    const session_token = localStorage.getItem("session_token");

    $.ajax({
        url: `http://localhost:8000/messages_system/messages/${messageId}`,
        type: "DELETE",
        headers: { "Authorization": `Bearer ${session_token}` },
        success: function (data) {
            if (data.status === "success") {
                $(`[data-id='${messageId}']`).remove();
            } else {
                alert("❌ 刪除失敗！");
            }
        },
        error: function () {
            alert("❌ 伺服器錯誤，請稍後再試！");
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    fetchUserInfo();
});

async function fetchUserInfo() {
    try {
        let response = await fetch("http://localhost:8000/api/userinfo", {
            method: "GET",
            credentials: "include", // 確保攜帶 session
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("❌ 無法獲取用戶資訊！");
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
