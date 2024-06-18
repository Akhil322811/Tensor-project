const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();

 const connectDatabase = async () => {
    try {      
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to mongodb database successfully!')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDatabase