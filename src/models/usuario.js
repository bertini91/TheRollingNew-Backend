import mongoose, {Schema} from 'mongoose';

                    //EL ESQUEMA Y NOMBRES HAY Q CONTROLAR

const usuarioSchema = new Schema ({
    nombre:{
        type: String,
        required: true,

    },
    apellido:{
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    localidad:{
        type: String,
        required: true,
    },
    codPostal:{
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,     //le ponemos la propiedad unica?
    },
    correo: {
        type: String,
        required: true,
        unique
    },
    perfil:{
        type: String,
        required: true,
    },
    usuario:{           //le agregamos un minimo y maximo???
        type: String,
        required: true,
        unique
    },
    contrasenia:{        //le agregamos un minimo y maximo???
        type: String,
        required: true,
    },
    estado:{
        type: String,
        required: true,
    }
})

const Usuario = mongoose.model('usuario', usuarioSchema);
export default Usuario;