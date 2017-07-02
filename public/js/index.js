let socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from : 'Mike',
        text: 'Sup dawg'
    });


});


socket.on('disconnect', function () {
    console.log('Disconected from server');
});

socket.on('newMessage', function(message){
        console.log('newMessage', message);
});

