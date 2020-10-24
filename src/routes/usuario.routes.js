import {Router} from 'express';
import usuarioController from '../controllers/usuario.controllers'

const router = Router();

const {crearUsuario, listarUsuarios, eliminarUsuario, actualizarUsuario} = usuarioController;

router.route('/Login').get(listarUsuarios);
router.route('/').get(listarUsuarios).post(crearUsuario);
router.route('/:id').delete(eliminarUsuario).put(actualizarUsuario);

export default router;