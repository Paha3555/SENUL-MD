const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XCYVyRzR#GCF3gJLt72OvbUWlogjffEXwJAFqHljRbNXFyVz48UM",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/ggrmtk2/IMG-20240918-WA0034.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "👋 𝗛𝗘𝗟𝗟𝗢 ${pushname}\n\n*I'M SENUL-MD WHATSAPP BOT*\n\n𝗿𝗲𝗽𝗼 𝗹𝗶𝗻𝗸 🦹👇https://github.com/senulruwaneka/SENUL-MD\n\n 𝗛𝗔𝗩𝗘 𝗔 𝗡𝗜𝗖𝗘 𝗗𝗔𝗬 💗🦹\n\n> *© ᴘᴏᴡᴇʀ ʙʏ ꜱᴇɴᴜʟ-ᴍᴅ*",
SUDO_NB: process.env.SUDO_NB || "94762296665",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public"
};

