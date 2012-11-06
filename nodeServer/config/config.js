var fs = require("fs");
var crypto = require("crypto");

var config = {};

config.subreddits = ['pics', 'funny', 'videos', 'bestof', 'fffffffuuuuuuuuuuuu', 'askreddit', 'gaming', 'starcraft', 'todayilearned', 'adviceanimals'];
config.testSubreddits = ['fffffffuuuuuuuuuuuu', 'adviceanimals'];

config.privateKey = fs.readFileSync(__dirname  + '/privatekey.pem');
config.certificate = fs.readFileSync(__dirname + '/certificate.pem');

config.crypto = crypto.createCredentials({'certificate': config.certificate, 'privateKey': config.privateKey});


exports.config = config;