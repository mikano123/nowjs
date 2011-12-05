
var fs = require('fs');

var http = require('http');
var server = http.createServer(function(req, res){
	fs.readFile('index.html', function(err, data){
		res.writeHead(200, {'Content-type':'text/html'});
		res.write(data);
		res.end();
	});
});
server.listen(8080);

var everyone = require('now').initialize(server);
everyone.now.distributeMessage = function(msg)
{
	everyone.now.receiveMessage(this.now.name, msg);
};
