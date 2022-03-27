import { wordShema } from "../database/models/words"

class MongoDatabase {

    async getWordById(id: number) {
        try {
            const word = await wordShema.findOne({ id: id })
            return word.word
        } catch (e) {
            console.log(e)
        }
    }

    async getRandomWord() {
        try {
            const randomId = Math.floor(Math.random() * 5757)
            const findWord = await wordShema.findOne({ id: randomId }).exec()
            var word = String(findWord.word)
            return word
        } catch (e) {
            console.log(e)
        }
    }

}

export { MongoDatabase }