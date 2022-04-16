const xpperlimit = 350
let handler = async (m, { conn, usedPrefix, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (isNaN(count)) throw `only numbers!\n\nexample: ${usedPrefix}buy 5`
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.sendB(m.chat, `You buy limit with price\n*${xpperlimit * count} XP* and get*${count} Limit.*`, wm, 0, [[`Limit`,`${usedPrefix}limit`]], m)
  } else conn.sendB(m.chat, `XP is not enough to buy*${count} Limit.*`, wm, 0, [[`Claim`, `${usedPrefix}claim`]], m)
}
handler.help = ['buy <number>', 'buyall']
handler.tags = ['xp']
handler.command = /^buy([0-9]+)|buy|buyall$/i

module.exports = handler
