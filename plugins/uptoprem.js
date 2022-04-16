let handler = async (m, { conn,isOwner, isROwner, text }) => {
   conn.sendTB(m.chat, 'Want to Upgrade to Premium?\Please contact the owner number below!', wm, 'Chat Owner', `https://wa.me/${global.owner[0]}?text=Helo,WANT TO KNOW MORE ABOUT PREMIUM FEATURE`, null, null, null, null, null, null, null, m)
}

handler.help = ['uptoprem']
handler.tags = ['main']
handler.command = /^(up(to)?prem(ium)?)$/i

module.exports = handler
