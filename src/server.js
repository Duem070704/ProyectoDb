require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./connection/connection');
const categoryRoutes = require('./routes/categorysRoutes');
const productRoutes = require('./routes/productsRoutes');
const suppliersRoutes = require('./routes/suppliersRoutes');
const transactionRoutes = require('./routes/transactionsRoutes');
const userRoutes = require('./routes/usersRoutes');


const app = express();

app.use(cors());
app.use(express.json());


//Inicializamos el servidor
const PORT = process.env.PORT || 3005;
app.listen(PORT, async ()=>{
    await connectDB();
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
});

// rutas de los controladores
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', suppliersRoutes);
app.use('/api', transactionRoutes);
app.use('/api', userRoutes);