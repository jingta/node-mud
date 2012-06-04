var rooms = {
    1: {
	exits: {
	    east: 2
	},
	description: "You are in an empty clearing. There is a small sign that reads 'New Tristam'. There is a road to the east.",
	items:[1,2,3],
	commands: {
	    shout: {description:"You shout loudly, but there is no response."}
	}
    },
    2: {
	exits: {
	    west: 1
	},
	description: "You are in an empty clearing. There is a small sign that reads 'Old Tristam'. There is a road to the west."
    }
}

/*
var items = { 
    123: {
	type:"Item",
	id:123,
	description: "The rock is small and perfectly circular.",
	commands:
	{
	    take:{
		desc:"You take the rock and put it in your backpack.",
		callback:"addToInventory"}
	}
    },
    99: {
	type:"Item",
	id:99,
	description: "A small glass bottle filled with a liquid.",
	commands:
	{
	    combine:{
		desc:"Blah blah", 
		callback:combineWith, ingredients:4345, creates:8456}
	}
    }
}
*/
exports.rooms = rooms


