import { Input } from "../game/controllers/input"
const input = new Input()

class Controller {
    start = async (req: any, res: { end: (arg0: any) => void }) => {
        try {
            const word = await input.getSplitWord()
            res.end(word)
        } catch (e) {
            res.end(e)
        }
    }

    insert = (req: { body: { word: any } }, res: { end: (arg0: string) => void }) => {
        try {
            const inWord = req.body.word

            const output = input.insert(inWord)
            res.end(output)
        } catch (e: any) {
            res.end(e.message)
        }
    }
}

export { Controller }