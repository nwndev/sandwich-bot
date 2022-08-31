module.exports ={
    name:"business",
    type:'interaction',
    prototype:'slash',
    description:'Check your current business statistics.',
    code:`
$interactionReply[;{newEmbed:{title:$username's Business}{color:2f3136}{timestamp}{thumbnail:$authorAvatar}{description:
Business Level: $getGlobalUserVar[blvl]
XP: \`($getGlobalUserVar[xp]/$getGlobalUserVar[xpreq])\`
Sandwich: $getGlobalUserVar[sandwich] 🥪

Popularity: $getGlobalUserVar[popular] :sunglasses:
Reviews: $getGlobalUserVar[star]/10 :star:
Tip: \`$getGlobalUserVar[tip]\` :coin:

Sandwich Sell Prices: \`$getGlobalUserVar[prices]\` :coin:
Make Cost: \`$getGlobaluserVar[makeprice]\` :coin: per Sandwich.}};{actionRow:{button:Claim Tip:secondary:tip_$authorID:no:}}]

$onlyIf[$getGlobalUserVar[start]==true;{
"embeds":"{newEmbed:{color:RED}{timestamp}{description:You don't have a Sandwich profile yet.. You can create one by using \`/start\` command.}}",
"options":{"interaction":true},
"ephemeral": true}]
`}