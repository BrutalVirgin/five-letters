import express from "express"
import { MongoClient } from 'mongodb'
import mongoose from "mongoose"
import { wordShema } from "../database/models/words"
import { MongoDatabase } from "../database/mongoapi"
import { Input } from "../game/controllers/input"
import bodyParser from 'body-parser'

const client = new MongoClient('mongodb+srv://Brutal:345124qe@test.rkta3.mongodb.net/five-letters?retryWrites=true&w=majority')
const db = new MongoDatabase()
const input = new Input()

const app = express()
app.use(bodyParser.json())

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Brutal:345124qe@cluster0.dbmdq.mongodb.net/five-letters')
        app.listen(3000, () => console.log("runnin"))
    } catch (e) {
        console.log(e)
    }

    app.get("/start", async (req, res) => {
        const word = "trill"
        // await input.getSplitWord()


        res.end(word)
    })

    app.post("/insert", (req, res) => {
        const inWord = req.body.word

        const output = input.insert(inWord)
        res.end(output)
    })

    // app.post("/add", async (req, res) => {
    //     fs.readFile('words.txt', 'utf8', (err, data) => {
    //         if (err) {
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