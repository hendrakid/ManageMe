const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.once('ready', () => {
    console.log('Ready!');
  client.user.setPresence({ activities: [{ name: 'Discord' }], status: 'idle' });
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login("MTA0OTgzMTg3ODA4Mjk2MTQ0OQ.GYYqgY._5C_463fxmPKoVzInEjsAcurchg2TlADI-pSBA");