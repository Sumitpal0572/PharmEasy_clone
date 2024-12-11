const express = require("express");
const Product = require("../Schema/Product")

const router = express.Router()

// GET ALL ROUTES
router.get("/", async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
})

//add a new product

router.post("/", async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        const saveProduct = await newProduct.save();
        res.json(saveProduct)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
})

module.exports = router