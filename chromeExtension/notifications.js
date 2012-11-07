var socket = io.connect("https://localhost:8080");
socket.on('update', function(data){
		//var newLinks = JSON.parse(data);
		var linksArray = data.newMessages;
		for(var i = 0; i<linksArray.length; i++){
				var notification = webkitNotifications.createNotification(
						undefined,
						'Hello',
						linksArray[i].title
				);
				notification.show();
		}

});