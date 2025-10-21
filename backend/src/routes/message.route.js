import express from "express"
import { getMessages, insertMessages } from "../controller/messages.js"

const router = express.Router()

router.get("/get-messages", getMessages)
router.post("/insert-message", insertMessages)


export default router