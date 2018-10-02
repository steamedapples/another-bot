const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var prefix = "!";

client.on('message', message => {
    
    //exit if no prefix
    if (!message.content.startsWith(prefix)) return;
    
    
    //commands
    
    //help
    if (message.content.startsWith(prefix + "help")) {
    	message.channel.send('Here's a list of functions you can use to interact with me!
                             `help`   Pulls up the help menu. (Duh.)
        `ping`   To test if I\'m still up.
        `echo`   Echoes your message. ~~Please stand at least 17m away from the bot for this to work!~~ ');
  	}
    
    //ping
    if (message.content.startsWith(prefix + "ping")) {
    	message.channel.send('Pong!');
  	}
    
    //echo
    if (message.content.startsWith(prefix + "echo")) {
        var echoMsg = message.content.split('!echo ')[1];
    	message.channel.send(echoMsg);
        //message.content.send( message.substring(prefix.length + 4) );
    }
    
    
    
});


// message.channel.send = sends message
// message.reply = sends "@user, message"



client.login(process.env.BOT_TOKEN);
