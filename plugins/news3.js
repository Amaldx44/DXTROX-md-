//made by SudoAnirudh
const fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://newsapi.org/v2/top-headlines?category=${args}&language=en&country=in&apiKey=8178ee395b8a49bcbeceb583ac9f4005`)
   if (!res.ok) throw await res.text()
  let json = await res.json()
for ({ urlToImage, title } of json.articles) {
conn.sendFile(m.chat, urlToImage, '', title)
 }
}
handler.help = ['news3 <topic>']
handler.tags = ['tools']
handler.command = /^(news3)$/i
handler.limit = true
module.exports = handler