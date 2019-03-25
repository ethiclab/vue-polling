const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http);

const port = process.env.PORT || 4000;

io.on('connection', async (socket) => {
  socket.on('vote', (data) => {
    socket.emit('voted', data);
  });
});

http.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
