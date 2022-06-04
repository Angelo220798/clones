const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "OTcxNDAxOTgwMjEzODgyOTAw.GhNvwU.vuccREktpB_6QeeJExNm60XwX_OLZLEeyPzO7g",
prefix: "!",
intents: ["GUILDS", "GUILD_MESSAGES"]
})

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 

bot.onMessage({
  guildOnly: true,
  respondToBots: false
});

bot.variables({
antisay: "false",
antichnl: "false",
  antirole: "false"
})

bot.status({
  text: "Only ArceusX",
  type: "WATCHING",
  time: 2,

  text: "$allMembersCount usuarios",
  type: "WATCHING",
  time: 2,

})

bot.onChannelCreate()
bot.channelCreateCommand({
code:`$deleteChannel[$channelID]
$onlyIf[$getServerVar[antichnl]==true]`})

bot.onRoleCreate()
bot.roleCreateCommand({
code:`$deleteRole[$roleid[;]]
$onlyIf[$getServerVar[antirole]==true]`})
