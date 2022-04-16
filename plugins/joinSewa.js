let handler = async (m, { conn, text, args, participants }) => {
    var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
    var delay = time => new Promise(res => setTimeout(res, time))
    var name = m.sender
    var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '9539102851@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    var [_, code] = text.match(linkRegex) || []
    if (!args[0]) throw `Wheree is the link 🔗 ?` 
    if (!args[1]) throw `where is the number ?`
    if (isNaN(args[1])) throw `Hanya angka`
    if (!code) throw `Invalid Link 🔗!`
    var anubot = owner[0]
    var delay = time => new Promise(res => setTimeout(res, time))
    m.reply(`Wait 3 seconds the bot will join`)
    await delay(3000)
    var res = await conn.groupAcceptInvite(code)
    var b = await conn.groupMetadata(res)
    var d = await b.participants.map(v => v.id)
    var e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
    var jumlahHari = 86400000 * args[1]
    var now = new Date() * 1
    if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
    else global.db.data.chats[res].expired = now + jumlahHari
    if (e.length) await conn.reply(res, `There's @$ {anubot} My Owner Here, I Just Want To Get Out, Afraid Of Getting Angry.

@${conn.user.jid.split(`@`)[0]} will come out in 5 seconds
Bye😑
Thanks dah inviting  @${m.sender.split('@')[0]}`, fkonn, {
    mentions: [m.sender, conn.user.jid, anubot + '@s.whatsapp.net']
     }).then(async () => {
     await delay(5000)
     }).then( async () => {
     await conn.reply(res, `jST fOR fUN🤭`, 0)
     })
    var ras = await conn.groupMetadata(res)
    var sel = ras.participants.map(v => v.id)
    if (!e.length) await m.reply(`Successful invite bot to group\n\n${await conn.getName(res)}\n\nBot will exit automatically after *${msToDate(global.db. data.chats[res].expired - now)}*`).then(async() => {
     await conn.reply(res, `Hello Everyone👋🏻

*${conn.user.name}* is a WhatsApp Bot built with Node.js, *${conn.user.name}* Just invited by @${m.sender.split('@')[0]}

To use *${conn.user.name}* please type
#menu
if *${conn.user.name}* does not respond, please repeat the command
#menu

@${conn.user.jid.split('@')[0]} will exit automatically after*${msToDate(global.db.data.chats[res].expired - now)}*`, fkonn, {
        mentions: [m.sender, conn.user.jid, sel]
         })
     })
}
handler.help = ['joins <chat.whatsapp.com> <day>']
handler.tags = ['owner']
handler.command = /^joins(ewa)?$/i

handler.owner = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}

