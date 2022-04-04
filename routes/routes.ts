import express from "express";
import { start, insert } from "../controllers/controllers"
const router = express.Router();

router.get("/start", start)
router.post("/insert", insert)

export { router }