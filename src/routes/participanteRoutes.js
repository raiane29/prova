import { Router } from "express";

import {
    postParticipante,
    getParticipante
} from "../controllers/participantesControllers.js"

const router = Router()

router.get("/eventos/participantes", getParticipante )
router.post("/eventos/participantes/registrar", postParticipante)

export default router