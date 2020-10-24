import {Router} from 'express';
import noticiaController from '../controllers/noticia.controllers';

const router = Router();

const {crearNoticia, listarNoticia, eliminarNotica, actualizarNoticia} = noticiaController

router.route('/').get(listarNoticia)
router.route('/Administracion/Noticia').get(listarNoticia).post(crearNoticia);
router.route('/Administracion/Noticia/:id').delete(eliminarNotica).put(actualizarNoticia);

export default router;