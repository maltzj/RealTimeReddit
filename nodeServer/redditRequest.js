var request = require("request");

var recentPosts = {};
var webSockets = null;


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

		if(currentPosts == undefined){
				recentPosts[subreddit] = posts;
				return;
		}
		
		for(var i = 0; i<posts.length; i++){
				if(currentPosts[0].permalink == posts[i].data.permalink){
						break;
				}
				var postToAdd = {'url': posts[i].data.url,
												 'thumbnail': posts[i].data.thumbnail,
												 'title': posts[i].data.title,
												 'permalink': posts[i].data.permalink};
				postInformation.push(postToAdd);				
		}

		for(var i = 0; i<posts.length; i++){
				console.log("in posts title is " + posts[i].data.title);
		}
		

		currentPosts.splice(25 - postInformation.length, postInformation.length);
		postInformation.push.apply(postInformation, currentPosts);
		recentPosts[subreddit] = postInformation;
		console.log(recentPosts[subreddit][0].title);
}

function getRecentPosts(subreddit){
		return recentPosts[subreddit] != undefined ? recentPosts[subreddit]: [];
}

exports.update = update;
exports.getPosts = getRecentPosts;