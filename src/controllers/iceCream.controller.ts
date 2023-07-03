import { Request, Response } from "express";
import { Ice } from "../protocols";
import iceCreamService from "../services/iceCream.services";
import { QueryResult } from "pg";
import httpStatus from "http-status";
import { validIce } from "../errors";

export async function getIceCream(req:Request, res: Response){
    const result = await iceCreamService.getIceCream()
    res.status(httpStatus.OK).send(result.rows)
}
export async function getIceCreamById(req:Request, res: Response){
    const id = Number(req.params.id)
    const result = await iceCreamService.getIceCreamById(id)
    res.status(httpStatus.OK).send(result.rows)
}
export async function postIceCream(req:Request, res: Response){
    const {flavor, size, quantity} = req.body as Ice
    await iceCreamService.postIceCream(flavor, size, quantity)
    res.sendStatus(httpStatus.CREATED)
}
export async function updateIceCream(req:Request, res: Response){
    const {flavor, size, quantity} = req.body as Ice
    const id = Number(req.params.id)
    if(isNaN(id)) throw validIce()
    await iceCreamService.updateIceCream(flavor, size, quantity, id)
    res.sendStatus(httpStatus.OK)
}
export async function deleteIceCream(req:Request, res: Response){
    const id = Number(req.params.id)
    await iceCreamService.deleteIceCream(id)
    res.sendStatus(httpStatus.OK)
}