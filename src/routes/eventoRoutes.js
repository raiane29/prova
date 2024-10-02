import { Router } from "express";

import {
    postEvento,
    getEvento
} from "../controllers/eventoControllers.js"

const router = Router()

router.get("/eventos/agenda/", getEvento )
router.post("/eventos/criar", postEvento)

export default router