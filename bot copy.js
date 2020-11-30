const Discord = require('discord.js');
const client = new Discord.Client();
client.login(token.token);

const yichan = {
    height: 177,
    weight: 100
};
client.on('message', message => {
    if(message.content === '.status'){
        message.reply("BMI:" + 10000* yichan.weight/yichan.height * yichan.height);
    }
})


