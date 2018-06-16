var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: 'user@example.com',
  //   text: 'Hey. This is Jose.'
  // });

  socket.emit('createMessage', {
    from: 'human4',
    text: 'This a message from the client'
  });

});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

// socket.on('newEmail', function(email) {
//   console.log('New email', email);
// });

socket.on('newMesssage', function (message) {
  console.log('New Messsage', message);
});
