var https = require("https");
var ioModule = require("./sockets");
var fs = require("fs");
var config = require("./config/config").config;

function startServer(port){

		console.log(config.privateKey);
		
		var options = {
				key: config.privateKey,
				cert: config.certificate,
				requestCert: false
		};

		var server = https.createServer(options, function(request, response){
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
		server.listen(port);
}

exports.start = startServer;