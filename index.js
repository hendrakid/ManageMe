const { Client, GatewayIntentBits } = require('discord.js');

const APP_ID = process.env['APP_ID']
const GUILD_ID = process.env['GUILD_ID']
const DISCORD_TOKEN = process.env['DISCORD_TOKEN']
const PUBLIC_KEY = process.env['PUBLIC_KEY']

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

client.login(DISCORD_TOKEN);