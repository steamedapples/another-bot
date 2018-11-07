const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');

});


var prefix = "h!";
var helpMsg = "Here's a list of functions you can use to interact with me! \
                    \n **help**   `Pulls up the help menu. (Duh.)` \
                    \n **ping**   `Tests if I'm still up.` \
                    \n **echo**   `Echoes your message. (Users are required to stand at least 17m away from the bot for this to work.)`\
                    \n **flip**   `Flips a coin.` \
                    \n **8ball + question **  `Ask a question, get an answer.` \
		    \n **roll**   `Roll dice. Uses XdY format.` \
		    \n **remind** `Sets a timer. Uses XhYmZs format."

client.on('message', message => {

	console.log(prefix);

	//exit if no prefix
	if (!message.content.startsWith(prefix)) return;


	//commands

	//help
	if (message.content.startsWith(prefix + "help")) {
		message.channel.send(helpMsg);
	}

	//ping
	if (message.content.startsWith(prefix + "ping")) {
		message.channel.send(':ping_pong:  Pong!');
	}

	//echo
	if (message.content.startsWith(prefix + "echo")) {
		var echoMsg = message.content.split(prefix + "echo")[1];
		message.channel.send(echoMsg);
	}

	//flipcoin
	if (message.content.startsWith(prefix + "flip")) {
		var coinSide = Math.round(Math.random());
		if (coinSide === 0) {
			message.channel.send("It's **heads**!");
		} else {
			message.channel.send("It's **tails**!");
		}
	}

	//8ball
	if (message.content.startsWith(prefix + "8ball")) {
		var eightballQuotes = ["As I see it, yes.", "Without a doubt.", "Most likely.",
                               "Outlook not so good.", "Signs point to no.", "Don't count on it.",
                               "Ask again later.", "Best not to tell you now.", "Concentrate and ask again."];
		var eightballAns = eightballQuotes[Math.floor(Math.random() * eightballQuotes.length)];
		message.channel.send("The :8ball: says: **" + eightballAns + "**");
	}

	//diceroll
	if (message.content.startsWith(prefix + "roll")) {
		var str = message.content.split(prefix + "roll")[1];
		var res = str.split("d");

		var arr = [];
		var i;
		for (i = 0; i < res.length; i++) {
			arr.push(Number(res[i]));
		}

		for (j = 0; j < arr.length; j++) {
			if (isNaN(arr[j]) || arr.length !== 2) {
				message.channel.send("Please use the nDx format!");
				return;
			} else if (arr[0] > 500) {
				message.channel.send("Hui flat out refuses to roll that many dice. Try a smaller number!");
				return;
			} else if (arr[1] > 9000) {
				message.channel.send("Error: cannot compute - input seems to be over 9000?! Try a smaller number!");
				return;
			}

		}


		var results = [];
		var j;
		for (k = 0; k < arr[0]; k++) {
			var a = Math.floor(Math.random() * arr[1] + 1);
			results.push(a);
		};

		function getSum(total, num) {
			return total + num;
		}

		var Sum = results.reduce(getSum);
		var announce = "you rolled a total of **" + Sum + "**. (" + results + ")";

		message.reply(announce);
	}
	
	//timer
	/*if (message.content.startsWith(prefix + "remind")) {
		var time = message.content.split(prefix + "remind")[1];
		var seconds = Number(time.split("s")[0]);
		
		if (isNaN(seconds)) {
			message.reply("invalid format. Use `h!remind Xs` instead!");
			return;
		};
		
		message.reply("got it! I'll remind you in " + seconds + " seconds.");
		setTimeout(function(){message.reply("time's up!");}, seconds*1000);
		
	}*/
	
	if (message.content.startsWith(prefix + "remind")) {
		var time = message.content.split(prefix + "remind")[1];
		var beforeS = time.split("s")[0];
		var seconds = Number(beforeS);
		var beforeM;
		var minutes;
		var hours;
		var errorF = "invalid format. Use `h!remind XhYmZs` instead!";

		if (time.endsWith("s") === false) {
		message.reply(errorF);
		return;
	}

	if (isNaN(seconds)) {
	if (beforeS.includes("m")) {
		beforeM = beforeS.split("m")[0];
		minutes = Number(beforeM);
		seconds = Number(beforeS.split("m")[1]);
		
		if (isNaN(seconds)) {
			message.reply("yeah smth wrong with seconds");
			return;
		} else if (isNaN(minutes)) {
			if (beforeM.includes("h")) {
				hours = Number(beforeM.split("h")[0]);
				minutes = Number(beforeM.split("h")[1]);

				if (isNaN(minutes)) {
					message.reply("min prob");
					return;
				} else if (isNaN(hours)) {
					message.reply("hours prob");
					return;
				} else {
					minutes += hours * 60
					seconds += minutes * 60
				}

			} else {
				message.reply("no h, minutes NaN");
				return;
			}
		} else seconds += minutes * 60;
	} else {
		message.reply("nop no m, smth wrong with seconds");
		return;
	}
}


	message.reply("got it! I'll remind you in " + seconds + " seconds.");
	setTimeout(function() {
		message.reply("time's up!");
	}, seconds * 1000);

}

	 /* //setprefix
	 if (message.content.startsWith(prefix + "setprefix")) {
	      var proposed = message.content.split(prefix + "setprefix")[1];
	      message.channel.send("Change prefix to `" + proposed + "`? (Reply with `" + proposed + "confirm`)");
		//problem line here
		if (message.content == (proposed + "confirm") {
		     prefix = proposed;
		     message.channel.send("The new prefix is: `" + prefix + "`.");
		     } else message.channel.send("Cancelled.");
		     
	  } */

});


// message.channel.send = sends message
// message.reply = sends "@user, message"



client.login(process.env.BOT_TOKEN);
