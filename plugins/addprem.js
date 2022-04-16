let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    let lang = db.data.users[m.sender].language
    const json = JSON.parse(fs.readFileSync('./src/premium.json'))
    try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = m.quoted.sender ? m.quoted.sender : m.chat ? m.chat : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    let br = `How many days?\nexample: ${usedPrefix}${command} 30 @tag or reply`
    let brp = await conn.trans(lang, br).catch(async _ => await conn.trans2(lang, br))
    if (!args[0]) return m.reply(brp)
    let an = `Just a number, representing the day!`
    let ang = await conn.trans(lang, an).catch(async _ => await conn.trans2(lang, an))
    if (isNaN(args[0])) return m.reply(ang)
    let user = db.data.users[who]
    let sd = `${conn.getName(who)} already premium, left ${user.premiumTime} days`
    let sdh = await conn.trans(lang, sd).catch(async _ => await conn.trans2(lang, sd))
    if (json.includes(who.split`@`[0])) return m.reply(sdh)
    db.data.users[who].premium = true
    db.data.users[who].premiumTime = args[0]
    json.push(`${who.split`@`[0]}`)
    fs.writeFileSync('./src/premium.json', JSON.stringify(json))
    let su = `Success ${command} ${conn.getName(who)} During ${args[0]} days!`
    let suk = await conn.trans(lang, su).catch(async _ => await conn.trans2(lang, su))
    m.reply(suk)
    delete require.cache[require.resolve('../config')]
    require('../config')
    } catch {
      let notag = `@tag or reply user\nexample ${usedPrefix}${command} 30 @user`
      return m.reply(await conn.trans(lang, notag).catch(async _ => await conn.trans2(lang, notag)))
  }
}
handler.help = ['addprem <day> <@user>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i

handler.rowner = true

module.exports = handler
