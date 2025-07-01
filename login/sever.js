require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "yourdb"
});

db.connect(err => {
    if (err) throw err;
    console.log("資料庫連線成功");
});

// 🔹 註冊 API
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query("INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)", 
        [username, email, hashedPassword], 
        (err, result) => {
            if (err) return res.status(500).send("錯誤：" + err);
            res.status(201).send("註冊成功");
        });
});

// 🔹 登入 API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err || results.length === 0) return res.status(400).send("用戶不存在");

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) return res.status(401).send("密碼錯誤");

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token, username: user.username });
    });
});

// 伺服器監聽
app.listen(3000, () => console.log("伺服器運行在 http://localhost:3000"));
