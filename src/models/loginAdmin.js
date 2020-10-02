import mongoose, {Schema} from 'mongoose';

const loginAdminSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LoginAdmin = mongoose.model('loginAdmin', loginAdminSchema);
export default LoginAdmin;