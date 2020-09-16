import {Router} from 'express';
import noticiaController from '../controllers/noticia.controllers';

const router = Router();

const {getPrueba} = noticiaController

//creamos las rutas
router.route('/').get(getPrueba);

export default router;