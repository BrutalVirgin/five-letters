import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import bodyParser from 'body-parser'
import { router } from "../routes/routes"
import { MongoDatabase } from "../database/mongoapi"
import passport from "passport"

dotenv.config()
//345124qe
const app = express()
app.use(bodyParser.json())

const db = new MongoDatabase()

async function start() {
    try {
        await mongoose.connect(process.env.DBURL as string)
        console.log("database connected")
        app.listen(process.env.PORT, () => console.log(`runnin`))
    } catch (e) {
        console.log(e)
    }

    app.use(passport.initialize())
    require('../middleware/passport')

    app.use(router)
}

start()
