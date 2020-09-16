import mongoose, { mongo, Schema } from "mongoose";

const usuadioAdministradorSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique,
  },
  contrasenia: {
    type: String,
    required: true,
  },
});

const UsuarioAdmin = mongoose.model('usuarioAdmin', usuadioAdministradorSchema);
export default UsuarioAdmin;