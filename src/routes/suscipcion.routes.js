import {Router} from 'express';
import suscripcionController from '../controllers/suscripcion.controllers';

const router = Router();

const {crearSuscripcion, listarSuscripciones} = suscripcionController

router.route('/').get(listarSuscripciones).post(crearSuscripcion);

export default router;