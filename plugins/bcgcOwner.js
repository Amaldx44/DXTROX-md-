let handler = async (m, { conn, isROwner, text }) => {
  const delay = time => new Promise(res => setTimeout(res, time))
  let getGroups = await conn.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
  if(!pesan) throw 'the text ?'
  m.reply(`Send Broadcast To${anu.length} Chat, Finish Time ${anu.length * 0.5 } seconds`)
  for (let i of anu) {
  await delay(500)
    conn.sendTB(i, `${pesan}`, wm, 'Chat Owner', 'https://wa.me/'+global.owner[0]+null).catch(_ => _)
    }
  m.reply(`Successfully Sending Broadcast To${anu.length} Group`)
}
handler.help = ['bcgcowner <teks>']
handler.tags = ['owner']
handler.command = /^(broadcastgc|bcgc)o(wne?r?)?$/i

handler.owner = true

module.exports = handler
