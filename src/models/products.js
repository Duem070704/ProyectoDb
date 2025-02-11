const collectionName = "products";

function ModeloProducto(){
    return{
        name: "",
        category: "",
        stock: 0,
        proveedor:"",
        precio: 0.0,
        fecha:new Date()
    }
}

module.exports = {
    collectionName,
    ModeloProducto
}