const { createHash } = require('crypto')
let handler = async function (m, { args, conn }) {
 // if (!isRegister) throw `Kamu tidak terdaftar di database bot, jangan aneh² deh mau gua ban?`
  if (!args[0]) throw 'Serial Number is empty\Mager writes SN, its better not to unreg '
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Incorrect Serial Number'
  user.registered = false
  const suk = `Unreg success`
  const cap = ` brother, why are you unreg? 😣`
  await m.reply(suk) 
  await conn.reply(m.sender, cap, m) 
}
handler.help = ['unregister <SN>']
handler.tags = ['xp']
handler.command = /^unreg(is(ter)?)?$/i

handler.register = true

module.exports = handler

