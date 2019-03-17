var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mysql=require('mysql');

var con=mysql.createConnection({
  host:'localhost',
  user:'root',
  passwd:'1234'
});
con.connect(function(err){
  if(err){
    console.log(err);
  }
      console.log('connected');
});

app.set('view engine','ejs');
app.use(express.static('pics'));
var urlencoded1=bodyParser.urlencoded({extended:false});
var urlencoded2=bodyParser.urlencoded({extended:false});
var urlencoded3=bodyParser.urlencoded({extended:false});

app.get('/',function(req,res){
   res.render('newHome');
});
app.post('/',urlencoded1,function(req,res){
res.render('explore',{data:req.body});
});
app.get('/home',function(req,res){
   res.render('Home');
});
app.post('/home',urlencoded1,function(req,res){
res.render('explore',{data:req.body});
});

app.get('/login',function(req,res){
res.render('login');
});
app.post('/login',urlencoded2,function(req,res){
res.render('home');
});
app.get('/signup',function(req,res){
res.render('signup');
});
app.post('/signup',urlencoded2,function(req,res){
res.render('home');
});

app.get('/post',function(req,res){
res.render('post');
});
app.post('/post',urlencoded3,function(req,res){
res.render('postProperty');
});

app.listen(8080);
