var socket = io.connect("https://localhost:35000");
socket.on('update', function(data){
		//var newLinks = JSON.parse(data);
		var linksArray = data.newMessages;
		for(var i = 0; i<linksArray.length; i++){
				var notification = webkitNotifications.createNotification(
						'reddit_alien_logo.png',
						linksArray[i].subreddit + ': ' + linksArray[i].title,
						"<a href=\"" + linksArray[i].url + "\" target=\"_blank\">" + linksArray[i].url + "</a>"
				);
				notification.show();
		}

});