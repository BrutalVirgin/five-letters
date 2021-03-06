import { Schema, model } from 'mongoose'

const user = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const userShema = model('users', user)
export { userShema }