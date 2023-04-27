const  mongoose  = require("mongoose")
mongoose.Promise = global.Promise;


const dbConnect = () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connection Succeeded");
    } catch (error) {
        console.log('Error in DB connection: ' + error.message);
    }

}

module.exports = dbConnect





// // Connect MongoDB at default port 27017.
// mongoose.connect('mongodb://localhost:27017/DB Name', {

// }, (err) => {
//     if (!err) {
//         console.log('MongoDB Connection Succeeded.')
//     } else {
//         console.log('Error in DB connection: ' + err)
//     }
// });
