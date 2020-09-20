import {Router} from 'express';
import usuarioController from '../controllers/usuario.controllers'

const router = Router();

const {getPrueba, crearUsuario, listarUsuarios, eliminarUsuario, actualizarUsuario} = usuarioController;

//creamos las rutas
router.route('/').get(listarUsuarios).post(crearUsuario);
router.route('/:id').delete(eliminarUsuario).put(actualizarUsuario);

export default router;