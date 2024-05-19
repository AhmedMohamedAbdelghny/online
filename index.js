import express from 'express'
import postRouter from "./src/module/posts/post.routes.js"
import connection from './db/connectionDB.js'
import cors from "cors"
const app = express()
const port = process.env.port || 3000



app.use(cors())
app.use(express.json())


connection

app.get("/", (req, res) => {
    return res.status(200).json({ msg: "hello on my project" })
})

app.use("/posts", postRouter)


app.use("*", (req, res) => {
    return res.status(404).json({ msg: "404 not found" })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))