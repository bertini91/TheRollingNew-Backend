import {Router} from 'express';
import categoriaController from '../controllers/categoria.controllers';

const router = Router();

const {getPrueba, crearCategoria, listarCategorias, eliminarCategoria, actualizarCategoria} = categoriaController

//creamos las rutas
/* router.route('/').get(listarCategorias).post(crearCategoria); */
router.route('/Categorias').get(listarCategorias);
router.route('/').post(crearCategoria);
router.route('/:id').delete(eliminarCategoria).put(actualizarCategoria)

export default router;