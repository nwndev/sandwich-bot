# Sandwich 🥪
An advanced economy Discord bot using the aoi.js library. Grow your own business, make a sandwich then sell it for some coin!
## Information
- Place your bot's token at `config.json`.
- Discord's message content intent will enforced at **August 31, 2022**, because that we will only using the Discord Slash commands.
- Want to self host the bot? I recommend that if you want to self host the bot, use Replit for testing purposes. If you want to make this bot even more amazing and grow it, please give a credit to me.
- Please note that this bot is not 100% complete, you can contribute to this repo or you can download as zip this bot's file and edit it yourself.
## Node modules
- We will use `aoi.js` since it easy to use.
- Install `express` if you are using Replit to host this bot.
- And `discord.js` if needed.
### Recommended node modules
- nodemon `npm install -g nodemon`, this module will allow you to automatically restart your server when there are files that have changed. You can check the npm pages [here](https://www.npmjs.com/package/nodemon)
## Clone this repo
```git
git clone https://github.com/nwndev/sandwich-bot.git
```
# Node modules installation
Require the latest version of Node.js to install these modules.
```terminal
npm init -y

npm i discord.js@latest
npm i aoi.js@latest
npm i express@latest
```
# Creating the Slash Command
You can execute these code to register the slash command, I recommend you that you can execute the code in eval command for more easier.
```js
$createApplicationCommand[guild;COMMAND_NAME;COMMAND_DESCRIPTION;true;slash]
```
Change the `guild` parameter to `global` if you want the slash command show globally. Or you can change it to your testing server id for testing purposes.
