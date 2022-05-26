let handler = async (m, {conn}) => {
     conn.reply(m.chat, `This bot uses a github script\n\nhttps://ippo thara nokii erunoo(PUBLIC)\n\nGive Some Stars..`, m) 
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


