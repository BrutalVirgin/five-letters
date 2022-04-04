import { Input } from "../game/input"
const input = new Input()

const start = async (req: any, res: { end: (arg0: any) => void }) => {
    try {
        const word = await input.getSplitWord()
        res.end(word)
    } catch (e) {
        res.end(e)
    }
}

const insert = (req: { body: { word: any } }, res: { end: (arg0: string) => void }) => {
    try {
        const inWord = req.body.word

        const output = input.insert(inWord)
        res.end(output)
    } catch (e: any) {
        res.end(e.message)
    }
}
export { start, insert }