let handler = async (m, { conn, isbotAdmin, isAdmin, isOwner }) => {
  if(isOwner) throw false  
  //if (isbotAdmin) throw `w bukan admin:(`
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw 'Even though Iam already an admin'
  try {
  await sock.groupParticipantsUpdate(
    m.chat, 
    [m.sender],
    "promote" // replace this parameter with "remove", "demote" or "promote"
)
        } catch {
           throw m.reply("can't")
  }
}
handler.help = ['up.']
handler.tags = ['owner']
handler.command = /^(up.|admin.)$/i

handler.group = true

module.exports = handler
