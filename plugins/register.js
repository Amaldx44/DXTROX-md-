const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `You are already registered\nWant to re-register? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Example:\n*${usedPrefix + command} Eva.18*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Name cannot be empty (Alphanumeric)'
  if (!age) throw 'Age cant be empty(Number)'
  age = parseInt(age)
  if (age > 50) throw 'Age too old'
  if (age < 5) throw 'Hello Baby..'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let sn = createHash('md5').update(m.sender).digest('hex')
  conn.sendBL(m.chat, `
*Successful Registration*

${sa}${kki} *Info User* ${kka}
${gy} ${zc}Name${zc}   : ${name}
${gy} ${zc}Age${zc}   : ${age} yrs
${gy} ${zc}Status${zc} : Registered √
${gy} ${zc}Present${zc} : ${prems.includes(m.sender.split`@`[0]) ? '✅ Please chat the owner to claim the prize' : '❌ Not a Premium User'}
${sb}
`.trim(), wm, pp, [[`Profile`,`${usedPrefix}profile`], [`Cek SN`, `.sn`]], m) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(is(ter)?)?)$/i

module.exports = handler
