module.exports = [{
  name: "antirole on",
  code: `$title[1;Anti-Role Activado]
$setServerVar[antirole;true;$guildID]
$onlyForIDs[$ownerID;Solo el creador del server puedo usar este comando]`
},{
    name: "antirole off",
  code: `$title[1;Anti-Role Desactivado]
$setServerVar[antirole;false;$guildID]
$onlyForIDs[$ownerID;Solo el creador del server puedo usar este comando]`
}]
