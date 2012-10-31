var http = require("http");
var reddit = require("./redditRequest.js");

function startServer(callback){
		var server = http.createServer(function(request, response){
				reddit.makeRequest(function(){});
				response.writeHead('200');
				response.write('Success');
				response.end();
		});
		server.listen(8080);
		console.log("listening");
}


exports.start = startServer;