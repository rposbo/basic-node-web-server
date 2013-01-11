var fs = require('fs');

function hello(response) {
  console.log("Request handler 'hello' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<em>hello world</em>");
  response.end();
}

function goodbye(response) {
  console.log("Request handler 'goodbye' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<em>goodbye cruel world</em>");
  response.end();
}

function favicon(response) {
  console.log("Request handler 'favicon' was called.");
  var img = fs.readFileSync('./favicon.ico');
  response.writeHead(200, {"Content-Type": "image/x-icon"});
  response.end(img,'binary');
}

exports.hello = hello;
exports.goodbye = goodbye;
exports.favicon = favicon;