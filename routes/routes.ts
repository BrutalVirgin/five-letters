import express from "express";
import { Controller } from "../controllers/controllers";
const router = express.Router();
const controller = new Controller()

class Router {
    start = router.get("/start", controller.start)
    insert = router.post("/insert", controller.insert)
}

export {router} 