//made by SudoAnirudh
const fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://newsapi.org/v2/top-headlines?category=${args}&language=en&country=in&apiKey=ebb795355f3f47a7bd7685a53f7ca454`)
   if (!res.ok) throw await res.text()
  let json = await res.json()
for ({ urlToImage, title } of json.articles) {
conn.sendFile(m.chat, urlToImage, '', title)
 }
}
handler.help = ['news2 <topic>']
handler.tags = ['tools']
handler.command = /^(news2)$/i
handler.limit = true
module.exports = handler