import {Router} from 'express';
import categoriaController from '../controllers/categoria.controllers';

const router = Router();

const {crearCategoria, listarCategorias, eliminarCategoria, actualizarCategoria} = categoriaController

router.route('/Categorias').get(listarCategorias);
router.route('/').post(crearCategoria);
router.route('/:id').delete(eliminarCategoria).put(actualizarCategoria)

export default router;