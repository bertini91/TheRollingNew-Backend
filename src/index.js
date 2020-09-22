import express from "express";
import morgan from 'morgan'
import cors from 'cors';
import path from 'path';
import usuarioRoutes from "./routes/usuario.routes";
import noticiaRoutes from "./routes/noticia.routes";
import suscripcionRoutes from './routes/suscipcion.routes';
import categoriaRoutes from './routes/categoria.routes';

import './database'

const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log(path.join(__dirname, "../public"))
  console.log("Estoy escuchando puertoooo = " + app.get("port"));
});

app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "../public")))

app.use('/api/theRollingNew', noticiaRoutes, categoriaRoutes);
app.use('/api/theRollingNew/Sesion/', usuarioRoutes)
app.use('/api/theRollingNew/Administracion/Usuario', usuarioRoutes)
app.use('/api/theRollingNew/Suscripcion', suscripcionRoutes);
app.use('/api/theRollingNew/Administracion/Categoria', categoriaRoutes)
