import Joi from "joi";
import { Ice } from "../protocols";

const schema = Joi.object<Ice>({
    flavor: Joi.string().required(),
    size: Joi.number().min(100).max(400).required(),
    quantity: Joi.number().min(0).required()
})

export default schema