import {Router} from 'express';
import suscripcionController from '../controllers/suscripcion.controllers';

const router = Router();

const {getPrueba, crearSuscripcion, listarSuscripciones} = suscripcionController

//creamos las rutas
router.route('/').get(listarSuscripciones).post(crearSuscripcion);

export default router;