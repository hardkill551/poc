import { Router } from "express";
import { deleteIceCream, getIceCream, getIceCreamById, postIceCream, updateIceCream } from "../controllers/iceCream.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import schema from "../schemas/iceCream.schema";

const iceCreamRouter = Router()

iceCreamRouter.get("/ice", getIceCream)
iceCreamRouter.post("/ice", validateSchema(schema),postIceCream)
iceCreamRouter.get("/ice/:id", getIceCreamById)
iceCreamRouter.put("/ice/:id", validateSchema(schema), updateIceCream)
iceCreamRouter.delete("/ice/:id", deleteIceCream)

export default iceCreamRouter