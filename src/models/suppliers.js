const collectionName = "proveedores";

function ModeloProveedores(){
    return{
        nombre:"",
        direccion:"",
        correo:"",
        telefono:""
    }
}
module.exports={
    collectionName,
    ModeloProveedores  
}