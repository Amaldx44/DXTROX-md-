//const { MessageType } = require("@adiwajshing/baileys")
let fetch = require('node-fetch')
async function handler(m, { command, usedPrefix }) {
    //if (!global.db.data.settings.anon) throw `Fitur ini tidak aktif`
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        //case 'next':
        //case 'skip':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) {
                await this.sendB(m.chat, 'You are not in anonymous chat', 'Want to find a cheating partner?', null, [['Start', `${usedPrefix}start`]], m)
                throw false
            }
            this.sendB(m.chat, 'You left the anonymous chat room', 'Want to play anonymous again?', null, [['Ya', `${usedPrefix}start`], ['No', `${usedPrefix}say Ok thank you for using Anonymous Chat Bot, if you want to play again you can click the *Yes* button above!`]], m)
            let other = room.other(m.sender)
            if (other) await this.sendB(other, '_Partner left chat_', 'Want to find another chat partner?', null, [['Start Again', `${usedPrefix}start`]], m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                await this.sendB(m.chat, '_You are still in anonymous chat_', 'Want to go out?', null, [['Leave', `${usedPrefix}leave`]], m)
                throw false
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendB(room.a, '_Partners found!_', 'Please chat🤗', null, [['Halo', '👋']], m)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendB(room.b, '_Partners found!_', 'Please chat🤗', null, [['Hai', '👋']], m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendB(m.chat, '_Waiting for partner..._', 'If you Are tired of waiting, click below to exit!', null, [['Leave', `${usedPrefix}leave`]], m)
            }
            break
        }
    }
}
handler.help = ['start', 'leave']
handler.tags = ['anonymous']
handler.command = ['start', 'leave']//, 'next', 'skip']

handler.private = true

module.exports = handler
