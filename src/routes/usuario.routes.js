import {Router} from 'express';
import usuarioController from '../controllers/usuario.controllers'

const router = Router();

const {getPrueba} = usuarioController

//creamos las rutas
router.route('/usuario').get(getPrueba);

export default router;