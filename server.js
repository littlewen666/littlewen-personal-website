require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // 允許 CORS

// 🔹 設定 Nodemailer 傳送信件
const transporter = nodemailer.createTransport({
    service: "gmail", // 你可以改成其他 SMTP 服務
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// 🔹 處理前端送來的 Email 請求
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    // 檢查是否有缺少必要資訊
    if (!name || !email || !message) {
        return res.status(400).json({ error: "請填寫完整資訊！" });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "littlewen6@gmail.com", // 你的 Email
        subject: `來自 ${name} 的訊息`,
        text: `姓名: ${name}\n電子郵件: ${email}\n\n訊息:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "Email 已成功發送！" });
    } catch (error) {
        res.status(500).json({ error: "無法發送 Email，請稍後再試！" });
    }
});

// 監聽 3000 端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
