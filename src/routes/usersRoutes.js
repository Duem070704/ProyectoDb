const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

//Crear un produccto
router.post('/createUser', userController.createUsers);

//Obtener todos los productos
router.get('/getAllUser', userController.getUsers);

//Obtener un producto por su id
router.get('/getUser/:id', userController.getUsersId);

//Editar un producto
router.post('/editUser/:id', userController.updateUsers);

//Eliminar un producto
router.delete('/deleteUser/:id', userController.deleteUsers);

module.exports = router;