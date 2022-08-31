module.exports = {
    name:"rules",
    type:'interaction',
    prototype:'slash',
    description:'Very important text that every Sandwich player must know.',
    code:`
$interactionReply[;{newEmbed:{title:Rules}{timestamp}{color:2f3136}{thumbnail:$authorAvatar}{description:
By playing **$userTag[$clientID]**, you're agreed to the rules.
**• Do not cross-trade, cross-trading with Sandwich in-game currency is prohibited.**}}]
`}