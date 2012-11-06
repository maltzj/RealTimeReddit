var io = require("socket.io");
var ioServer = undefined;

function onClientReceived(socket){
		//not quite sure what this will be doing yet
}

function emitToSockets(message){
		ioServer.sockets.emit('update', message);
}

function listenOnServer(server){
		ioServer = io.listen(server, {'origins': '*:*'});
		ioServer.sockets.on('connection', onClientReceived);
}

exports.listen = listenOnServer;
exports.emitMessage = emitToSockets;