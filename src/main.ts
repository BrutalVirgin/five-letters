import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import bodyParser from 'body-parser'
import { router } from "../routes/routes"
dotenv.config()

const app = express()
app.use(bodyParser.json())

async function start() {
    try {
        await mongoose.connect(process.env.DBURL as string)
        app.listen(process.env.PORT, () => console.log(`runnin`))
    } catch (e) {
        console.log(e)
    }

    app.use(router)
}

start()