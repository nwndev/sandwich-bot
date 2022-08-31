module.exports ={
    name:"withdraw",
    type:'interaction',
    prototype:'slash',
    description:'Withdraw your coins from the bank.',
    code:`
$interactionReply[;{newEmbed:{title:Withdraw}{timestamp}{thumbnail:$authorAvatar}{description:You have successfully withdrawn your \`$numberSeparator[$get[amount]; ]\` 🪙 Coin from the bank.}{color:2f3136}}]

$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$get[amount]]]

$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$get[amount]]]

$onlyIf[$getGlobalUserVar[bank]>=$get[amount];{
"embeds":"{newEmbed:{color:RED}{timestamp}{description:You don't have coin in the bank that much to withdraw!}}",
"options":{"interaction":true},
"ephemeral":true}]

$onlyIf[$checkContains[$get[amount];0;1;2;3;4;5;6;7;8;9]==true;{
"embeds":"{newEmbed:{color:RED}{timestamp}{description:Please provide a valid amount of coins!}}",
"options":{"interaction": true},
"ephemeral": true}]

$onlyIf[$getGlobalUserVar[start]==true;{
"embeds":"{newEmbed:{color:RED}{timestamp}{description:You don't have a Sandwich profile yet.. You can create one by using \`/start\` command.}}",
"options":{"interaction":true},
"ephemeral": true}]

$let[amount;$interactionData[options.data[0].value]
`}