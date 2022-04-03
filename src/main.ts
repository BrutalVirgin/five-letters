import dotenv from "dotenv"
import express from "express"
import { MongoClient } from 'mongodb'
import mongoose from "mongoose"
import { wordShema } from "../database/models/words"
import { MongoDatabase } from "../database/mongoapi"
// import { Input } from "../game/controllers/input"
import bodyParser from 'body-parser'
import { Controller } from "../controllers/controllers"
const router = require("../routes/routes")
dotenv.config()

// const client = new MongoClient('mongodb+srv://Brutal:345124qe@test.rkta3.mongodb.net/five-letters?retryWrites=true&w=majority')
const db = new MongoDatabase()
// const input = new Input()
const controller = new Controller()
// const router = new Router()

const app = express()
app.use(bodyParser.json())

async function start() {
    try {
        // "mongodb+srv://Brutal:345124qe@cluster0.dbmdq.mongodb.net/five-letters"
        await mongoose.connect(process.env.DBURL as string)
        app.listen(process.env.PORT, () => console.log(`runnin`))
    } catch (e) {
        console.log(e)
    }

    // app.get("/start", controller.start)

    // app.post("/insert", controller.insert)

    app.use("/", router)

    app.get("/test", async (req, res) => {
        var arr = [1, 2, 3]
        res.end(arr.join(''))
    })

    // app.post("/add", async (req, res) => {
    //     fs.readFile('words.txt', 'utf8', (err, data) => {
    //             console.error(err)
    //             return
    //         }
    //         const arr = data.toString().replace(/\r\n/g, '\n').split('\n')
    //         for (var i = 0; i <= arr.length; i++) {
    //             add(i, arr[i])

    //         }
    //         console.log("done")
    //     })
    //     res.end()
    // })
}

async function add(id: number, word: string) {
    const item = await new wordShema({ id: id, word: word })
    await item.save()
}

start()