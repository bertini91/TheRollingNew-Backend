import mongoose from 'mongoose';

const url= "mongodb+srv://rollingNew:admin1234@cluster0.voakf.mongodb.net/test";

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true, 
    useUnifiedTopology:true
})

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("DB conectada");
})