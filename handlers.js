var rooms = require('./rooms').rooms;

function quit(data, socket) {
    socket.end("Fare the well.\n");
}

function welcome(data, socket) {
    socket.write("Welcome to the server\n");
    socket.write("Please enter your name.\n");
    socket.write("name: ");
    console.log("setting up custom listener!");
    socket.once('data', function(data) { 
	socket.defaultOn('data');
	socket.player = socket.player || {};
	player = socket.player
	player.name = data.toString().replace(/(\r\n|\n|\r)/gm, '');
	player.room = rooms['1'];
	socket.write(rooms['1'] + " " );
	socket.write("Hello "+ player.name +"\n");
	socket.write(player.room.description + '\n');
    });
}

function unknown(data, socket) {
    socket.write("[Unrecognized command: " + 
		 data.command  + "]\n");
}

function look(data, socket) {
    socket.write("You see some stuff\n");
    socket.write(socket.player.room.description + '\n');
}

function move(data, socket) {
    new_room_id = socket.player.room.exits[data.parameters];
    if (new_room_id) {
	socket.player.room = rooms[new_room_id];
	socket.write("You move " + data.parameters + "\n");
    } else {
	socket.write("You cannot move " + data.parameters + "\n");
    }
}



exports.quit = quit;
exports.welcome = welcome;
exports.unknown = unknown;
exports.look = look;
exports.move = move;
