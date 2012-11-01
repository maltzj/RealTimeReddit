var io = require("socket.io");

io.sockets.on('connection', onClientReceived);

function onClientReceived(socket){
		//not quite sure what this will be doing yet
}

function emitToSockets(message){
		io.sockets.emit('update', message);
}

function listenOnServer(server){
		io.listen(server);
}

exports.listen = listenOnServer;
exports.emitMessage = emitToSockets;