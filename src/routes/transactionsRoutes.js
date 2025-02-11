const express = require("express");
const router = express.Router();
const transactionController = require('../controllers/transactionsController');


//Crear una transaccion
router.post('/createTransaction', transactionController.createTransactions);

//Obtener todas las transacciones
router.get('/getTranscation', transactionController.getTransactions);

//Obtener una transaccion por su id
router.get('/getTransaction/:id', transactionController.getTransactionsId);

//Editar una transaccion
router.post('/editTransaction/:id', transactionController.updateTransactions);

//Eliminar una transaccion
router.delete('/deleteTransaction/:id', transactionController.deleteTransactions);

module.exports = router;