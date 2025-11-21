import express from "express"
import mongoose from "mongoose"
import { shortUrl, getOriginalUrl } from "./Controllers/url.js"
import dotenv from "dotenv"

const app = express()
dotenv.config()

app.use(express.urlencoded({ extended: true }))

mongoose
    .connect(process.env.MONGODB,
        {
            dbName: "Nodejs_Course",
        }
    )
    .then(() => console.log("MongoDb Connected..!"))
    .catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.render("index.ejs", { shortUrl: null })
})

app.post('/short', shortUrl)
app.get('/:shortCode', getOriginalUrl)


const PORT = process.env.PORT || 3000

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${3000}`)
})