import { notFound, sameIce, validIce } from "../errors"
import { Ice } from "../protocols"
import iceCreamRepository from "../repositories/iceCream.repository"

async function getIceCream() {
    return iceCreamRepository.getIceCream()
}
async function getIceCreamById(id:number) {
    const result = await iceCreamRepository.getIceCreamById(id)
    if(result.rowCount===0) throw notFound()
    return result
}
async function postIceCream(flavor:string, size:number, quantity:number) {
    if(flavor.length<=2||size<100||size>400||quantity<0) throw validIce()
    const result = await iceCreamRepository.getIceCreamByName(flavor)
    if(result.rowCount>0) throw sameIce()
    return iceCreamRepository.postIceCream(flavor, size, quantity)
}
async function updateIceCream(flavor:string, size:number, quantity:number, id:number) {
    if(flavor.length<=2||size<100||size>400||quantity<0) throw validIce()
    const result = await iceCreamRepository.getIceCreamById(id)
    if(result.rowCount===0) throw notFound()
    const iceExists = await iceCreamRepository.getIceCreamByName(flavor)
    if(iceExists.rowCount>0) throw sameIce()
    return iceCreamRepository.updateIceCream(flavor, size, quantity, id)
}
async function deleteIceCream(id:number) {
    const result = await iceCreamRepository.getIceCreamById(id)
    if(result.rowCount===0) throw notFound()
    return iceCreamRepository.deleteIceCream(id)
}
const iceCreamService ={
    getIceCream,
    getIceCreamById,
    postIceCream,
    updateIceCream,
    deleteIceCream
}

export default iceCreamService