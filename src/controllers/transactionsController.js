const {ObjectId} = require('mongodb');
const {client} = require('../connection/connection');
const {collectionName} = require('../models/transactions');


//Agregar una transaccion
async function createTransactions(req, res) {
    try {
      const db = client.db();
      const result = await db.collection(collectionName).insertOne(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
  
  //Obtener todas las transacciones 
  async function getTransactions(req, res) {
    try {
      const db = client.db();
      const transaction  = await db.collection(collectionName).find().toArray();
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }
  
  //Obtener una sola transaccion
  async function getTransactionsId(req, res) {
    try {
    const db = client.db();
    const transaction = await db.collection(collectionName).findOne({ _id: new ObjectId(req.params.id)});
    if(!transaction) return res.status(404).json({message: "Producto no encontrado"});
    res.status(200).json(transaction); 
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }
  
  //Actualizar una transaccion
  async function updateTransactions(req, res) {
    try {
      const db = client.db();
      const result = await db.collection(collectionName).updateOne(
        {_id: new ObjectId(req.params.id)},
        {$set: req.body}
      );
      if (result.matchedCount === 0 ) return res.status(404).json({message: "Producto no encontrado"});
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }
  
  //Eliminar una transaccion
  async function deleteTransactions(req, res) {
    try {
      const db = client.db();
      const result = await db.collection(collectionName).deleteOne({_id: new ObjectId(req.params.id)});
      if (result.deletedCount === 0) return res.status(404).json({message: "Falló al eliminr el producto"});
      res.status(200).json({message: "Producto eliminado "});
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }
  
  module.exports = {
      createTransactions,
      getTransactions,
      getTransactionsId,
      updateTransactions,
      deleteTransactions
  }