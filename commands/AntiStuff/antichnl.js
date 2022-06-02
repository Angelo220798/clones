module.exports = [{
  name: "antichnl on",
  code: `$title[1;Anti-Channel Enabled]
$setServerVar[antichnl;true;$guildID]`
},{
    name: "antichnl off",
  code: `$title[1;Anti-Channel Disabled]
$setServerVar[antichnl;false;$guildID]`
}]