import mongoose, {Schema} from 'mongoose';

const usuarioAdminSchema= new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const UsuarioAdmin = mongoose.model('usuarioAdmin', usuarioAdminSchema);
export default UsuarioAdmin;