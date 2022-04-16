let handler = m => m

handler.before = async function (m) {
	let who = m.sender
    let user = db.data.users[m.sender]
    let teks = `Hai ${m.name} your premium time is up, if you want to subscribe to premium again please contact: @${owner[0]+'@s.whatsapp.net'} thank you:)`
    if (m.chat.endsWith('broadcast')) return
    if (user.premiumTime != 0 && user.premium) {
        if (new Date() * 1 >= user.premiumTime) {
            await this.reply(m.chat, teks, m, {mentions: this.parseMention(teks)})
            const json = JSON.parse(fs.readFileSync('./src/premium.json'))
            let index = json.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
            if (json.includes(who)) throw false 
            json.splice(index, 1)
            fs.writeFileSync('./src/premium.json', JSON.stringify(json))
            user.premiumTime = 0
            user.premium = false
        }
    }
}

module.exports = handler
