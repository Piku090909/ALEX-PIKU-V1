const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const os = require('os')

const fs = require('fs')

const fsx = require('fs-extra')

const path = require('path')

const util = require('util')

const chalk = require('chalk')

const mver = require('./package.json').version

const moment = require('moment-timezone')

const speed = require('performance-now')

const ms = toMs = require('ms')

const axios = require('axios')

const fetch = require('node-fetch')

const { exec, spawn, execSync } = require("child_process")

const { performance } = require('perf_hooks')

const more = String.fromCharCode(8206)

const readmore = more.repeat(4001)

const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./Gallery/lib/uploader')

const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./Gallery/lib/converter')

const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./Gallery/lib/myfunc')

let afk = require("./Gallery/lib/afk");



const { fetchBuffer, buffergif } = require("./Gallery/lib/myfunc2")



/////log

global.modnumber = '918536881026' 

//Gallery/database

let ntilinkall =JSON.parse(fs.readFileSync('./Gallery/database/antilink.json'));

const isnsfw = JSON.parse(fs.readFileSync('./Gallery/database/nsfw.json'));



let _afk = JSON.parse(fs.readFileSync('./Gallery/database/afk-user.json'))

let hit = JSON.parse(fs.readFileSync('./Gallery/database/total-hit-user.json'))



//time

const replay = (teks) => {

            Maria.sendMessage(m.chat, { text: teks}, { quoted: m})

        }

const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')

        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')

        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  

         if(time2 < "23:59:00"){

var Ayushytimewisher = `Good Night 🌌`

 }

 if(time2 < "19:00:00"){

var Ayushytimewisher = `Good Evening 🌃`

 }

 if(time2 < "18:00:00"){

var Ayushytimewisher = `Good Evening 🌃`

 }

 if(time2 < "15:00:00"){

var Ayushytimewisher = `Good Afternoon 🌅`

 }

 if(time2 < "11:00:00"){

var Ayushytimewisher = `Good Morning 🌄`

 }

 if(time2 < "05:00:00"){

var Ayushytimewisher = `Good Morning 🌄`

 } 

module.exports = Maria = async (Maria, m, msg, chatUpdate, store) => {

    try {

        const {

            type,

            quotedMsg,

            mentioned,

            now,

            fromMe

        } = m

        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''

        var budy = (typeof m.text == 'string' ? m.text : '')

        

        const prefix = global.prefa

        const isCmd = body.startsWith(prefix)

        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()

        const args = body.trim().split(/ +/).slice(1)

        const full_args = body.replace(command, '').slice(1).trim()

        const pushname = m.pushName || "No Name"

        const botNumber = await Maria.decodeJid(Maria.user.id)

        const itsMe = m.sender == botNumber ? true : false

        

        const sender = m.sender

        const text = q = args.join(" ")

        const from = m.key.remoteJid

        const fatkuns = (m.quoted || m)

        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m

        const mime = (quoted.msg || quoted).mimetype || ''

        const qmsg = (quoted.msg || quoted)

        const isMedia = /image|video|sticker|audio/.test(mime)

        const isImage = (type == 'imageMessage')

        const isVideo = (type == 'videoMessage')

        

        const isAudio = (type == 'audioMessage')

        const isText = (type == 'textMessage')

        const isSticker = (type == 'stickerMessage')

        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')

        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

        const sticker = []

        const isAfkOn = afk.checkAfkUser(m.sender, _afk)

        const isGroup = m.key.remoteJid.endsWith('@g.us')

        const groupMetadata = m.isGroup ? await Maria.groupMetadata(m.chat).catch(e => {}) : ''

        const groupName = m.isGroup ? groupMetadata.subject : ''

        const participants = m.isGroup ? await groupMetadata.participants : ''

        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''

        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false

        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        const groupOwner = m.isGroup ? groupMetadata.owner : ''

        const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []

        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''

        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

        const isCreator = [botNumber,...global.ownernumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

      const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false;

      const isNsfw = m.isGroup ? isnsfw.includes(from) : false;

      const AntiNsfw = m.isGroup ? isnsfw.includes(from) : false

 /////

const pickRandom = (arr) => {

return arr[Math.floor(Math.random() * arr.length)]

}



	//random

	    // Function to filter JPG and PNG files from a directory

const getRandomImage = (directory) => {

  const files = fs.readdirSync(directory)

    .filter(file => {

      const filePath = path.join(directory, file);

      return fs.statSync(filePath).isFile() && (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'));

    });



  if (files.length === 0) return null;



  const randomFile = files[Math.floor(Math.random() * files.length)];

  const randomFilePath = path.join(directory, randomFile);



  if (fs.existsSync(randomFilePath)) {

    return randomFilePath;

  } else {

    console.log(`Selected file ${randomFile} does not exist.`);

    return null;

  }

};



const imageDirectory = './Gallery/Theme-logo';

  const randomImage = getRandomImage(imageDirectory);



//group chat msg by Ayush

const reply = (teks) => {

Maria.sendMessage(m.chat,

{ text: teks,

contextInfo:{

mentionedJid:[sender],

forwardingScore: 9999999,

isForwarded: true, 

"externalAdReply": {

"showAdAttribution": true,

"containsAutoReply": true,

"title": ` ${global.botname}`,

"body": `${ownername}`,

"previewType": "PHOTO",

"thumbnailUrl": ``,

"thumbnail": fs.readFileSync(`./Gallery/thumb.jpg`),

"sourceUrl": `${link}`}}},

{ quoted: m})

}



async function loading () {

var Ayushlod = [

"《 ▒▒▒▒▒▒▒▒▒▒▒》10%",

"《 ████▒▒▒▒▒▒▒▒》30%",

"《 ███████▒▒▒▒▒》50%",

"《 ██████████▒▒》80%",

"《 ████████████》100%",

"Done ✅️"

]

let { key } = await Maria.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})



for (let i = 0; i < Ayushlod.length; i++) {

await Maria.sendMessage(from, {text: Ayushlod[i], edit: key });

}

}



async function Telesticker(url) {

    return new Promise(async (resolve, reject) => {

        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enter your url telegram sticker link')

        packName = url.replace("https://t.me/addstickers/", "")

        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})

        const mariayresult = []

        for (let i = 0; i < data.data.result.stickers.length; i++) {

            fileId = data.data.result.stickers[i].thumb.file_id

            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)

            result = {

            status: 200,

            author: '𓆩‎✘À𝖑è𝖝 𝕻ì𝖐ù✘𓆪',

            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path

            }

            mariayresult.push(result)

        }

    resolve(mariayresult)

    })

}



        if (!Maria.public) {

            if (!isCreator && !m.key.fromMe) return

        }

        if (autoread) {

            Maria.readMessages([m.key])

        }

        if (global.autoTyping) {



        Maria.sendPresenceUpdate('composing', from)





        }



        if (global.autoRecording) {



        Maria.sendPresenceUpdate('recording', from)



        }



        

        //bot number online status, available=online, unavailable=offline

        Maria.sendPresenceUpdate('unavailable', from)

        

        if (global.autorecordtype) {

        let Ayushrecordin = ['recording','composing']



        let Ayushrecordinfinal = Ayushrecordin[Math.floor(Math.random() * Ayushrecordin.length)]



        Maria.sendPresenceUpdate(Ayushrecordinfinal, from)



        }

        

        if (autobio) {

            Maria.updateProfileStatus(`Hey, i am 𓆩‎✘À𝖑è𝖝 𝕻ì𝖐ù✘𓆪 multi-device whatsapp bot 🚀 ${runtime(process.uptime())} `).catch(_ => _)

        }

        if (m.sender.startsWith('212') && global.anti212 === true) {

            return Maria.updateBlockStatus(m.sender, 'block')

        }





	

   

	

	//chat counter (console log)

        if (m.message && m.isGroup) {

            

			console.log(chalk.redBright(`\n\nGroup Chat:`))

            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))

        } else {

            

			console.log(chalk.redBright(`\n\nPrivate Chat:`))

            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))

        }



        if (command) {

            const cmdadd = () => {

                hit[0].hit_cmd += 1

                fs.writeFileSync('./Gallery/database/total-hit-user.json', JSON.stringify(hit))

            }

            cmdadd()

            const totalhit = JSON.parse(fs.readFileSync('./Gallery/database/total-hit-user.json'))[0].hit_cmd

        }

        const photooxy = require('./Gallery/lib/photooxy')

        

        



        if (m.isGroup && !m.key.fromMe) {

            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]

            for (let ment of mentionUser) {

                if (afk.checkAfkUser(ment, _afk)) {

                    let getId2 = afk.getAfkId(ment, _afk)

                    let getReason2 = afk.getAfkReason(getId2, _afk)

                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)

                    let heheh2 = ms(getTimee)

                    reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)

                }

            }

            if (afk.checkAfkUser(m.sender, _afk)) {

                let getId = afk.getAfkId(m.sender, _afk)

                let getReason = afk.getAfkReason(getId, _afk)

                let getTime = Date.now() - afk.getAfkTime(getId, _afk)

                let heheh = ms(getTime)

                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)

                fs.writeFileSync('./Gallery/database/afk-user.json', JSON.stringify(_afk))

                Maria.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)

            }

        }

        

/*------ Not allowing  212 and 210 country codes to use bot in DM ---------- */



  const messSenderMain = m.sender;

  const messForm = m.chat;

  if ( !m.isGroup ){

    if (messForm.startsWith("212") || messForm.startsWith("210") ){

      return;

    }

  }

        



 ///antilink 

 if (AntiLinkAll)

   if (budy.includes("https://")){

if (!isBotAdmins) return

bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nyou are a group admin thats why i wont kick you, but remember from next time`

if (isAdmins) return reply(bvl)

if (m.key.fromMe) return reply(bvl)

if (isCreator) return reply(bvl)

        await Maria.sendMessage(m.chat,

			    {

			        delete: {

			            remoteJid: m.chat,

			            fromMe: false,

			            id: m.key.id,

			            participant: m.key.participant

			        }

			    })

			Maria.groupParticipantsUpdate(m.chat, [m.sender], 'remove')

Maria.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})

} else {

}

	    //total features by xeon sir

const mariafeature = () =>{

            var mytext = fs.readFileSync("./Heart.js").toString()

            var numUpper = (mytext.match(/case '/g) || []).length

            return numUpper

}

  

            switch (command) {

            case 'antilink': {

                            if (!m.isGroup) return reply(mess.group)

                if (!isAdmins && !isCreator) return reply(mess.admin)

                if (!isBotAdmins) return reply(mess.botAdmin)

if (args[0] === "on") {

if (AntiLinkAll) return reply('Already activated')

ntilinkall.push(from)

fs.writeFileSync('./Gallery/database/antilink.json', JSON.stringify(ntilinkall))

reply('Success in turning on all antilink in this group')

var groupe = await Maria.groupMetadata(from)

var members = groupe['participants']

var mems = []

members.map(async adm => {

mems.push(adm.id.replace('c.us', 's.whatsapp.net'))

})

Maria.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})

} else if (args[0] === "off") {

if (!AntiLinkAll) return reply('Already deactivated')

let off = ntilinkall.indexOf(from)

ntilinkall.splice(off, 1)

fs.writeFileSync('./Gallery/database/antilinkall.json', JSON.stringify(ntilinkall))

reply('Success in turning off all antilink in this group')

} else {

  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)

  }

  }

  break

  

  case 'setppbot': case 'setbotpp': {

if (!isCreator) return replay(mess.botowner)

if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)

if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)

if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)

var medis = await Maria.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')

if (args[0] == `full`) {

var { img } = await generateProfilePicture(medis)

await Maria.query({

tag: 'iq',

attrs: {

to: botNumber,

type:'set',

xmlns: 'w:profile:picture'

},

content: [

{

tag: 'picture',

attrs: { type: 'image' },

content: img

}

]

})

fs.unlinkSync(medis)

reply(`Succes`)

} else {

var memeg = await Maria.updateProfilePicture(botNumber, { url: medis })

fs.unlinkSync(medis)

reply(`Success, Thank you for the new profile photo, my darling 😚`)

}

}

break



            case 'deletesession':

            case 'delsession':

            case 'clearsession': {

                if (!isCreator) return reply(mess.owner)

                fs.readdir("./Gallery/session", async function(err, files) {

                    if (err) {

                        console.log('Unable to scan directory: ' + err);

                        return reply('Unable to scan directory: ' + err);

                    }

                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||

                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")

                    )

                    console.log(filteredArray.length);

                    let teks = `Detected ${filteredArray.length} junk files\n\n`

                    if (filteredArray.length == 0) return reply(teks)

                    filteredArray.map(function(e, i) {

                        teks += (i + 1) + `. ${e}\n`

                    })

                    reply(teks)

                    await sleep(2000)

                    reply("Delete junk files...")

                    await filteredArray.forEach(function(file) {

                        fs.unlinkSync(`./Gallery/session/${file}`)

                    });

                    await sleep(2000)

                    reply("Successfully deleted all the trash in the session folder")

                });

            }

            break

            case 'join':

                try {

                    if (!isCreator) return reply(mess.owner)

                    if (!text) return reply('Enter Group Link!')

                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')

                    reply(mess.wait)

                    let result = args[0].split('https://chat.whatsapp.com/')[1]

                    await Maria.groupAcceptInvite(result).then((res) => reply(json(res))).catch((err) => reply(json(err)))

                } catch {

                    reply('Failed to join the Group')

                }

                break      

            case 'session':

                if (!isCreator) return reply(mess.owner)

                reply('Wait a moment, currently retrieving your session file')

                let sesi = await fs.readFileSync('./session/creds.json')

                Maria.sendMessage(m.chat, {

                    document: sesi,

                    mimetype: 'application/json',

                    fileName: 'creds.json'

                }, {

                    quoted: m

                })

                break

            case 'shutdown'
