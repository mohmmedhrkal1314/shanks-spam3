const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("549319064162664468")
setInterval(function() {
channel.send(` شانكس شانكس شانكس شانكس`);
}, 30)
})

client.login(process.env.BOT_TOKEN);