const mongoose = require ('mongoose');

const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Base de datos en línea");


    } catch (error){
        console.log(error);
        throw new Error('Error al conectar a la DB');
    }
}

module.exports = dbConnection;