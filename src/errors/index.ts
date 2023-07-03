export function validIce(){
    return {
        message: "Enter valid values!",
        name: "Unprocessable Entity"
    }
}
export function sameIce(){
    return {
        message: "Ice Cream already exists!",
        name: "Conflict"
    }
}
export function notFound(){
    return {
        message: "Ice Cream not exists!",
        name: "Not Found"
    }
}