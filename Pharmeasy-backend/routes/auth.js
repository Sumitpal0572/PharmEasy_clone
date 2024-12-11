const express = require("express")
const User = require("../Schema/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const router = express.Router();

//sign up user

router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hasedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ username, email, password: hasedPassword });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: "Error registering user" })

    }
})

// login user

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) return res.status(404).json({ message: "user not found " });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(404).json({ message: "Invalid Credentials" })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expireIn: "1d"
        });
        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: "Error logging In" })
    }
})

module.exports = router