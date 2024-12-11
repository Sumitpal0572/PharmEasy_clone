const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        await mongoose.Mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Mongo Db Connected Successfully");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDb;