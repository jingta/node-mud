var net = require('net');

function start(commands, mappings, port) {
    var port = port || 8888;
    var sockets = [];

    // Cleans the input of carriage return, newline
    function cleanInput(data) {
	return data.toString().replace(/(\r\n|\n|\r)/gm,"");
    }

    // Callback method executed when data is received from a socket
    function receiveData(socket, data) {
	var cleanData = cleanInput(data);
	commands(cleanData, mappings, socket);
	if (socket.listeners('data').length == 0) {
	    console.log("No data listener! Setting default");
	    socket.defaultOn('data');
	}
    }

    // Method executed when a socket ends
    function closeSocket(socket) {
	var i = sockets.indexOf(socket);
	if (i != -1) {
	    sockets.splice(i, 1);
	}
    }
 
    // method executed when a new TCP socket is opened.
    function newSocket(socket) {
	sockets.push(socket);
	socket.defaultOn = function(event) {
	    socket.removeAllListeners(event);
	    socket.once(event, function(data) {
		receiveData(socket, data);
	    });
	}
	receiveData(socket, "##welcome_message##");
	socket.on('end', function() {
	    closeSocket(socket);
	})
    }
     
    // Create a new server and provide a callback for new connections
    var server = net.createServer(newSocket);
    // Listen on port
    server.listen(port);
    console.log("server listening on port " + port);
}
 

exports.start = start;