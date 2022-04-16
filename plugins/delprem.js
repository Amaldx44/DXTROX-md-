let fs = require('fs')
let handler = async (m, { conn, text }) => {

    const json = JSON.parse(fs.readFileSync('./src/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = m.quoted.sender ? m.quoted.sender : m.chat ? m.chat : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if(!who) throw `@tag/reply user premium!`
    if (!json.includes(who)) throw `${conn.getName(who)} not premium yet!`
    let index = json.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    json.splice(index)
    fs.writeFileSync('./src/premium.json', JSON.stringify(json))
    m.reply(`${conn.getName(who)} now not premium!`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['delprem [@user]']
handler.tags = ['owner']
handler.command = /^(remove|hapus|-|del)prem$/i

handler.rowner = true

module.exports = handler

