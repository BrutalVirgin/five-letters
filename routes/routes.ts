import express from "express";
import { start, insert } from "../controllers/controllers"
import { register, login } from "../controllers/auth"
const router = express.Router();

router.get("/start", start)
router.post("/insert", insert)
router.post("/register", register)
router.post("/login", login)

export { router }