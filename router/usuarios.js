const { Router } = require('express');
const { check } = require("express-validator");


const router = Router();

const {
    usuariosInicio,
    registroUsuarios,
    borrarUsuario,
} = require('../controllers/users');

//middleware
const { validateID, validarCampos } = require("../middlewares/validators");

router.get('/',[], usuariosInicio);

router.post(
    '/',
    [
        check("nombre", "Ingrese su nombre").notEmpty(),
        check("email", "Ingrese email válido").notEmpty(),
        check('telefono').isMobilePhone().withMessage('El número de teléfono no es válido'),
        check('mensaje').notEmpty().withMessage('El mensaje es obligatorio'),
        validarCampos,
    ],
    registroUsuarios
);

// router.put(
//     "/:id",
//     [
//         check("id").isMongoId(), check("id").custom(validateID), 
//         validarCampos
//     ],
//     actualizarID
// );

router.delete(
    "/:nombre",
    [
        check("nombre").notEmpty(), 
        check("email").isMongoId(), check("email").custom(validateID),
        validarCampos
    ],
    borrarUsuario
);

module.exports = router;