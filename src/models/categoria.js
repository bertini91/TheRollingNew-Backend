import mongoose, {Schema} from 'mongoose';

const categoriaSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true
    },
    descripcion:{
        type: String,
        required: true,
        maxlength: 100
    }
})

const Categoria = mongoose.model('categoria', categoriaSchema);
export default Categoria;