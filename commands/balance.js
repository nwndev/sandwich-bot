module.exports = {
    name:"balance",
    type:'interaction',
    prototype:'slash',
    description:'Check your current coins.',
    code:`
$interactionReply[;{newEmbed:{title:$username's Coin}{timestamp}{color:2f3136}{thumbnail:$authorAvatar}{description:
**• Wallet:** \`$numberSeparator[$getGlobalUserVar[coin]; ]\` 🪙
**• Bank:** \`$numberSeparator[$getGlobalUserVar[bank]; ]\` 🪙}}]

$onlyIf[$getGlobalUserVar[start]==true;{
"embeds":"{newEmbed:{color:RED}{timestamp}{description:You don't have a Sandwich profile yet.. You can create one by using \`/start\` command.}}",
"options":{"interaction":true},
"ephemeral": true}]
`}