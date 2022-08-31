module.exports ={
    name:"deposit",
    type:'interaction',
    prototype:'slash',
    description:'Deposit your coins to the bank.',
    code:`
$interactionReply[;{newEmbed:{title:Deposit}{timestamp}{thumbnail:$authorAvatar}{description:You have successfully deposited your \`$numberSeparator[$get[amount]; ]\` 🪙 Coin to the bank.}{color:2f3136}}]

$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin];$get[amount]]]

$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$get[amount]]]

$onlyIf[$getGlobalUserVar[coin]>=$get[amount];{
"embeds":"{newEmbed:{color:RED}{timestamp}{description:You don't have coin that much to deposit!}}",
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