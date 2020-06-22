
var express = require('express');
var socket= require('socket.io');


//app set up
var app=express();

var server=app.listen(3000,function(){

    console.log('learning in progress');
});

app.use(express.static('public'));

//socket setup
var io=socket(server);

io.on('connection',function(socket){
    console.log('check socket',socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
});

socket.on('typing',function(data){
    socket.broadcast.emit('typing',data)
  });
  
});