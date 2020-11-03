import Categoria from "../models/categoria";
import Noticia from "../models/noticia";

const categoriaCtrl = {};

categoriaCtrl.getPrueba = (req, res) => {
  res.send("prueba desde el controlador de categorias");
};

categoriaCtrl.crearCategoria = async (req, res) => {
  console.log(req.body);
  try {
    const { nombre, descripcion } = req.body;
    const categoriaNueva = new Categoria({
      nombre: nombre,
      descripcion: descripcion,
    });
    await categoriaNueva.save();
    res.status(201).json({
      mensaje: "Categoria almacenada con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrio un error en la carga",
    });
  }
};

categoriaCtrl.listarCategorias = async (req, res) => {
  try {
    const arregloCategorias = await Categoria.find();
    res.status(200).json(arregloCategorias);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrio un error en la consulta",
    });
  }
};

categoriaCtrl.eliminarCategoria = async (req, res) => {
  try {
    const cat = await Categoria.findOne({ _id: req.params.id });
    await Categoria.findByIdAndDelete(cat._id);
    await Noticia.deleteMany({ categoria: cat.nombre });
    res.status(200).json({
      mensaje: "La categoria y sus noticias feron eliminadas con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrio un error para eliminar un elemento.",
    });
  }
};

categoriaCtrl.actualizarCategoria = async (req, res) => {
  try {
    const cat = await Categoria.findOne({ _id: req.params.id });
    await Noticia.update(
      { categoria: cat.nombre },
      { categoria: req.params.nombre },
      {
        multi: false,
        upsert: false,
      }
    );
    await Categoria.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "La categoria fue actualizada con exito!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrio un error en la actualizacion.",
    });
  }
};

export default categoriaCtrl;
