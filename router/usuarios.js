const { Router } = require('express');
const { check } = require("express-validator");


const router = Router();

const {
    usuariosInicio,
    registroUsuarios,
    borrarUsuario,
    obtenerUsuarios,
} = require('../controllers/users');

//middle
const { validarCampos } = require("../middlewares/validators");

router.get("/bienvenido", obtenerUsuarios);

router.post(
    '/usuarioInicio',
    [
        check("nombre", "Ingrese su nombre").notEmpty(),
        check("email", "Ingrese email válido").notEmpty(),
        check('telefono').isMobilePhone().withMessage('El número de teléfono no es válido'),
        /* check('mensaje').notEmpty().withMessage('El mensaje es obligatorio'), */
        () => validarCampos
    ],
    usuariosInicio
);

// router.put(
//     "/:id",
//     [
//         check("id").isMongoId(), check("id").custom(validateID), 
//         validarCampos
//     ],
//     actualizarID
// );

// router.delete(
    // "/:nombre",
    // [
        // check("nombre").notEmpty(), 
        // // check("email").isMongoId(), check("email").custom(validateID),
        // validarCampos
    // ],
    // borrarUsuario
// );

module.exports = router;