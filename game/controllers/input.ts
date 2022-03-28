import { MongoDatabase } from "../../database/mongoapi"
import { Verifications } from "./verifications"
import { Attempts } from "../attempts"

const db = new MongoDatabase()
const verification = new Verifications()
const attempts = new Attempts()

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export class Input {
    constructor() { }

    private _curWord: string = ""
    private _splitWord: string[] = ["t", "r", "i", "l", "l"]
    private _finWord: string = ""

    async getSplitWord() {
        this._curWord = await db.getRandomWord() as string
        this._splitWord = this._curWord!.split("")

        return this._curWord
    }

    insert(word: string) {
        const letters = word.split("")
        let final: string[] = letters
        // for (var i = 0; i < 5; i++) {
        //     for (var j = 0; j < 5; j++) {
        //         if (letters[i] === this._splitWord[j]) {
        //             if (i === j) final[i] = String("!" + letters[i].toUpperCase() + "!")
        //             else final[i] = String("." + letters[i].toUpperCase() + ".")
        //         }
        //     }
        // } 
        if (attempts.attemptsCounter() === true) {
            verification.firstVerification(letters, this._splitWord, final)
            verification.secondVerification(letters, this._splitWord, final)
            this._finWord += `\n${final.concat().toString()}`
        }

        return this._finWord
    }

}

