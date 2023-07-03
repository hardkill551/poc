import { Router } from "express";
import iceCreamRouter from "./iceCream.router";

const router = Router()
router.use(iceCreamRouter)
export default router