import {Router} from 'express';
import noticiaController from '../controllers/noticia.controllers';

const router = Router();

const {getPrueba, crearNoticia, listarNoticia, eliminarNotica, actualizarNoticia} = noticiaController

//ANALIZAR BIEN LAS RUTAS
/* router.route('/Noticia').get(listarNoticia).post(crearNoticia); */
router.route('/').get(listarNoticia)
/* router.route('/Administracion/Editor/').post(crearNoticia); */
router.route('/Administracion/Noticia').get(listarNoticia).post(crearNoticia);
router.route('/Administracion/Noticia/:id').delete(eliminarNotica).put(actualizarNoticia);
/* router.route('/Administracion/Noticia/:id').delete(eliminarNotica); */

export default router;