const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("593190762091642952")
setInterval(function() {
channel.send(`hdpo6r hdpo6r hdpo6r hdpo6r hdpo6r`);
}, 30)
})

client.login(process.env.BOT_TOKEN);