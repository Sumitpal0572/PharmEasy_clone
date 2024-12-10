const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        await mongoose.Mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo Db Connected Successfully");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDb;