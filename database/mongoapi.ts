import { wordShema } from "../database/models/words"
import { userShema } from "../database/models/users"

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

    async getUserByName(nickname: string) {
        try {
            const user = await userShema.findOne({ nickName: nickname }).exec()
            return user
        } catch (e) {
            console.log(e)
        }
    }
}

export { MongoDatabase }