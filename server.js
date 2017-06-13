const express = require('express');
const http = require('http');
const socket = require('socket.io');
const path = require('path');

const app = express();
const server = http.Server(app);
const io = socket(server);

server.listen(3000);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

io.on('connection', socket => {
    console.log('Новое соеденение');
    socket.on('disconnect', () => {
        console.log('Соеденение разорвано')
    });

    socket.on('msg', data => {
        console.log(`Новое сообщение: ${data}`);
    })
});