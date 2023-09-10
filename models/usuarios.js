const { Schema, model } = require('mongoose');



const UsersSchema = new Schema({

    nombre: {
        type: String,
        require: [true, "Nombre del usuario es obligatorio"],
    },
    telefono: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        requiere: true,
    },
    mensaje:{
        type: String,
    }

});


const Users = model('Users', UsersSchema);

module.exports = Users;