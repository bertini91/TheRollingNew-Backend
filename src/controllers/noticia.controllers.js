import Noticia from '../models/noticia';

const noticiaCtrl = {};

noticiaCtrl.getPrueba = (req, res)=>{
    res.send("prueba desde el controlador de categorias")
}

noticiaCtrl.crearNoticia = async (req, res)=>{
    console.log(req.body)
    try {
        const {titulo, detalleCorto, detalle, autor, url, categoria, destacado, fecha} = req.body; 
        const noticiaNueva = new Noticia({
            titulo,
            detalleCorto,
            detalle,
            autor,
            url,
            categoria,
            destacado,
            fecha
        });
        await noticiaNueva.save();
        res.status(201).json({
            mensaje: "Noticia almacenada con exito"
        })
    } catch (error) {
        console.log(error);
        res.status(501).json({
            mensaje: "Ocurrio un error en la carga",
            error: error
        })
    }
}

noticiaCtrl.listarNoticia = async(req, res)=>{
    try {
        const arregloNoticias = await Noticia.find();
        res.status(200).json(arregloNoticias);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Ocurrio un erorr en la consulta"
        })
    }
}

noticiaCtrl.actualizarNoticia = async (req, res)=>{
    try {
        await Noticia.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "La noticia fue actualizada con exito"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Ocurrio un error en la actualizacion"
        })
    }
}

noticiaCtrl.eliminarNotica = async (req, res)=>{
    try {
        console.log(req.params.id);
        await Noticia.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: "La noticia fue eliminada con exito"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error para eliminar un elemento."
        })
    }
}

export default noticiaCtrl;