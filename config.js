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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923065392935";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923065392935";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923065392935,923065392935";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_46_10_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDMxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI3LFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICA0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc1LFxuICAgICAgICA2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA3LFxuICAgICAgICA3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3LFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICA3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3d1o2aERGa2ZIRlN2b2J5OHVzNG51YkNYd2lnQ0FlWXhLTVEweHJrWFBRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA2NTM5MjkzNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTA5Q0Y5ODVGRDVCQjQ0RDJDRTEyMzQ0QTk3ODYzQjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5MjI2ODAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDY1MzkyOTM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMjNCM0Y1MDI2NThCNUMxODQ2RjRFMzRENDk3OTA2QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkyMjY4MDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieUNVaDdrN1JRRzJnWHlRT2J1VG9VUVwiLFxuICBcInBob25lSWRcIjogXCIwZmJjNTEwMC1lNWI0LTQyODctOTI5Zi05ZWFmNzk2Zjg5ZTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICAyMSxcbiAgICAgIDI1MSxcbiAgICAgIDQ3LFxuICAgICAgMzIsXG4gICAgICA2NyxcbiAgICAgIDQyLFxuICAgICAgNDQsXG4gICAgICA1NyxcbiAgICAgIDIzOCxcbiAgICAgIDIwNixcbiAgICAgIDMsXG4gICAgICAxNDIsXG4gICAgICAxNSxcbiAgICAgIDE1NixcbiAgICAgIDkxLFxuICAgICAgMjQyLFxuICAgICAgMjE0LFxuICAgICAgMjIyLFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDE3MSxcbiAgICAgIDE0OSxcbiAgICAgIDIzOCxcbiAgICAgIDc2LFxuICAgICAgNCxcbiAgICAgIDEwNCxcbiAgICAgIDE3MSxcbiAgICAgIDE3LFxuICAgICAgMTk4LFxuICAgICAgMTU4LFxuICAgICAgMTM5LFxuICAgICAgOTcsXG4gICAgICAyMzYsXG4gICAgICA2NSxcbiAgICAgIDEyNyxcbiAgICAgIDE5NCxcbiAgICAgIDg2LFxuICAgICAgNTcsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEpDRjRLOEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2NTM5MjkzNToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjY2MjM1MzI3MTIxMjQ6MjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSmFuaVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BUOTFVNFFxOURIdUFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSERWRGFoT2pkVk1WU2R1OTQrcFF1QzZ0N3hGcGlSNjZlVEJxcU5TYzBDWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtUHdNN0YwY0tEbVBlemRLcEdkdm5EenVadnRWY0xQWlgxMVVGa011dXdMUkY0WWlnemNSdFg0WE1ZWUdPM1R0UzhHdjlWTU9LRUpsKzF3bG5DOTBDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrUFNSZWI1YW1qREpTckRaSmNPa0ZNTVU3cGg4MDRib3grZk5zMGJGK2lWYmc4dkN5dGp1WVBZZ1hIWmRZZ2c5eEx6OS9CSlhWUXZxdEFTUzFlQm9pQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNjUzOTI5MzU6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTIyNjc5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYzaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjNpLmpzb24iOiAie1wia2V5RGF0YVwiOlwidTNyT05TRk1iNHNmRXBqMkxHN0VXMGxUakVROU05djQza2tQWHJKOHRMND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjQ5ODY2MTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTIyNjgwMzE2N1wifSIKfQ=="  // PUT your SESSION_ID 


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
