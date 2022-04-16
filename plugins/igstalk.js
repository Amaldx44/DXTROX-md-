const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Example:\n${usedPrefix + command} ani._.rudh_s`

  let res = await fetch(`https://melcanz.com/igstalk?username=${args}&apikey=tkU6edVP`)
   if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result) throw json
  let { fullname, username, followers, follow, bio, thumbnail} = json.result
let instastalk = `🎯 *Name:* ${fullname}
👥 *Following:* ${follow}
👩‍👩‍👧‍👧 *Followers:* ${followers} 
📜 *Bio:* ${bio}
🔗 *Profile URL:* https://www.instagram.com/${username}
`

  await conn.sendFile(m.chat, thumbnail, '', instastalk, m)
}  
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler