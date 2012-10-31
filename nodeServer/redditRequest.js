var request = require("request");

function makeRequest(callback){
		
		var options = {
				url:'http://reddit.com/r/pics/new.json',
				method: 'GET',
				'user-agent': 'RealTimeReddit/1.0'
		};
		
		request(options, function(error, response, body){
				console.log("Got a response");
				console.log(response.statusCode);
		});
		
}

exports.makeRequest = makeRequest