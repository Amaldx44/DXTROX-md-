let handler  = async (m, { conn, text }) => {
    conn.reply(m.chat, 'Wait a moment, the process of getting file session.data.json', m)
    conn.sendMedia(m.chat, 'session.data.json', m, {fileName: 'session.data.json'})
    }
    handler.help = ['getsessi']
    handler.tags = ['host']
    handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i
    
    handler.rowner = true
    
    module.exports = handler
    