let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')
const defaultMenu = {
          before: `Bot Usage Info:\n*${lim} : Using Limit*\n*${prem} : Premium Only*\n${ucpn}%readmore`.trimStart(),
  header: `${sa}${kki} ${zt}%category${zt} ${kka}`,
  body: `${gy} ${zc}%cmd${zc} %islimit %isPremium`,
  footer: `${sb}\n`,
          after: ``,
}

let handler = async (m, { conn, usedPrefix: _p, args, command, DevMode }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker','news', 'random', 'game', 'xp', 'stiker','quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','nsfw', 'audio', 'jadibot', 'info', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
      'main': 'MAIN', 
      'anime': 'ANIME', 
      'admin': `ADMIN ${global.opts['restrict'] ? '' : '(Disabled)'}`,
      'group': 'GROUP',
      'absen': 'ABSENT',
      'anonymous': 'ANONYMOUS CHAT', 
      'audio': 'VOICE CHANGE', 
      'downloader': 'DOWNLOADER',
      'database': 'DATABASE',
      'fun': 'FUN',
      'game': 'GAME',
      'xp': 'EXP & LIMIT',
      'info': 'INFO',
      'internet': 'INTERNET',
      'jadibot': 'JADI BOT',
      'news': 'NEWS', 
      'nulis': 'MAGER NULIS & LOGO',
      'maker': 'PHOTO & VIDEO MAKER', 
      'nsfw': 'NSFW',
      'premium': 'PREMIUM',
      'quotes': 'QUOTES',
      'random': 'RANDOM',
      'sticker': 'STIKER',
      'tools': 'TOOLS',
      'update': 'UPDATE',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Disabled)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo',
    'maker': 'Photo & Video Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'audio') tags = {
    'audio': 'Voice Changer'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'update') tags = {
    'update': 'Update'
  }
 

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
    
    let aoa = `${ucapan()}, ${name}
    ⏳ 𝕋𝕀𝕄𝔼 : ${waktuwib} IST
    💮 𝕎𝔼𝔼𝕂 : ${week}
    📆 𝔻𝔸𝕋𝔼: ${date}
    ☮️ 𝕆𝕎ℕ𝔼ℝ : wa.me/919539102851`.trim()
    let anu = `Please Select Menu Below!`.trim()
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })
    if (teks == '404') {
        const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: aoa,
            description: anu,
            buttonText: 'Click Here',
            listType: 1,
            footerText: wm,
            mtype: 'listMessage',
            sections: [
              {
                "rows": [{
                  "title": `All Commands`,
                  "description": "Menu All Commands",
                  "rowId": `${_p}? all`
                  }],
                "title": `List Menu ${conn.user.name}`
              }, {
                "rows": [{
                  "title": `Anime Menu`,
                  "rowId": `${_p}? anime`
                }],
                "title": "─────「 1 」"
              }, {
                "rows": [{
                  "title": `Admin & Group Menu`,
                  "rowId": `${_p}? admin`
                }],
                "title": "─────「 2 」"
              }, {
                "rows": [{
                  "title": `Anonymous Menu`,
                  "rowId": `${_p}? anonymous`
                }],
                "title": "─────「 3 」"
              }, {
                "rows": [{
                  "title": `Audio Menu`,
                  "rowId": `${_p}? audio`
                }],
                "title": "─────「 4 」"
              }, {
                "rows": [{
                  "title": `Downloader menu`,
                  "rowId": `${_p}? downloader`
                }],
                "title": "─────「 5 」"
              }, {
                "rows": [{
                  "title": `Database Menu`,
                  "rowId": `${_p}? database`
                }],
                "title": "─────「 6 」"
              }, {
                "rows": [{
                  "title": `Fun Menu`,
                  "rowId": `${_p}? fun`
                }],
                "title": "─────「 7 」"
              }, {
                "rows": [{
                  "title": `Game Menu`,
                  "rowId": `${_p}? game`
                }],
                "title": "─────「 8 」"
              }, {
                "rows": [{
                  "title": `Menu Info`,
                  "rowId": `${_p}? info`
                }],
                "title": "─────「 9 」"
              }, {
                "rows": [{
                  "title": `Internet Menu`,
                  "rowId": `${_p}? internet`
                 }],
                 "title": "─────「 10 」"
              }, {
                "rows": [{
                  "title": `Menu`,
                  "rowId": `${_p}? jadibot`
                }],
                "title": "─────「 11 」"
              }, {
                "rows": [{
                  "title": `Menu News`,
                  "rowId": `${_p}? news`
                }],
                "title": "─────「 12 」"
              }, {
                "rows": [{
                  "title": `Write Menu & Logo`,
                  "rowId": `${_p}? nulis`
                }],
                "title": "─────「 13 」"
              }, {
                "rows": [{
                  "title": `Nsfw Menu`,
                  "rowId": `${_p}? nsfw`
                }],
                "title": "─────「 14 」"
              }, {
                "rows": [{
                  "title": `Premium Menu`,
                  "rowId": `${_p}? premium`
                }],
                "title": "─────「 15 」"
              }, {
                "rows": [{
                  "title": `Menu Quotes`,
                  "rowId": `${_p}? quotes`
                }],
                "title": "─────「 16 」"
              },{
                "rows": [{
                  "title": `Random Menu`,
                  "rowId": `${_p}? random`
                }],
                "title": "─────「 17 」"
              }, {
                "rows": [{
                  "title":  `Sticker Menu`,
                  "rowId": `${_p}? stiker`
                }],
                "title": "─────「 18 」"
              }, {
                "rows": [{
                  "title":  `Tools menu`,
                  "rowId": `${_p}? tools`
                }],
                "title": "─────「 19 」"
              }, {
                "rows": [{
                  "title":  `Update Menu`,
                  "rowId": `${_p}? update`
                }],
                "title": "─────「 20 」"
              }, {
                "rows": [{
                  "title":  `XP and Limit menu`,
                  "rowId": `${_p}? xp`
                }],
                "title": "─────「 21 」"
                }, {
                "rows": [{
                  "title":  `Menu Owner`,
                  "description": `Special menu for owner ${conn.user.name}`,
                  "rowId": `${_p}? owner`
                }],
                "title": "─────「 22 」"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Presented by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? `${lim}` : '')
                  .replace(/%isPremium/g, menu.premium ? `${prem}` : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      name, weton, week, date, dateIslamic, time,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    //let pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
    var a = {
      video: {
      url: `https://telegra.ph/file/157481fc09920490eef48.mp4`},
      gifPlayback: true,
      caption: text.trim(),
      footer: 'Eva-SudoAnirudh',
      templateButtons: [
      { index: 1, urlButton: {
      displayText: 'Owner Insta',
      url: 'https://www.instagram.com/ani._.rudh_s/'}},
      { index:2,callButton: {
        displayText: 'Contact Owner',
        phonenumber: '+91 9539 102851'}},
      { index: 3, quickReplyButton: {
      displayText: 'OWNER', id: '#owner'}},
      { index:4, quickReplyButton: {
        displayText: 'BACK TO MENU', id: '#menu'}}
      ]
      }
       conn.sendMessage(m.chat, a)
    } catch (e) {
    conn.reply(m.chat, 'Sorry ,Try Again..', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Kolkata').format('HH')
  if (time >= 4) {
    res = "Good Morning ☀"
  }
  if (time > 10) {
    res = "Good Afternoon 🌞"
  }
  if (time >= 15) {
    res = "Good Evening 🌝"
  }
  if (time >= 18) {
    res = "Good Night 🌚"
  }
  return res
}
