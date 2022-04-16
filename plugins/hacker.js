let handler = async(m, { conn, usedPrefix, command }) => {
  let hekerr = pickRandom(global.heker)
       conn.sendBL(m.chat, hekerr, wm, global.fla + `${command}`, [[`Hacker`, `.${command}`]], m)
      }
  handler.help = ['hacker']
  handler.tags = ['quotes']
  handler.command = /^(heker|hacker|hekel)$/i
  module.exports = handler
  
  function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())]
  }
  
  global.heker = [
    "Dear, it's written on my defacement page, When will you be my girlfriend?",
    "I'm willing to be a hot processor, as long as you are the heatsink that can cool me down at any time.",
    "You don't have to look for an xss gap, because when you click on my heart, a pop up appears with your name.",
    "Hopefully after I successfully login in your heart there will be no logout button, and my session will never expire.",
    "When I have to use the symlink bypass technique to open your heart folder which is open_basedir enabled.",
    "Me and You are like PHP and MySQL that are not connected yet.",
    "Don't just inject the heart, but you have to be able to patch it too. So that you don't cheat with other hackers.",
    "I'm a PHP programmer, but I won't php-in you anyway.",
    "Eneeeng. | Apache? | You're the most Unix woman I've ever known |",
    "Honey, is your capslock on? | No, why is it? | Because your name is written so big in my heart | zzz! smile",
    "I approached you just to redirect to your friend's heart.",
    "Domains can park, my love can't park in your heart?",
    "Can I be your girlfriend? | 400(Bad Request) | Can I kiss you? | 401(Authorization Required) | I'll take your shirt off ok | 402(Payment Required) sad",
    "You know there's no difference between you and PHP syntax, PHP syntax is hard to memorize, you're hard to forget",
    "What vocational school did you take? | Network Computer Engineering | So what can you do now? | Capture your heart through my computer | biggrin",
    "If love is an Array, then, my love for you is never empty if it is unset().",
    "SQLI (Structured Query Love Injection)",
    "I want you to rm -rf all ex's in your brain, I am the root of your heart",
    "Your smile is like a cooler that cools my heart when it's overclocked.",
    "You are my terminal, where I spend my time typing thousands of lines of love code for you smile",
    "I like hanging out in zone-h, because that's where I archive several websites with photos of you.",
    "My heart is like a vps only for you, not shared hosting that can stack various love domains.",
    "I'm not a VNC Server Without Authentication that you can monitor anytime.",
    "Don't dualboot my heart to you.",
    "My love I Ctrl + A then I Ctrl + C and I Ctrl + V right in the system folder of your heart.",
    "KDE lost in beauty, GNOME lost in simple terms, FluxBox lost in light, basically all DEs lose to you.",
    "Your love is like TeamViewer always controlling my heart",
    "our love will not be separated no matter how thick the firewall is...!!"
  ]
  