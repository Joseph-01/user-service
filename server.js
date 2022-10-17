const express = require("express")
require("dotenv").config()
const dbconnection = require("./config/config")

const app = express()
const port = process.env.PORT || 5000
const authRoute = require("./routes/authRoute")

app.use(express.urlencoded({extended: true}))
app.use("/", authRoute)
app.get("/test", (req, res) => {
    res.json({ msg: "About to make heroku work" })
})

dbconnection.startConnection(app.listen(port))
