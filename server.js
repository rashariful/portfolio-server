const dotenv = require("dotenv").config()
const colors = require("colors")

const app = require("./app")
const dbConnect = require("./utils/dbConnect")

// Database connection
dbConnect()

const port = process.env.PORT || 8080
// Server

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`.bgCyan.bold)
})