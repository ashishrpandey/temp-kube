const http = require('http');
const os = require('os');

console.log("console logs coming from "  + os.hostname() + "\n");

var requestCount = 0;

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress + "Request number = " + requestCount);
  requestCount++;
  if (requestCount > 5) {
    response.writeHead(500);
    response.end("I'm not well. Please restart me!");
    return;
  }
  response.writeHead(200);
  response.end("You have reached  " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);

