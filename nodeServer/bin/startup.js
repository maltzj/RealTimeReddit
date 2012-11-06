var cronJob = require('cron').CronJob;
var config = require('../config/config').config;
var redditObj = require('../redditRequest');
var server = require("../server");

var subreddits = config.testSubreddits;

server.start(function(){});

for(var i = 0; i< subreddits.length; i++){ //for all the of the subreddits that we want to test
		var cronOptions = {
				cronTime: '* * * * * *',
				onComplete: null,
				onTick: redditUpdateJob(subreddits[i]),
				start: true,
				timezone: "America/Los Angeles"
		};
		console.log(subreddits[i]);
		new cronJob('0/30 * * * * *', 
								redditUpdateWrapper(subreddits[i]), null, true, "America/Los_Angeles");
}

function redditUpdateJob(subreddit){
		redditObj.update(subreddit);
}


function redditUpdateWrapper(j) { return function() { redditUpdateJob(j); } }
