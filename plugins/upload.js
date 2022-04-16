const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn, command, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Send the photo/video you want to change to the url with caption *${usedPrefix}${command}* or reply to the media`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif|webp)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`${conn.user.name}
  
${link}

${media.length} Byte(s)
${isTele ? '(No Expiration Date)' : '(Not known)'}`)
}
handler.help = ['tourl <media>']
handler.tags = ['tools']
handler.command = /^(upload|to(url|link))$/i

module.exports = handler
