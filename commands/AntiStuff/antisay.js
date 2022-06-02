module.exports = [{
  name: "antisay off",
  code: `$title[1;Anti-Say System Disable]
$setServerVar[antisay;false;$guildID]`
},{
  name: "antisay on",
  code: `$title[1;Anti-Say System Enabled]
$setServerVar[antisay;true;$guildID]`
},{
  name: "$alwaysExecute", 
code: `$title[1;message deleted]
$deleteCommand
$onlyIf[$checkContains[$toLowercase[$message];@everyone;@here]==true;]
$onlyIf[$getServerVar[antisay]==true]`
}]