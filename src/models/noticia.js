import mongoose, {Schema} from 'mongoose';

const noticiaSchema = new Schema({
    titulo:{
        type: String,
        maxlength: 100,
        required: true
    },
    detalleCorto:{
        type: String,
        required: true
    },
    detalle:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true,
        maxlength:30
    },
    url:{
        type: String, /* hay q ver si lo tratamos como array */
        required: true,
    },
    categoria:{
        type: String,
        required: true,
        maxlength:30
    },
    destacado:{
        type:Boolean,
        required: true,
    },
    fecha:{
        type:Date,
        required: true,
    }
});

const Noticia = mongoose.model('noticia', noticiaSchema);
export default Noticia;