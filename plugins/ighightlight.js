let fetch = require('node-fetch')
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `uhm.. Give Me A Username?\n\nExample:\n${usedPrefix + command} ani._.rudh_s`
  let res = await fetch(global.API('xteam', '/dl/ighighlight', {
    nama: args[0]
  }, 'FuzBot1'))
  if (!res.ok) throw error
  let json = await res.json()
  if (json.result.error) throw json.result.message
  let { username, items } = json.result
  for (let { thumbnail, isVideo, url } of items) {
    thumbnail = await (await fetch(thumbnail)).buffer()
    conn.sendFile(m.chat, url, 'ig' + (isVideo ? '.mp4' : '.jpg'), '', m, 0, {
      thumbnail
    })
  }
}
handler.help = ['ighighlight'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(ighighlight?)$/i

module.exports = handler
