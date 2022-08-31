```
$onlyIf[$getGlobalUserVar[start]==true;{
"embeds":"{newEmbed:{color:RED}{timestamp}{description:You don't have a Sandwich profile yet.. You can create one by using \`/start\` command.}}",
"options":{"interaction":true},
"ephemeral": true}]
```

```
$onlyIf[$get[author]==$interactionData[author.id];{
"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}{timestamp}}",
"ephemeral":true,
"options":{"interaction":true}}]

$onlyIf[$get[customId]==wow;] 
$let[author;$splitText[2]]
$let[customId;$splitText[1]]
$textSplit[$interactionData[customId];_]
```