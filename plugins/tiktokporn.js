let handler = async(m, { conn, usedPrefix, command }) => {
  await m.reply("Looking for porn videos for you, if the video doesn't appear please try again!")
  try {
  var a = await scrape.tiktokporn()
  var { title, source, thumb, desc, upload, like, dislike, favorite, views, tags, video } = a
  var sel = `🔞 *Tiktok Porn*
  
📌 *Title:* ${title}
📝 *Description:* ${desc}
🗒 *Tags:* ${tags}
👁 *Viewers:* ${views}
👍 *Likes:* ${like}
👎 *Dislikes:* ${dislike}
❣️ *Favourite:* ${favorite}
⌚ *Uploaded:* ${upload}
🛰 *Source:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${"https://tikporntok.com/"+source}`)).data}
🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${"https://tikporntok.com/"+video}`)).data}`
  } finally {
  if("https://tikporntok.com/"+video) conn.sendBV(m.chat, sel, wm, "https://tikporntok.com/"+video, [['Next', '.tiktokporn']], m, {jpegThumbnail: await(await fetch("https://tikporntok.com/"+thumb)).buffer()})
  else return conn.sendB(m.chat, `Sorry media ${command} not found please repeat!`, wm, null, [["Repeat",  ".tiktokporn"]], m) 
 }
}
handler.help = ['tiktokporn']
handler.tags = ['dewasa', 'update']
handler.command = /^((tik(tok)?)?porn(no)?)$/i

handler.private = true
handler.register = true
handler.limit = true

module.exports = handler
