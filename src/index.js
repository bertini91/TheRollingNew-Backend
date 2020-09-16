import express from "express";
import morgan from 'morgan'
import cors from 'cors';
import path from 'path';
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

app.get("/", (req, res) => {
  res.send("The Rolling News! ;D");
});

app.get("/noticias", (req, res) => {
  res.send("Estoy en la pagina de noticias");
});
