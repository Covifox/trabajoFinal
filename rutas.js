const { Router } = require('express');
const router = Router();

const { crearUsuario, getUsuarios, getUsuariosId, actualizarUsuario, eliminarUsuario, promedioEdadUsuarios, mostrarEstado } = require('./controladores.js');

router.post('/usuarios', crearUsuario);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id_usuario', getUsuariosId);
router.put('/usuarios/:id_usuario', actualizarUsuario)
router.delete('/usuarios/:id_usuario', eliminarUsuario);
router.get('/usuarios/promedioedad', promedioEdadUsuarios);
router.get('/estado', mostrarEstado);

module.exports = router;