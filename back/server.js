const app=require("./app")
const connectDatabase = require("./config/database");

//Setear el archivo de configuración
const dotenv=require("dotenv");
dotenv.config({ path: 'back/config/config.env' });

//Configurar base de datos
connectDatabase();

const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})
//linea 4 del config.env--- DB_LOCAL_URI = mongodb://127.0.0.1:27017/recycle