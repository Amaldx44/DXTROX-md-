let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    let setting = global.db.data.settings

    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Invitation to join') || m.text.startsWith('Open this link')) && !m.isBaileys && !m.isGroup) {
    let teks = `${sa}${kki} Invite Group ${kka}
    
Contact Owner : @${global.owner[0]} To Join Group:)
`
    this.sendB(m.chat, teks, wm, null, [[`Owner`, `.owner`]], m, { mentions: this.parseMention(teks) })
    }

    // Eva
    let reg = /(Eva)/i
    let isEva = reg.exec(m.text)
    if (isEva && !m.fromMe) {
        m.reply(`Yes..I am Here..To Help You.. `)
    }

}
