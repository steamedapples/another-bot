const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDk1OTc2MzYyOTUyMjI4OTA1.DpSz8w.BhpnSnr3UNYzpFA0jwkD0nice8I);
