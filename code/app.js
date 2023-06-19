const express= require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restaurantesCriancas',{
    useNewUrlParser: true,
    
    useUnifiedTopology: true
});

const Restaurante= require('./models/restaurante');
const db=mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once("open",() => {
    console.log("database connected");
})

const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/testeRestaurante',(req,res)=>{
    const rest = new Restaurante({ nomePerfilRestaurante :"Porcão",
        endereco :"rua Leonel Magalhaes,68 -Charitas Niteroi Rj",
        horarioFuncionamento:"10 h às 20h",
        temFraldario :"Sim",
        temBrinquedao:"Sim",
    });
    await rest.save();
    res.send(rest)
})
app.listen(3000,()=>{
    console.log('serving on port 3000');
});