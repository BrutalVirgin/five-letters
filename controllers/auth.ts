import { RequestHandler } from "express"
import { userShema } from "../database/models/users"
import jwt from "jsonwebtoken"

const register: RequestHandler = async (req, res) => {
    try {
        const candidate = await userShema.findOne({ name: req.body.name })

        if (candidate) {
            res.status(409).json({ message: "User already created" })
        } else {
            const user = new userShema({
                name: req.body.name,
                password: req.body.password
            })
            await user.save()
            res.status(201).json(user)
        }
    } catch (e) {
        res.end(e)
    }
}

const login: RequestHandler = async (req, res) => {
    try {
        const candidate = await userShema.findOne({ name: req.body.name })
        if (candidate) {
            if (candidate.password === req.body.password) {
                const token = jwt.sign({
                    name: candidate.name,
                    id: candidate._id,
                }, "jwt", { expiresIn: 3600 })

                res.status(200).json({ token: `Bearer ${token}` })
            } else {
                res.status(401).json({ message: "Incorrect password" })
            }
        } else {
            res.status(404).json({ message: "User not found" })
        }
    } catch (e) {
        res.end(e)
    }
}

export { register, login }