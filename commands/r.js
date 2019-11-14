module.exports = {
	name: 'r',
	description: 'Very basic dice roller.',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		message.channel.send(dieRoll(args));
	},
};

function dieRoll(dieSpec) {
    var match = /^(\d+)?d(\d+)([+-]\d+)?$/.exec(dieSpec);
    if (!match) {
        throw "Invalid dice notation: " + dieSpec;
    }

    var howMany = (typeof match[1] == 'undefined') ? 1 : parseInt(match[1]);
    var dieSize = parseInt(match[2]);
    var modifier = (typeof match[3] == 'undefined') ? 0 : parseInt(match[3]);

    var total = 0; //Total starts as 0

    for (var i = 0; i < howMany; i++) { //Loop a number of times equal to the number of dice
        total += Math.floor(Math.random() * dieSize) + 1; //Random number between 1 and diesize
    }
    total += modifier; //Add the modifier

    return total; //Return the final total
}