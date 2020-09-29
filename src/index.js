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
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "../public")))

app.use('/api/theRollingNew', noticiaRoutes, categoriaRoutes);
app.use('/api/theRollingNew/Administracion/Usuario', usuarioRoutes)
app.use('/api/theRollingNew/Suscripcion', suscripcionRoutes);
app.use('/api/theRollingNew/Administracion/Categoria', categoriaRoutes)
