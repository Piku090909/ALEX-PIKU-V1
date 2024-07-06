const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownername = "𓆩‎✘À𝖑è𝖝 𝕻ì𝖐ù✘𓆪"//owner name
global.ownernumber = ['918536881026']
global.ytname = "YT: piku090909Botz.inc"
global.socialm = "GitHub: piku090909"
global.location = "Indian"

global.botname = '𓆩‎✘À𝖑è𝖝 𝕻ì𝖐ù✘𓆪' //name of the bot

//sticker details
global.stickername = '𓆩‎✘À𝖑è𝖝 𝕻ì𝖐ù✘𓆪'
global.packname = 'Sticker By'
global.author = '𓆩‎✘À𝖑è𝖝 𝕻ì𝖐ù✘𓆪'
//console view/theme
global.themeemoji = '🧩'
global.wm = "piku090909 botz inc."

//theme link
global.link = ''

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = true //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*𓆩‎✘À𝖑è𝖝 𝕻ì𝖐ù✘𓆪*\n\n*𓆩‎✘À𝖑è𝖝 𝕻ì𝖐ù✘𓆪 Bot link:* \nhttps://github.com/piku090909/ALEX-PIKU-V1 bot\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
