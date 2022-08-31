const aoijs = require("aoi.js")
const {token} = require("./config.json")
const bot = new aoijs.Bot({
token: token,
prefix: "s",
intents: ["GUILDS", "GUILD_MESSAGES"]
})

bot.command({
    name:"eval",
    code:`
$eval[$message]
$onlyForIDs[$botOwnerID;]
`
    })

bot.command({
    name:"reload",
    code:`
$updateCommands
$description[Successfully reloaded \`$commandsCount\` command!]
$color[2f3136]

$onlyForIDs[$botOwnerID;]
`
})

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

bot.variables(require(`./var.js`))

bot.onMessage()
bot.onInteractionCreate()

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID] | $getVar[invite]]`
})

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 
