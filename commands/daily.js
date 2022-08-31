module.exports ={
    name:"daily",
    type:'interaction',
    prototype:'slash',
    description:'Redeem your daily coins.',
    code:`
$interactionReply[;{newEmbed:{title:Daily}{timestamp}{thumbnail:https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/322/money-bag_1f4b0.png}{color:YELLOW}{description:You have sucessfully redeemed your daily \`$numberSeparator[$multi[120;$getGlobalUserVar[blvl]]; ]\` 🪙 Coin!}}]

$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$multi[120;$getGlobalUserVar[blvl]]]]

$globalCooldown[12h;{
"embeds":"{newEmbed:{color:RED}{timestamp}{description:You have already redeemed your dailies recently.. Please wait another \`%time%\` to redeem again.}}",
"options":{"interaction":true},
"ephemeral": true}]

$onlyIf[$getGlobalUserVar[start]==true;{
"embeds":"{newEmbed:{color:RED}{timestamp}{description:You don't have a Sandwich profile yet.. You can create one by using \`/start\` command.}}",
"options":{"interaction":true},
"ephemeral": true}]
`}