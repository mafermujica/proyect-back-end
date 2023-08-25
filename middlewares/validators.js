const { validationResult } = require('express-validator');
const Users = require('../models/usuarios');

const validarCampos = (req, res, next) => {
const errors = validationResult(req);

  // if (!nombre|| !telefono || !email || !mensaje) {
	// 	const error = document.createElement('div');
	// 	error.innerText = 'Por favor completa los datos';
	// 	formulario.appendChild(error);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
	
  next();
};




module.exports = validarCampos;