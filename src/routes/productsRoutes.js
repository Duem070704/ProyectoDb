const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

//Crear un produccto
router.post('/createProduct', productController.createProducts);

//Obtener todos los productos
router.get('/getProduct', productController.getProducts);

//Obtener un producto por su id
router.get('/getProduct/:id', productController.getProductsId);

//Editar un producto
router.post('/editProduct/:id', productController.updateProducts);

//Eliminar un producto
router.delete('/deleteProduct/:id', productController.deletePrducts);

module.exports = router;