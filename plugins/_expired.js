let handler = m => m
handler.before = async function (m) {

    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            this.reply(m.chat, `time*@${this.user.jid.split('@')[0]}* to leave the group, if you want *Bot* to stay in this group, contact owner \n*@${owner[0]}* to the number below!`, null, {mentions: [this.user.jid, owner[0]+'@s.whatsapp.net']}).then(() => {
                this.sendContactS(m.chat, owner[0], this.getName(owner[0] + '@s.whatsapp.net')).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        global.db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

module.exports = handler
