const http = require('http');
const os = require('os');

console.log("example console log from appzeke server");

var handler = function(req, resp) {
  console.log("[log] appzeke received request from " + req.connection.remoteAddress);
  resp.writeHead(200);
  resp.end("You have successfully reached " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);

