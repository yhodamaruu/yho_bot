const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = '<U NOT SEEING IT>';

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (message.content === '!hel') {
        message.channel.send('lo !');
    }
});

client.login(TOKEN);
