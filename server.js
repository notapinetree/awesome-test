var http = require("http"),
	fs = require("fs");
//Create the http and fs (file system variables), one line declaration.

http.createServer(function(req, res) {

	res.writeHead(200, {
		'Content-Type': 'text/html',
		'Access-Control-Allow-Origin' : '*'
	});

	//Res.writeHead tells the server how to respond when it gets an HTTP 200 (get) request.

	var readStream = fs.createReadStream(__dirname + '/index.html');

	//Get index.html using the fs (filestream) module.

	readStream.pipe(res);
	//Sends readstream variable along the pipe to get response specified above.

}).listen(1337);

//message to console to check port 1337

console.log('Visit me at http://localhost:1337');