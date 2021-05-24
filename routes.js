//import filesystem
const fs = require('fs');

function requestHandler(req, res) {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>My First Page</title></head>');
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
		res.write('</html>');
		return res.end();
	}

	if (url === '/message' && method === 'POST') {
		const body = [];
		req.on('data', function(chunk) {
			console.log(chunk);
			body.push(chunk);
		});

		return req.on('end', function() {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1];
			fs.writeFile('message.txt', message, function () {
				//redirect
				res.statusCode = 302;
				res.setHeader('Location', '/');
				return res.end();
			});			
		});
		
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My First Page</title></head>');
	res.write('<body><h1>Running Node.Js Server</h1></body>');
	res.write('</html>');
	res.end();
}

module.exports = requestHandler;