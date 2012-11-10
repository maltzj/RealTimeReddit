var fs = require("fs");
var crypto = require("crypto");

var config = {};

config.testSubreddits = ['fffffffuuuuuuuuuuuu', 'WoT', 'programming'];

config.privateKey = fs.readFileSync(__dirname  + '/privatekey.pem');
config.certificate = fs.readFileSync(__dirname + '/certificate.pem');

config.crypto = crypto.createCredentials({'certificate': config.certificate, 'privateKey': config.privateKey});


exports.config = config;