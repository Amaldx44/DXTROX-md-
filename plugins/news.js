//made by SudoAnirudh
const fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://newsapi.org/v2/top-headlines?category=${args}&language=en&country=in&apiKey=fdc751ee3bc14fd4bcb9cf4c130cfc4b`)
   if (!res.ok) throw await res.text()
  let json = await res.json()
for ({ urlToImage, title } of json.articles) {
conn.sendFile(m.chat, urlToImage, '', title)
 }
}
handler.help = ['news <topic>']
handler.tags = ['tools']
handler.command = /^(news)$/i
handler.limit = true
module.exports = handler