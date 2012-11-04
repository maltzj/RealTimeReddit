var http = require("http");
var ioModule = require("./sockets");
var fs = require("fs");

function startServer(callback){
		var server = http.createServer(function(request, response){
				fs.readFile(__dirname + '/index.html', function(error, data){
						if(error){
								response.writeHead('500');
								response.write('Fail Whale :(');
						}
						else{
								response.writeHead('200');
								response.write(data);
						}
						response.end();
				});	
		});
		ioModule.listen(server);
		server.listen(8080);
}

exports.start = startServer;