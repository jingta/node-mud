var server = require("./server");
var commands = require("./commands");
var handlers = require("./handlers");

var mappings = {};
mappings['##welcome_message##'] = handlers.welcome;
mappings['##unknown##'] = handlers.unknown;
mappings['quit'] = handlers.quit;
mappings['look'] = handlers.look;
mappings['move'] = handlers.move;

server.start(commands.commands, mappings, 1337);