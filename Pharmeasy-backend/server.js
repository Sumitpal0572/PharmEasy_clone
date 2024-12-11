const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()


const app = express();

//Middleware
app.use(cors());
app.use(express.json());

// Routes

const productRoutes = require("./routes/products")
const userRoutes = require("./routes/auth")

app.use("/api/products", productRoutes)
app.use("/api/user", userRoutes)

// mongoDB connection

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo Db Connected"))
    .catch((error) => console.log(error))

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
})