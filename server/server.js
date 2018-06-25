const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit from Admin text Welcome to the chat app
  socket.emit('newMesssage', generateMessage('Admin', 'Welcome to the chat app'));

  // socket.broadcast.emit from Admin text New user joined
  socket.broadcast.emit('newMesssage', generateMessage('Admin', 'New user joined'));

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      callback('Name and room name are required.');
    }

    callback();
  });

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);

    io.emit('newMesssage', generateMessage(message.from, message.text));
    callback();
  });

  // socket.on('createLocationMessage', (coords) => {
  //   io.emit('newMesssage', generateMessage('Admin', `${coords.latitude}, ${coords.longitude}`));
  // });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMesssage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
