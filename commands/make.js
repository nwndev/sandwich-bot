module.exports =[{
    name:"make",
    type:'interaction',
    prototype:'slash',
    description:'Make your Sandwich.',
    code:`
$interactionReply[;{newEmbed:{title:Make}{color:2f3136}{timestamp}{thumbnail:$authorAvatar}{description:
You have successfully pin your Sandwich recipes. You can get your **$get[amount] Sandwich** in **$multi[1;$get[amount]] minutes**. This costing you \`$numberSeparator[$get[price]; ]\` :coin: Coins.

:exclamation: **Make sure that your DM is open. We will notify you through DM if the Sandwich is ready to serve.**}}]

$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin];$get[price]]]

$setTimeout[maketime;$multi[1;$get[amount]]m;{
"amount":"$get[amount]",
"id":"$authorID"
}]

$onlyIf[$getGlobalUserVar[coin]>=$get[price];{
"embeds":"{newEmbed:{description:You don't have an enough coin to make **$get[amount] Sandwich** (\`$numberSeparator[$get[price]; ]\` :coin:).}{color:RED}{timestamp}}",
"options":{"interaction":true},
"ephemeral": true
}]

$onlyIf[$checkCondition[$get[amount]==0]==false;{
"embeds":"{newEmbed:{description:Please provide a valid amount!}{timestamp}{color:RED}}",
"options":{"interaction":true},
"ephemeral": true
}]

$let[price;$multi[$getGlobalUserVar[makeprice];$get[amount]]]
$let[amount;$interactionData[options.data[0].value]]

$onlyIf[$checkContains[$interactionData[options.data[0].value];.;+;×;÷;,-]==false;{
"embeds":"{newEmbed:{description:Please provide a valid amount!}{timestamp}{color:RED}}",
"options":{"interaction": true},
"ephemeral": true
}]

$onlyIf[$checkContains[$interactionData[options.data[0].value];0;1;2;3;4;5;6;7;8;9]==true;{
"embeds":"{newEmbed:{description:Please provide a valid amount!}{timestamp}{color:RED}}",
"options":{"interaction": true},
"ephemeral": true
}]

$onlyIf[$getGlobalUserVar[start]==true;{
"embeds":"{newEmbed:{color:RED}{timestamp}{description:You don't have a Sandwich profile yet.. You can create one by using \`/start\` command.}}",
"options":{"interaction":true},
"ephemeral": true}]
`},{
    name:"maketime",
    type:'timeout',
    code:`
$sendDm[{newEmbed:{title:Make}{timestamp}{color:2f3136}{thumbnail:$userAvatar[$timeoutData[id]]}{description:Your **$timeoutData[amount] Sandwich** is complete and ready to sell!}};$timeoutData[id]]

$setGlobalUserVar[sandwich;$sum[$getGlobalUserVar[sandwich;$timeoutData[id]];$timeoutData[amount]];$timeoutData[id]]
`}]