import {Router} from 'express';
import categoriaController from '../controllers/categoria.controllers';

const router = Router();

const {getPrueba} = categoriaController

//creamos las rutas
router.route('/').get(getPrueba);

export default router;