import { db } from "../database/database.connection";

function getIceCream(){
    return db.query("SELECT * FROM iceCreams")
}
function getIceCreamByName(flavor:string){
    return db.query("SELECT * FROM iceCreams WHERE flavor = $1",[flavor])
}
function getIceCreamById(id:number){
    return db.query("SELECT * FROM iceCreams WHERE id = $1",[id])
}
function postIceCream(flavor:string, size:number, quantity:number){
    return db.query("INSERT INTO iceCreams(flavor, size, quantity) VALUES($1, $2, $3)", [flavor, size, quantity])
}
function updateIceCream(flavor:string, size:number, quantity:number, id:number){
    return db.query("UPDATE iceCreams SET flavor = $1, size = $2, quantity = $3 WHERE id = $4", [flavor, size, quantity, id])
}
function deleteIceCream(id:number){
    return db.query("DELETE FROM iceCreams WHERE id = $1", [id])
}
const iceCreamRepository = {
    getIceCream,
    postIceCream,
    getIceCreamByName,
    getIceCreamById,
    updateIceCream,
    deleteIceCream
}

export default iceCreamRepository