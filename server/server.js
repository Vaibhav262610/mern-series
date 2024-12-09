require("dotenv").config()
const express = require('express')
const app = express();
const authRouter = require("./router/auth-router")
const cors = require('cors')
const contactRouter = require("./router/contact-router")
const connectDb = require("./utils/db")

const corsOption = {
    origin: "http://localhost:5173/",
    methods: "POST,GET,DELETE,PUT,HEAD,PATCH",
    credential: true,
}

app.use(express.json())
app.use(cors())

app.use("/api/auth", authRouter)
app.use("/api/form", contactRouter)

const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log("SERVER IS RUNNING");
    })
})