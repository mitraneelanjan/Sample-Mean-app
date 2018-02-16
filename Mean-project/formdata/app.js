var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

const route= require('./routes/route');

var app = express();
app.use(cors());
app.use(bodyparser.json());

const port = 3000;


mongoose.connect('mongodb://localhost:27017/formdata');

mongoose.connection.on('connected', ()=>{
    console.log('Connected to database');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error'+err);
    }
});





app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

app.get('/', (req,res)=>{
    res.send('Success');
});


app.listen(port, function(){
    console.log("server started at port "+port);
});