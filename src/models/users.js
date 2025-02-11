const collectionName = "usuarios";

function ModeloUsuarios(){
    return{
        nombre:"",
        rol:"",
        fecha_registro: new Date()
    }
}

module.exports={
    collectionName,
    ModeloUsuarios
}
