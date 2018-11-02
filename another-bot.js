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
		    \n **roll**   `Roll dice. Uses XdY format.`"

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
        }
        else {
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
    
	var announce = "you rolled a total of **" + Sum + "**. (" + results + ")";
	var errorS = "Error: please use the nDx format!"
	var errorTB = "Error: it's over 9000!"
	    
	for (i = 0; i < res.length; i++) {
		if (isNan(res[i]) || res.length !== 2) {
			message.channel.send(errorS);
		} else if (res[i] > 9000) {
			message.channel.send(errorTB); 
		} else {
			var arr = [];
	    		var i;
	    		for (i = 0; i < res.length; i++) {
        		arr.push(Number(res[i]));
	    		}
    
        		var results = [];
        		var j;
        		for (j = 0; j < arr[0]; j++) {
        		var a = Math.floor(Math.random()*arr[1]+1);
        		results.push(a);
        		};
    
        		function getSum(total, num) {
        		return total + num;
			var Sum = results.reduce(getSum);
			message.reply(announce);
        		}
		}
	    
        
        
        
        
        
        message.channel.send(announce);
    }
    
  /*  //setprefix
   if (message.content.startsWith(prefix + "setprefix")) {
        prefix = message.content.split(prefix + "setprefix")[1];
    	message.channel.send(prefix);
    } */
    
});


// message.channel.send = sends message
// message.reply = sends "@user, message"



client.login(process.env.BOT_TOKEN);
