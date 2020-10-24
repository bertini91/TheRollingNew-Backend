import Usuario from "../models/usuario";
const usuarioCtrl = {};

usuarioCtrl.getPrueba = (req, res) => {
  res.send("prueba desde el controlador");
};

usuarioCtrl.crearUsuario = async (req, res) => {
  console.log(req.body);
  try {
    const {
      nombre,
      apellido,
      direccion,
      localidad,
      codPostal,
      telefono,
      correo,
      perfil,
      usuario,
      contrasenia,
      estado,
    } = req.body;
    const usuarioNuevo = new Usuario({
      nombre,
      apellido,
      direccion,
      localidad,
      codPostal,
      telefono,
      correo,
      perfil,
      usuario,
      contrasenia,
      estado,
    });
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "Usuario almacenado con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      mensaje: "Ocurrio un error en la carga",
    });
  }
};

usuarioCtrl.listarUsuarios = async (req, res)=>{
  try {
    const arregloUsuarios = await Usuario.find();
    res.status(200).json(arregloUsuarios);
  } catch (error) {
    console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error en la consulta."
        })
  }
}

usuarioCtrl.eliminarUsuario = async(req, res)=>{
  try {
    console.log(req.params.id);
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El usuario fue eliminado con exito"
    })
  } catch (error) {
    console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error al eliminar Usuario"
        })
  }
}

usuarioCtrl.actualizarUsuario = async (req, res)=>{
  try {
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El usuario fue actualizado con exito"
    })
  } catch (error) {
    console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error en la actualizacion del Usuario"
        })
  }
}

export default usuarioCtrl;
