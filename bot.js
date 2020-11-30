const Discord = require('discord.js');
const client = new Discord.Client();
const Config = require('./config.json');
client.login(Config.token);
client.on('message', message => {
    if(message.content.startsWith(Config.prefix + 'formular')){ // .formula 1 2 == .formula
        var str = message.content.split(' ');
        

        if(isNaN(num2)||isNaN(num3))
        {
            message.reply("숫자가 아닙니다.");
            console.log("debug111");
            message.reply(str[1]);
        }
        else
        {
            message.reply(num2*100/(100+num3));
        }
    }
})





