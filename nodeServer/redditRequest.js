var request = require("request");
var ioModule = require("./sockets");
var recentPosts = {};


function update(subreddit){
		
		var options = {
				url:'http://reddit.com/r/' + subreddit + '/new.json',
				method: 'GET',
				'user-agent': 'RealTimeReddit/1.0'
		};
		
		request(options, function(error, response, body){
				var body = JSON.parse(body);
				updateRecentPosts(subreddit, body.data.children);
		});
}

function updateRecentPosts(subreddit, posts){
		var currentPosts = recentPosts[subreddit];
		console.log("posts' length is " + posts.length);
		var postInformation = [];

		if(currentPosts == undefined){ //if this is the first time getting posts for this subreddit
				recentPosts[subreddit] = posts;
				return;
		}
		
		for(var i = 0; i<posts.length; i++){//get any new posts
				
				if(currentPosts.length > 0 && currentPosts[0].permalink == posts[i].data.permalink){
						break;
				}

				var postToAdd = {
						'subreddit': subreddit,
						'url': posts[i].data.url,
						'title': posts[i].data.title,
						'permalink': posts[i].data.permalink
				};
				postInformation.push(postToAdd);				

		}

		if(postInformation.length != 0){ //emit the new posts to the sockets
				ioModule.emitMessage({'newMessages': postInformation})
		}

		currentPosts.splice(25 - postInformation.length, postInformation.length); //trim the array down to only 25
		postInformation.push.apply(postInformation, currentPosts); //apply all of the old posts to the new posts
		recentPosts[subreddit] = postInformation;
}

function getRecentPosts(subreddit){ //gets all the recent posts for a subreddit
		return recentPosts[subreddit] != undefined ? recentPosts[subreddit]: [];
}

exports.update = update;
exports.getPosts = getRecentPosts;