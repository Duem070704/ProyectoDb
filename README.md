# InventarySystem
Siempre que queramos ingresar informacion a un sistema necesitamos un medio para que eso susceda y un API es ese medio.
 En este caso esta API proporciona un sistema para gestionar un inventario, permitiendo la administración de categorías, productos, proveedores, transacciones y usuarios.
## Colecciones 
- **Categorías**: Estructura de los productos para un mejor control. 
- **Productos**: Información detallada de cada producto, incluyendo nombre,
descripción, categoría, precio, cantidad en stock, proveedor, imagen, especificaciones, etc.  
- **Proveedores**: Datos de los proveedores, como nombre, contacto, dirección,etc.
- **Transacciones**: Historial de las entradas y salidas de productos, incluyendo fecha, tipo de movimiento (entrada, salida),
 cantidad, producto, usuario que lo realizó, etc.
- **Usuarios**: Información sobre los usuarios del sistema, como nombre, rol,
permisos, etc.

## Tecnologias Utilizadas (paquetes) 
- **Express.js**: Framework para construir el servidor y manejar rutas.  
- **MongoDB**: Base de datos NoSQL para almacenar la información.  
- **dotenv**: Manejo de variables de entorno para guardar datos confidenciales.  
- **CORS**: Permite la comunicación entre frontend y backend, evitando conflictos entre dominios.
- **Morgan**: Middleware para registrar solicitudes HTTP en la consola, útil para depuración. 
- **Nodemon**: Herramienta que reinicia automáticamente el servidor cuando se detectan cambios en el código.  


## Pruebas en Thunder Client
## Implementacion del CRUD
![Create](/createProduct.png)
![Vizualizacion en MongoDB Compass ](/createProductCompass.png)
![Get de Product](/getProducts.png)
![Get ID product](/GetIDProducts.png)
![Update Product](/updateProducts.png)
![Vizualizacion en MongoDB Compass](/updateProductsCompass.png)
![Delete Product](/deleteProduct.png)
![Vizualizacion en MongoDB Compass](/deleteProductCompass.png)


## Manual de Instalación

Sigue estos pasos para instalar y ejecutar la API de Inventario en tu máquina local.

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión recomendada: 16+)
- **MongoDB** (local o en la nube)
- **Git** (para clonar el repositorio)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   - Crea un archivo `.env` en la raíz del proyecto y agrega:
     ```env
     MONGO_URI=mongodb://localhost:27017/InventarySystem
     PORT=3005
     ```

4. **Ejecutar el servidor**
   ```bash
   npm start
   ```
   O si usas nodemon para desarrollo:
   ```bash
   npm run dev

# Autor 
*_Duilio Ortega_
*_Universidad Linda Vista_
*_Base de DatosII_
