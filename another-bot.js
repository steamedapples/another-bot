const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var prefix = "!";
var helpMsg = "Here's a list of functions you can use to interact with me! \n `help`   Pulls up the help menu. (Duh.) \n `ping`   To test if I am still up. \n `echo`   Echoes your message. ~~Please stand at least 17m away from the bot for this to work.~~"

client.on('message', message => {
    
    //exit if no prefix
    if (!message.content.startsWith(prefix)) return;
    
    
    //commands
    
    //help
    if (message.content.startsWith(prefix + "help")) {
    	message.channel.send(helpMsg);
  	}
     
    //ping
    if (message.content.startsWith(prefix + "ping")) {
    	message.channel.send('Pong!');
  	}
    
    //echo
    if (message.content.startsWith(prefix + "echo")) {
        var echoMsg = message.content.split( prefix + 'echo')[1];
    	message.channel.send(echoMsg);
    }
    
    //setprefix
    /*if (message.content.startsWith(prefix + "setprefix")) {
        var prefix = message.content.split(prefix + "setprefix")[1];
        message.channel.send('All set! The new prefix is: `' + prefix + '`.');
    }
    
});*/


// message.channel.send = sends message
// message.reply = sends "@user, message"



client.login(process.env.BOT_TOKEN);
