const aoijs = require("aoi.js")
const {token} = require("./config.json")
const bot = new aoijs.Bot({
token: token,
prefix: "s",
intents: ["GUILDS", "GUILD_MESSAGES"]
})

let utils = {
round: function(num) {
result = Math.round(num)
return result
},
multi: function(num,num2) {
result = Math.floor(num * num2)
return result
},
substract: function(num,num2) {
result = Math.floor(num - num2)
return result
},
table: function(title,desc) {
table = console.table([
{ title: title, description: desc }
])
return table
},
random: function(min,max) {
randomizedNums = Math.floor(Math.random() * min)+max
return randomizedNums
},
randomString: function(length) {
var result = '';
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
},
randomNumber: function(length) {
var result = '';
var nums = '0123456789';
var numsLength = nums.length;
for ( var i = 0; i < length; i++ ) {
result += nums.charAt(Math.floor(Math.random() * numsLength));
}
return result;
},
numberSeparator: function(num,sep) {
return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep)
},
randomColor: function() {
let x = Math.floor(Math.random()*0xFFFFFF).toString(16);
return x
}
};
//simple utility tools made by nwn

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