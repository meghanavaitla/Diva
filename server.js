const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors =require('cors');
var carousel=require('./backend/models/carousels');
var service=require('./backend/models/services');

// ************************ DB Connection ************************

var dbOptions = {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true};

mongoose.connect("mongodb+srv://Meghana_07:vnrvjiet@cluster0-lahh1.mongodb.net/beauty?retryWrites=true&w=majority", dbOptions);

mongoose.connection.on('connected', function(){

    console.log("Connected to DB");

})

mongoose.connection.on('error', function(err){

    console.log("Error while connecting to DB: " + err);

})

// ************************ DB Connection ************************







const app = express()







// ****** Body Parser *******

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false })) 

// parse application/json

app.use(bodyParser.json())
app.use(cors());

// ****** Body Parser ********





// *********************** Backend Routes **********************

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/carousel',(req,res)=>{
    carousel.find({},null,{limit:6},(err,docs)=>
    {
        if(err)
        {
        res.json({error:err});
        console.log('Error while getting movies from DB ');
        }
        else
        res.json(docs);
    })
})

app.get('/api/service',(req,res)=>{
   service.find({},null,{limit:6},(err,docs)=>
    {
        if(err)
        {
        res.json({error:err});
        console.log('Error while getting movies from DB ');
        }
        else
        res.json(docs);
    })
})












// *********************** Backend Routes **********************









// ******************** Express Server *************************

const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


