const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require ('express-handlebars');
const WaiterAvailability = require('./waiterAvailability');
const waiterAvailability = WaiterAvailability();
const flash = require('express-flash');
const session = require('express-session');




app.engine('handlebars',exphbs({defaultLayout:'main'}));
  // initialise session middleware - flash-express depends on it
  app.use(session({
    secret : 'this is my long string' ,
    resave: false,
    saveUninitialized: true
  }));

  // initialise the flash middleware
  app.use(flash());



app.set('view engine','handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())




app.get('/',function(req,res){
    res.render('home',waiterAvailability.getData())
 });

 app.get('/waiters/:username',function(req,res){
    res.render('home');
});

 app.post('/waiters/:username',function(req,res){
     let fullname = req.body.fullName;
     let  greenDays = req.body.days;
     if(fullname === ""||fullname === undefined){
        req.flash ('error','Please enter your fullname');
    }
     else if(greenDays === ""|| greenDays === undefined){
        req.flash ('error','Please select days where you will be present or select None');
     }
     else {
     waiterAvailability.saveSchedule(fullname,greenDays);
    }


     
     res.redirect('/');

 });

 app.get('/days',function(req,res){


    res.redirect('home', waiterAvailability.getDaysAvailable());
});


 app.listen(3010,function(){
     console.log("started on:",this.address().port);
 })