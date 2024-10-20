const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_17_10_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI3LFxuICAgICAgICA1MyxcbiAgICAgICAgNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAyMSxcbiAgICAgICAgODksXG4gICAgICAgIDEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDk2LFxuICAgICAgICA3LFxuICAgICAgICA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTczLFxuICAgICAgICA4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMyxcbiAgICAgICAgNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA0LFxuICAgICAgICA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWxNU3l6b2Z5a1ZhZmx5d0x6emQ1NEh6bC9kRTJaTENmZlgwVEh5dmI5QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicTJUT21UdTZUTzZXaU1XTnBUR3Fqd1wiLFxuICBcInBob25lSWRcIjogXCI0NGRmZDhjZS02NGZiLTQ2MjgtYTE0OC1hZjc4MjFkNDYyYjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAxNTgsXG4gICAgICAyMDAsXG4gICAgICAxOTgsXG4gICAgICAxMDgsXG4gICAgICAyMTEsXG4gICAgICAxMTcsXG4gICAgICAxNzAsXG4gICAgICA0OCxcbiAgICAgIDk5LFxuICAgICAgMTEyLFxuICAgICAgNzksXG4gICAgICAxNjAsXG4gICAgICAyNTAsXG4gICAgICAyNyxcbiAgICAgIDg2LFxuICAgICAgMjA5LFxuICAgICAgMTMzLFxuICAgICAgNjUsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDE0OSxcbiAgICAgIDEwOSxcbiAgICAgIDE4OSxcbiAgICAgIDIxNSxcbiAgICAgIDE1NixcbiAgICAgIDExNixcbiAgICAgIDUsXG4gICAgICAxODQsXG4gICAgICAxOCxcbiAgICAgIDExMyxcbiAgICAgIDExOSxcbiAgICAgIDIzOSxcbiAgICAgIDIxMCxcbiAgICAgIDE2MSxcbiAgICAgIDM5LFxuICAgICAgMTI3LFxuICAgICAgMTYyLFxuICAgICAgMTg1LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVlHTjRMRVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQwMDk0MDE5ODo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYyMjE2NjE5ODQ3ODE5Ojk0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lhN2oxc1FqNWZJdUFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNFdJWUhCNTF4ckxvQnkxbldJWlJUcFBYTkhPVndCeitGYWhvU2xLajNYST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnRDFRTnVNRjVTTk5CVnRZUmdtQ0N0N1hNcUpOL09qcllFWGJTMFU2Mk1kaHMyUkR5eHJvakxPS3l6VWlqaXM5MWROYzJZMnpEOHFyajRpQ3ZMRzJCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGS1ZyVGZjSFowQnlEb3hXbThNRUNXV0IvbS8xWWxCR0RHNEJPNkFJMEtmcHNVcFdyMklRbFN3SnFtMXBiN3NsM1plQlQxcDRRSHBUOCs3U0ZNcE1Edz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MDA5NDAxOTg6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkyMzU4NTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOWmlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5aaS5qc29uIjogIntcImtleURhdGFcIjpcIjI1MmgwOThFaWZ2cklSVGdyU29ITEwzbVZ6cDkvVzVrS05UZ3g5SDk1bUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkxMDk0MTUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjkyMzU4NjQ2MzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
