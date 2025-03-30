import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';

const app = express();

const __dirname = import.meta.dirname;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.end('Hello world!');
});

const server = http.createServer(app);

const io = new Server(server);

io.on('connection', socket => {
  let name;

  console.log('got a connection');

  socket.on('login', n => {
    name = n;
    io.emit('login', `${name} has joined the chat.`)
  });

  socket.on('msg', msg => {
    //socket.broadcast.emit('msg', msg);

    io.emit('msg', `${name}: ${msg}`);
  });
  socket.on('disconnect', () => {

    io.emit('msg', `${name} has left the chat.`)
  });

});


server.listen(80);
