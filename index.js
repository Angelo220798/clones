const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "OTgwNDkwOTk2MTU0NTExMzkw.GJHoZl.WoAd-lClw7KBvRyldjbF0kB2rZmpigtRSTqeZw",
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

