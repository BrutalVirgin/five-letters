import express from "express";
import { start, insert } from "../controllers/controllers"
import { register, login } from "../controllers/auth"
import passport from "passport";
const router = express.Router();

router.get("/start", start)
router.post("/insert", insert)
router.post("/register", passport.authenticate('jwt', { session: false }), register)
router.post("/login", login)

export { router }