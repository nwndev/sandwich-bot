module.exports ={
    name:"help",
    type:'interaction',
    prototype:'slash',
    description:'Learn more about Sandwich 🥪!',
    code:`
$interactionReply[$if[$getGlobalUserVar[start]==true;;Looks like you are new here! Use \`/start\` to start out your very own sandwich business!];{newEmbed:
{title:Help}{timestamp}{thumbnail:$userAvatar[$clientID]}{color:2f3136}{description:
Heya! Welcome to **$username[$clientID]** help panel! Here is all my available commands:
**• /help** - \`This!\`
**• /start** - \`Create your first Sandwich account and start your Sandwich business!\`
**• /rules** - \`Very important text that every Sandwich player must know.\`
**• /daily** - \`Redeem your daily coins.\`
**• /balance** - \`Check your current coins.\`
**• /deposit** - \`Deposit your coins to the bank.\`
**• /withdraw** - \`Withdraw your coins from the bank.\`
**• /make** - \`Make your Sandwich.\`
**• /business** - \`Check your current business statistics.\`
**• /work** - \`Sell your Sandwich and earn coins.\`
**• /shop** - \`Display the shop menu.\`

What is **$username[$clientID]**?
> Basically, **Sandwich** is a simple economy Discord bot with Sandwich theme, yum!}}]
`}