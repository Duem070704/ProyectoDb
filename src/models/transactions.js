const collectionName = "transacciones";

function ModeloTransacciones(){
    return{
       fecha_transaccion:new Date(),
       tipo_transaccion:"",
       precio:0,
       cantidad:0,
       metodo_pago: "",
       usuario:"",
    }
}

module.exports = {
    collectionName,
    ModeloTransacciones
}