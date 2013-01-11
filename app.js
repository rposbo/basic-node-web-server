var server = require("./server"),
	router = require("./route"),
	requestHandlers = require("./requestHandlers");

var handle = {}
handle["/hello"] = requestHandlers.hello;
handle["/goodbye"] = requestHandlers.goodbye;
handle["/favicon.ico"] = requestHandlers.favicon;

var port = process.env.PORT || 3000;
server.start(router.route, handle, port);