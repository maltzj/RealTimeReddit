var http = require("http");
var ioModule = require("./socket");
function startServer(callback){
		var server = http.createServer(function(request, response){
				response.writeHead('200');
				response.write('Success');
				response.end();
		});
		ioModule.listen(server);
		server.listen(8080);
}

exports.start = startServer;