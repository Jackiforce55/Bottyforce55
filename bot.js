const Discord = require(`discord.js`)
const fs = require(`fs`)
const Bot = new Discord.Client


var hello = "Hello!"
const config = JSON.parse(fs.readFileSync("./Configuration/config.json", "utf8"));

Bot.login(config.token)

Bot.on('ready', function() {
  console.log(`I am online and working, Brudder!`)
  Bot.user.setActivity(`Whatever Jack does. Bottyforce55 1.01 / Use BF!commandlist`)
})

Bot.on('message', function(msg) {

  var command = msg.content.split(" ")[0].slice(config.prefix.length).toLowerCase()
  var args = msg.content.split(" ").slice(1);
  let suffix = args.join(" ");

  if (!msg.content.startsWith(config.prefix)) {
    return;
  }

  if (msg.channel.type === "dm") return msg.channel.send(`Sorry brudder, But in order for me to work properly, All of my commands will not work in DMs.`)
  
  if (command === "introduction") {
    msg.channel.send(`Hi! I am Bottyforce55. I was created by Jackiforce55#2093! i have a whole bunch of commands. use 'commandlist' to see them all!`)
    return;
  }

  if (command === "relay") {
    msg.delete()
    if (!suffix) return
    msg.channel.send(`${suffix}`)
  }
  
  if (command === "commandlist") {
    msg.author.send(`
    \`\`\`
    My commands are:
    ${config.prefix}aiden - Calls AidenMcFadden a wafer
    ${config.prefix}jack - a summary of my creator.
    ${config.prefix}daniel - a summary of Plainapple287.
    ${config.prefix}lbg3000 - a summary of LuckyBoyGamer3000
    ${config.prefix}nuke - press the big red button to find out what this command does!
    ${config.prefix}iphone - this command will make me message a quote from an aznguy.mp4 YTP
    ${config.prefix}yf111 - a command about YoshiFan111
    ${config.prefix}ivan - a summary of Mission Firefox
    ${config.prefix}f - self explanatory
    ${config.prefix}rip - self explanatory
    ${config.prefix}loo - self explanatory
    ${config.prefix}lou - self explanatory
    ${config.prefix}alex - a description of Pew.mp7
    ${config.prefix}pewdiepie - ALL HAIL PEWDIEPIE
    ${config.prefix}mrbeast - a plea to Mr. Beast
    ${config.prefix}rfw - 3 words for you. Russian F Word
    ${config.prefix}teeth - Yuse Yis Yuhmmand Yoo Yemharras Yee
    ${config.prefix}yurii - a summary of SovietYurii
    ${config.prefix}updates - this will send you a DM with a list of my newset features!
    ${config.prefix}relay - this command will relay whatever you type in. note, however, that if you are typing more than one word, you are going to have to put a - between them. (for example, dank-memes)
    ${config.prefix}ping - this checks the current ping of the server you want to check the ping of
    \`\`\`

    `)
     msg.channel.send(`Check your DMs, brudder! I should have sent you a message containing all of my commands.`)
    return;
  }
  
  if (command === "game") {
    if (msg.author.id !== config.owner) return;
    if (!suffix) msg.channel.send(`Sorry bro, i can't set the game. big sad`)
    return;
    Bot.user.setGame(`${suffix}`)
  }

  if (command === "updates") {
    msg.author.send(`
    \`\`\`
    New updates for Bottyforce55 1.0.1, Patch 3:
    It now pings EVERYONE when ${config.prefix}aiden is used.
    \`\`\`

    `)
    return;
  }
  if (command === "aiden") {
    msg.channel.send(`@everyone AIDENMCFADDEN IS A WAFER`)
    return;
  }

  if (command === "jack") {
    msg.channel.send(`Jackiforce55 is my creator. he is a Godzilla fan, plays Fortnite, and likes coding bots`)
    return;
  }

  if (command === "daniel") {
    msg.channel.send(`Plainapple287 is a YouTuber with over 1,000 subscribers! he also loves raiding servers and even has a paper with the words "LOO" in his room.`)
    return;
  }

  if (command === "lbg3000") {
    msg.channel.send(`LuckyBoyGamer3000 is BEND IT!!!!!!!!!!`)
    return;
  }

  if (command === "nuke") {
    msg.channel.send(`KABOOSH https://youtu.be/dQw4w9WgXcQ`)
    return;
  }

  if (command === "iphone") {
    msg.channel.send(`iPhone **E** with the limited edition Ada08 logo`)
    return;
  }

  if (command === "yf111") {
    msg.channel.send(`Hentai is epic`)
    return;
  }

  if (command === "ivan") {
    msg.channel.send(`"GOD F*CKING DAMN IT!" - Mission Firefox raging at Undertale while he was in a Discord call with Jackiforce55`)
    return;
  }

  if (command === "F") {
    msg.channel.send(`F`)
    return;
  }

  if (command === "rip") {
    msg.channel.send(`can i get a rip in the chat?`)
    return;
  }

  if (command === "loo") {
    msg.channel.send(`Loo`)
    return;
  }

  if (command === "lou") {
    msg.channel.send(`Lou`)
    return;
  }

  if (command === "alex") {
    msg.channel.send(`I think Pew.mp7 has the world record for the amount of servers he owned that got raided`)
    return;
  }

  if (command === "pewdiepie") {
    msg.channel.send(`EVERYONE SUBSCRIBE TO PEWDIEPIE`)
    return;
  }

  if (command === "mrbeast") {
    msg.channel.send(`MR. BEAST PLEASE SAVE PEWDIEPIE`)
    return;
  }

  if (command === "rfw") {
    msg.channel.send(`Blyat`)
    return;
  }

  if (command === "teeth") {
    msg.channel.send(`Yut yus yat? Yorry, yut i yam rushing yi yeeth.`)
    return;
  }

  if (command === "yurii") {
    msg.channel.send(`SovietYurii unsucesfully tried to help my creator make the first version of me. But he is very good at making bots.`)
    return;
  }

  if (command === "ping") {
    msg.channel.send(`Checking ping, wait a sec...`).then(function(m) {
      m.edit(`The current ping of this server is: ${m.createdTimestamp - msg.createdTimestamp}ms'`)
    })
    return;
  }
})
