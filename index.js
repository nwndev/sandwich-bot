const aoijs = require("aoi.js")
const {token} = require("./config.json")
const bot = new aoijs.Bot({
token: token,
prefix: "s", //prefix for eval
intents: ["GUILDS", "GUILD_MESSAGES"] //bot's intent.
})

bot.command({
    name:"eval",
    code:`
$eval[$message]
$onlyForIDs[$botOwnerID;]
`
    }) //eval command

bot.command({
    name:"reload",
    code:`
$updateCommands
$description[Successfully reloaded \`$commandsCount\` command!]
$color[2f3136]

$onlyForIDs[$botOwnerID;]
`
}) //reload command, will update all commands at /commands directory without restarting the server.

bot.status({
  text: "Sandwich growth! 🥪",
  type: "WATCHING",
  time: 12
})

bot.status({
  text: "use /help to learn more!",
  type: "LISTENING",
  time: 12
})

bot.variables(require(`./var.js`)) //variable handler

bot.onMessage()
bot.onInteractionCreate() //create an interaction, require to create and respond to interaction command such as slash command and buttons.

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID] | $getVar[invite]]`
}) //ready command

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') //command handler
