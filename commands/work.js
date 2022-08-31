module.exports ={
    name:"work",
    type:'interaction',
    prototype:'slash',
    $if:"v4",
    description:"Sell your Sandwich and earn coins.",
    code:`
$if[$randomText[tip;normal;popular;reviews;tip;normal;tip;normal;tip;normal]==normal]
$setGlobalUserVar[sandwich;$sub[$getGlobalUserVar[sandwich];$random[1;$getGlobalUserVar[sandwich]]]]

$interactionReply[;{newEmbed:{title:Serve}{timestamp}{thumbnail:$authorAvatar}{description:You have worked and sold your **$random[1;$getGlobalUserVar[sandwich]] Sandwich**. You have got \`$numberSeparator[$multi[$getGlobalUserVar[prices];$random[1;$getGlobalUserVar[sandwich]]]; ]\` :coin: Coin.}}]

$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin];$multi[$getGlobalUserVar[prices];$random[1;$getGlobalUserVar[sandwich]]]]]



$onlyIf[$getGlobalUserVar[sandwich]>=2;{
"embeds":"{newEmbed:{description:You don't have enough Sandwich, you need at least 2 Sandwich to sell.}{color:RED}{timestamp}}",
"options":{
"interaction":true
},
"ephemeral": true
}]
`}