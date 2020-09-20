import Suscripcion from '../models/suscripcion'
const suscripcionCtrl = {}

suscripcionCtrl.getPrueba = async (res, req) =>{
    res.send("Prueba enviada con exitos desde suscripcion")
}

suscripcionCtrl.crearSuscripcion = async (req, res)=>{
    console.log(req.body);
    try {
        const {nombre, apellido, direccion, localidad, codPostal, telefono, correo} = req.body;
        const suscripcionNueva = new Suscripcion({
            nombre, apellido, direccion, localidad, codPostal, telefono, correo
        })
        await suscripcionNueva.save();
        res.status(201).json({
            mensaje: "Suscripcion almacenada con exito"
        })
    } catch (error) {
        console.log(error);
        res.status(501).json({
            mensaje: "Ocurrio un error en la carga"
        })
    }
}

suscripcionCtrl.listarSuscripciones = async(req, res)=>{
    try {
        const arregloSuscripciones = await Suscripcion.find();
        res.status(200).json(arregloSuscripciones);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error en la consulta."
        })
    }
}

export default suscripcionCtrl;