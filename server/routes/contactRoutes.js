const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/", (req, res) => {

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            message: "Please fill all required fields"
        });
    }

    const sql = `
        INSERT INTO contacts (name, email, subject, message)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, subject, message],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: "Failed to send message"
                });
            }

            res.status(201).json({
                message: "Message sent successfully"
            });
        }
    );
});

module.exports = router;