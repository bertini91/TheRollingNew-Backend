import usuarioAdmin from "../models/usuarioAdmin"

const usuarioAdminCtrl = {};

usuarioAdminCtrl.getPrueba = (req, res) => {
  res.send("prueba desde el controlador");
};