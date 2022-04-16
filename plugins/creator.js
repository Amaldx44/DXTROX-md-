let handler = async(m, { conn }) => {
  try {
  const sentMsg = await conn.sendContactArrayS(m.chat, [
    [`${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, `👑 Developer Bot `, `🚫 Don't call me 😡`, `anirudhsudheer@gmail.com`, `IN INDIA`, `🚀 `,]
  ], m) 
  await conn.reply(m.chat, `Halo @${m.sender.split(`@`)[0]} That's my developer number😖`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, m) 
  await conn.reply(m.chat, `Halo@${m.sender.split(`@`)[0]} That's my developer number😖`, sentMsg, {mentions: [m.sender]})
  }
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator|dev)$/i

module.exports = handler
