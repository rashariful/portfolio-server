const express = require("express");
const app = express();
const cors = require("cors");
const Project = require("./routes/projectRoute")
const authRouter = require("./routes/authRoute")

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Portfolio is running");
});

app.use("/api/v1/project", Project)
app.use("/api/v1/user", authRouter)

module.exports = app; 
