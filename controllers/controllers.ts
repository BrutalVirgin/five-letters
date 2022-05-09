import { Input } from "../game/input"
import { RequestHandler } from 'express';
import { MongoDatabase } from "../database/mongoapi"

const db = new MongoDatabase()

const input = new Input()

const start: RequestHandler = async (req, res) => {
    try {
        await input.getSplitWord()
        res.end()
    } catch (e) {
        res.end(e)
    }
}

const insert: RequestHandler = (req, res) => {
    try {
        const inWord = req.body.word

        const output = input.insert(inWord)
        res.end(output)
    } catch (e: any) {
        res.end(e.message)
    }
}

export { start, insert }