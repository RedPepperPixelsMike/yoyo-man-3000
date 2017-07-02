const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage} = require("./utils/message");

let app = express();
let server = http.createServer(app);
let io = socketIO(server);



app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');

    socket.emit('newMessage',generateMessage(
        'Admin', 'Welcome to the chat app'
    ));

    socket.broadcast.emit('newMessage',
        generateMessage(
            'Admin', 'New User logged in'
        ));

    socket.on('createMessage', (message, callback) => {
        console.log('create message', message);

        io.emit('newMessage', generateMessage(
            message.from, message.text
        ));
        callback('This is from the server.');
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // })
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});