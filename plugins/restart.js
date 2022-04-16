let handler = async (m, { conn, isROwner, text }) => {
  let { spawn } = require('child_process');
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
  await m.reply('Restarting the Bot...\nPlease wait about 1 minute')
  process.send('reset')
} else throw '_Started......_'
}

handler.help = ['restart']
handler.tags = ['host']
handler.command = /^(res(tart)?)$/i

handler.rowner = true

module.exports = handler
