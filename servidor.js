



var app = require('express')();
var x = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

/* app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});  */

app.use(x.static('public'));



io.sockets.on('connection', function(socket){
	console.log('entro algo 1');
	
	
  socket.on('message', function(data /*msg*/){
  	console.log('entro algo 1 y saldra :' + data);
  	
  	socket.broadcast.emit('message', /*JSON.stringify*/(data));
  	//console.log('lo que enviaaa:----' + data);
    //io.emit('get_message', msg);
  });
});



//cuando se activa el servidor

http.listen(port, function(){
  console.log('listening on *:' + port);
});  

/*

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

*/

/* var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// use express static to deliver resources HTML, CSS, JS, etc)
// from the public folder 
app.use(express.static('public'));


/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});  */


/*
io.on('connection', function(socket){
  socket.on('data', function(msg){
    io.emit('data', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});  


*/