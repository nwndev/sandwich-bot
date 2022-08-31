module.exports ={
    name:"start",
    type:'interaction',
    prototype:'slash',
    description:'Create your first Sandwich account and start your Sandwich business!',
    code:`
$interactionReply[;{newEmbed:{title:Start}{timestamp}{color:2f3136}{thumbnail:$authorAvatar}{footer:Don't forget to read the /rules!}{description:Successfully created your Sandwich profile! Now you can make your very own Sandwich business!}}]

$setGlobalUserVar[start;true]

$onlyIf[$getGlobalUserVar[start]==false;{
"embeds":"{newEmbed:{description:You already have a Sandwich profile!}{color:RED}{timestamp}}",
"options":{
"interaction": true
},
"ephemeral": true}]
`}