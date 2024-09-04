
import mongoose from 'mongoose';

const DBConnection = async() => {
    const MONGO_URI = "mongodb+srv://user:codeforinterview@job-portal.hsv7n.mongodb.net/";
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true});
        console.log("Database connected successfully");
    }catch(error){
       console.log('error while conecting with database', error.message);
    }
}

export default DBConnection;