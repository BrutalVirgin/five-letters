import { Schema, model } from 'mongoose'

const word = new Schema({
    id: {
        type: Number,
        required: true
    },
    word: {
        type: String,
        required: true
    }
})
const wordShema = model('words', word)
export { wordShema }