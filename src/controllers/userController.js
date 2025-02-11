const {ObjectId} = require('mongodb');
const {client} = require('../connection/connection');
const {collectionName} = require('../models/users');


//Agregar un usuario
async function createUsers(req, res) {
    try {
      const db = client.db();
      const result = await db.collection(collectionName).insertOne(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
  
  //Obtener todos los usuarios 
  async function getUsers(req, res) {
    try {
      const db = client.db();
      const user  = await db.collection(collectionName).find().toArray();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }
  
  //Obtener un solo usuario
  async function getUsersId(req, res) {
    try {
    const db = client.db();
    const user = await db.collection(collectionName).findOne({ _id: new ObjectId(req.params.id)});
    if(!user) return res.status(404).json({message: "Usuario no encontrado"});
    res.status(200).json(user); 
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }
  
  //Actualizar un usuario
  async function updateUsers(req, res) {
    try {
      const db = client.db();
      const result = await db.collection(collectionName).updateOne(
        {_id: new ObjectId(req.params.id)},
        {$set: req.body}
      );
      if (result.matchedCount === 0 ) return res.status(404).json({message: "Usuario no encontrado"});
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }
  
  //Eliminar un usuario
  async function deleteUsers(req, res) {
    try {
      const db = client.db();
      const result = await db.collection(collectionName).deleteOne({_id: new ObjectId(req.params.id)});
      if (result.deletedCount === 0) return res.status(404).json({message: "Falló al eliminr el usuario"});
      res.status(200).json({message: "usuario eliminado "});
    } catch (error) {
      res.status(500).json({error : error.message});
    }
  }
  
  module.exports = {
      createUsers,
      getUsers,
      getUsersId,
      updateUsers,
      deleteUsers
  }