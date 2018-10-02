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
    
    //ping
    if (message.content.startsWith(prefix + "ping")) {
    	message.channel.send('Pong!');
  	}
    
    //echo
    if (message.content.startsWith(prefix + "echo")) {
        message.content.send( message.substring(prefix.length + 4) );
    }
    
    var echoMsg = message.content.split('!echo ')[1];
    	message.channel.send(echoMsg);
    
});


// message.channel.send = sends message
// message.reply = sends "@user, message"



client.login(process.env.BOT_TOKEN);
