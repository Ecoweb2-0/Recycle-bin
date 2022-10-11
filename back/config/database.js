const mongose=require("mongoose");

const connectDatabase=()=>  {
    mongose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlPaser: true,
        useUnifiedTopology: true
        }) .then(con => {console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    })
}