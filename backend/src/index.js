import express from "express"
import { port } from "./config/dotenv.config.js"
import messageRouter from "./routes/message.route.js"


const app = express()
app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})
app.use(express.json())
app.get("/health", (req, res) => {
    res.status(200).send("OK");
});
app.use("/message", messageRouter)
app.use((req, res, next) => {
    throw new Error("Not found")
})


app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ status: false, message: err.message || "Internal server error" })

})








app.listen(port, (error) => {
    if (error) {
        console.log("Failed to start server", error)
        process.exit(1)
    }
    console.log("Server is running on port", port)

})