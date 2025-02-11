const express = require("express");
const router = express.Router();
const suppliersController = require('../controllers/suppliersController');

//Crear un produccto
router.post('/createSupplier', suppliersController.createSuppliers);

//Obtener todos los productos
router.get('/getAllSupplier', suppliersController.getSuppliers);

//Obtener un producto por su id
router.get('/getSupplier/:id', suppliersController.getSuppliersId);

//Editar un producto
router.post('/editSupplier/:id', suppliersController.updateSuppliers);

//Eliminar un producto
router.delete('/deleteSupplier/:id', suppliersController.deleteSuppliers);

module.exports = router;