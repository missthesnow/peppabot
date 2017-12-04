const Discord = require('discord.js');

const TOKEN = 'Insert token here';
const PREFIX = '!';

var eightball = [
    'Oh Yes!',
    'Hmm, I do not think so.',
    'I really do not know.',
    'Oink!',
    'Definitely not.',
    'I think so.',
    'You may have to ask Suzy Sheep',
    'Maybe.',
    'Mummy says she does not think so.',
    'No.',
    'When I learn how to whistle, yes.',
    "I'm tired.",
    'Yes.'

];

var bot = new Discord.Client();

bot.on('ready', function() {
    console.log('Bot_Peppa is online');
});

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'hello') {
        message.channel.send('Hello!');
    }
});


//bot.on('message', function(message) {
//    if (message.author.equals(bot.user)) return;
//    switch (args[0].toLowerCase()) {
//    if (message.content == 'hello peppa') {
//        message.channel.send('Hello!');
//    }
//});
//}
bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'amen') {
        message.channel.send("And amen");
    }
});

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'Amen') {
        message.channel.send("And amen");
    }
});

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'AMEN') {
        message.channel.send("And amen");
    }
});

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'Peppa') {
        message.channel.send("You have been blessed.");
    }
});

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'peppa') {
        message.channel.send("You have been blessed.");
    }
});

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'PEPPA') {
        message.channel.send("You have been blessed.");
    }
});

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'PATRICIA!') {
        message.channel.send("Um, could you be quiet honey?");
    }
});

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'sorry') {
        message.channel.send("You are forgiven.");
    }
});

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split(' ');



    switch (args[0].toLowerCase()) {
        case 'ping' :
        message.channel.send('Pong!');
        break;
        case 'info':
        message.channel.send("I'm Peppa Pig! I have a little brother George, Mummy Pig and Daddy Pig. Oink!");
        break;
        case '8ball' :
        if (args[1]) {
            message.channel.send(eightball[Math.floor(Math.random() * eightball.length)]);
        } else {
            message.channel.send('I am not sure how to answer.')
        }
        break;
        case 'noticeme':
        message.channel.send(message.author.toString() + ' May your day be successful');

        break;
        default:
        message.channel.send('Invalid Command! For a list of commands, please ask @missthesnow to code a freakin commands list.')

    }
    if(message.author.bot) return;
});





bot.login (TOKEN);
