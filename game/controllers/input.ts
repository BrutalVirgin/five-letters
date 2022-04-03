import { MongoDatabase } from "../../database/mongoapi"
import { Verifications } from "./verifications"
import { Attempts } from "../attempts"
import { errorMonitor } from "events"

const db = new MongoDatabase()
const verification = new Verifications()
const attempts = new Attempts()

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export class Input {
    constructor() { }

    private _curWord: string = ""
    private _splitWord: string[] = []
    private _finWord: string = ""
    private _isGameActive = true

    async getSplitWord() {
        this._curWord = await db.getRandomWord() as string
        this._splitWord = this._curWord!.split("")

        return this._curWord
    }

    insert(word: string) {
        if (verification.wordValidator(word) === true) {
            attempts.addAttemptToCounter()
            const letters = word.toLowerCase().split("")
            let final: string[] = letters

            if (this._isGameActive === true && attempts.getCount() < 7) {
                if (verification.checkIfWin(word, this._curWord) === true) {
                    this._isGameActive = false
                    verification.firstVerification(letters, this._splitWord, final)
                    this._finWord += `\n${final.concat().join("").toString()}` + `\n` + `You win!`
                    return this._finWord
                } else {
                    verification.firstVerification(letters, this._splitWord, final)
                    verification.secondVerification(letters, this._splitWord, final)
                    attempts.getCount() === 6 ? this._finWord += `\n${final.concat().join("").toString()}` + `\n` + `You lose!` : this._finWord += `\n${final.concat().join("").toString()}`
                }
            }
            if (this._isGameActive === false) {
                throw new Error("The game is ended")
            }
            if (attempts.getCount() >= 7) {
                throw new Error("No more moves")
            }
        }

        return this._finWord
    }
}

