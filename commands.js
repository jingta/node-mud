function commands(data, mappings, socket) {
    var command = data.split(' ').slice(0,1);

    var dataObj = extractData(data);

    console.log(dataObj.command + ": " + dataObj.parameters);
    if (typeof mappings[command] === 'function') {
	mappings[command](dataObj, socket);
    } else {
	mappings['##unknown##'](dataObj, socket);
    }
}

function extractData(data) {
    var obj = {};
    obj.raw = data;
    obj.command = obj.raw.split(' ').slice(0,1).toString().replace(/[^\w]*/,'');
    obj.parameters = obj.raw.replace(new RegExp('^'+obj.command+'\\s*'), ''); 
    return obj;
}

exports.commands = commands;
