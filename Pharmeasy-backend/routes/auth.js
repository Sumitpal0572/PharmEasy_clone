const express = require("express")
const User = require("../Schema/user")
const router = express.Router();

//sign up user

router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = new User({ username, email, password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: "Server error" })

    }
})

module.exports = router