var express=require('express');
var morgan=require('morgan');
var path=require('path');

var app=express();
app.use(morgan('combined'));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'ui','frame.html'));
});
app.get('/ui/corpus.png',function(req,res){
	res.sendFile(path.join(__dirname,'ui','corpus.png'));
});
app.get('/ui/logo.jpg',function(req,res){
	res.sendFile(path.join(__dirname,'ui','logo.jpg'));
});
app.get('/ui/nss.png',function(req,res){
	res.sendFile(path.join(__dirname,'ui','nss.png'));
});
app.get('/ui/name.jpg',function(req,res){
	res.sendFile(path.join(__dirname,'ui','name.jpg'));
});
app.get('/ui/contact.png',function(req,res){
	res.sendFile(path.join(__dirname,'ui','contact.png'));
});
app.get('/ui/fc.png',function(req,res){
	res.sendFile(path.join(__dirname,'ui','fc.png'));
});
app.get('/ui/sc.png',function(req,res){
	res.sendFile(path.join(__dirname,'ui','sc.png'));
});
app.get('/ui/top_nav.html',function(req,res){
	res.sendFile(path.join(__dirname,'ui','top_nav.html'));
});
app.get('/ui/main.html',function(req,res){
	res.sendFile(path.join(__dirname,'ui','main.html'));
});
app.get('/ui/right.html',function(req,res){
	res.sendFile(path.join(__dirname,'ui','right.html'));
});
app.get('/ui/back.jpg',function(req,res){
	res.sendFile(path.join(__dirname,'ui','back.jpg'));
});
app.get('/ui/fc.html',function(req,res){
	res.sendFile(path.join(__dirname,'ui','fc.html'));
});
app.get('/ui/sc.html',function(req,res){
	res.sendFile(path.join(__dirname,'ui','sc.html'));
});
app.get('/ui/corpus.html',function(req,res){
	res.sendFile(path.join(__dirname,'ui','corpus.html'));
});
app.get('/ui/contact.html',function(req,res){
	res.sendFile(path.join(__dirname,'ui','contact.html'));
});
var port=8080;
app.listen(port,function(){
	console.log(`Hey Danger, be careful on port ${port} `);
});
