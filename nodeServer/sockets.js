var io = require("socket.io");


function onClientReceived(socket){
		//not quite sure what this will be doing yet
}

function emitToSockets(message){
		io.sockets.emit('update', message);
}

function listenOnServer(server){
		var ioServer = io.listen(server);
		ioServer.sockets.on('connection', onClientReceived);
}

exports.listen = listenOnServer;
exports.emitMessage = emitToSockets;