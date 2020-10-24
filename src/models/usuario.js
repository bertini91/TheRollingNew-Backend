import mongoose, {Schema} from 'mongoose';

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
        type: Number,
        required: true,
    },
    telefono: {
        type: String,
        required: true,     
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    perfil:{
        type: String,
        required: true,
    },
    usuario:{           
        type: String,
        required: true,
        unique: true
    },
    contrasenia:{        
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