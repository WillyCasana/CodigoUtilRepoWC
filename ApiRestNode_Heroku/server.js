const express= require('express');
const app = express();

const listadoArticulo = require('./articles/articles');


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
});

app.get('/',(req,res,next)=>{
    res.send("Bienvenidos");
    next();
});

app.get('/listado',(req,res,next)=>{
    res.json(listadoArticulo);
});

app.listen(5000,(req,res,next)=>{
    console.log("servidor se esta ejecutando en puerto " );
})

