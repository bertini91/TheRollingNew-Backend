import mongoose, {Schema} from 'mongoose';

const suscripcionSchema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    localidad: {
        type: String,
        required: true,
    },
    codPostal: {
        type: String,
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
    }
})

const Suscipcion = mongoose.model('suscripcion', suscripcionSchema);
export default Suscipcion;