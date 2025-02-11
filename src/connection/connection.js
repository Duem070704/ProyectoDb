require ("dotenv").config();
const {MongoClient} = require ("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
    try {
        await client.connect();
        console.log("Conectado a mongoDB ✅");
        
    } catch (error) {
        console.log("Error al conectar a mongoDB ❎", error);
    }
}

module.exports = {
    client,
    connectDB
}