import { Router } from "express";

import {
    postPalestrante,
    getPalestrante
} from "../controllers/palestranteControllers.js"

const router = Router()

router.get("/palestrantes", getPalestrante )
router.post("/palestrantes", postPalestrante)

export default router