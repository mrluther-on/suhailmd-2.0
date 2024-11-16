const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//═══════[Required Variables]════════\\
global.audio= "YOUR BABU SUBARU 💋" ;  
global.video= "YOUR BABU SUBARU 💋" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="lutherofficial009@gmail.com"
global.location="nadia,kolkata."


global.mongodb= process.env.MONGODB_URI || "true" || "mongodb+srv://ssubu0773:A10LhM77YTePcrEt@cluster0.lrn0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "true" || "mongodb+srv://ssubu0773:A10LhM77YTePcrEt@cluster0.lrn0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vakxzdf7oQhll9dE2S0t";

global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "WhatsApp Image 2024-11-06 at 19.23.36_1dd497ec.jpg" || "WhatsApp Image 2024-11-06 at 23.39.17_c9f4dc34.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ＳＵＢＡＲＵ'Ｓ TP STUDIO" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919614477116";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "WhatsApp Image 2024-11-06 at 19.23.36_1dd497ec.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "True"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "919614477116,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919616677116,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_08_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxLFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NixcbiAgICAgICAgODQsXG4gICAgICAgIDc1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgMTYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkd2b3BMVStmZm03SWUwcUZURTdtcjFYMml5aUdyVm9CZEhkMy84REpLSlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFjV0cwTHJJU2NtNm5jLXZvbXNwU2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzI5ZGM3NDktODhmZi00NmJiLThjYzItMzgzM2MzMmQ3ZWM2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDI5LFxuICAgICAgMjIsXG4gICAgICAxOTMsXG4gICAgICA2LFxuICAgICAgMTEwLFxuICAgICAgMTUzLFxuICAgICAgMzUsXG4gICAgICAxMTcsXG4gICAgICAxNDUsXG4gICAgICAyMCxcbiAgICAgIDE0MixcbiAgICAgIDgzLFxuICAgICAgMTkzLFxuICAgICAgMjIzLFxuICAgICAgMjA3LFxuICAgICAgMjM1LFxuICAgICAgMTYwLFxuICAgICAgMixcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICA1NixcbiAgICAgIDQ3LFxuICAgICAgMTI4LFxuICAgICAgMTM4LFxuICAgICAgOTEsXG4gICAgICAxMDcsXG4gICAgICAzMSxcbiAgICAgIDI0NSxcbiAgICAgIDk3LFxuICAgICAgMTMxLFxuICAgICAgNjUsXG4gICAgICAyMzMsXG4gICAgICAxNzEsXG4gICAgICAxMTMsXG4gICAgICAxMTgsXG4gICAgICAxMDYsXG4gICAgICAyMDAsXG4gICAgICAxNzUsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdWc2MWNRdTdHb3VRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBmSC9wRnFLVU1Zd2lhUytpWS9rd3FjTGQ5azQ4MU9wM3JqVkoya1RJaDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZkI4KzJFaklWZkFFOE5sVkc0WEs5SWpNcXE0TFVBdHN2SE1PcXhVK3dORGVBNTVKT3Q5S1B6SGRFRUNtZWFuLzA0bVVlZmNXWUxQOC9TNlo3RldoQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNFNJTndpK0JMeHFYY3lEUFloVVY0VnNmNHZSRUtnTUg1MlNlNzlMNVNpV2lRUk5tMGQ3THYxdzkyQjB6eW1KVS8weGdXb2owSXc0MjFvclNaa0tpZ1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgyMDcwNzUzMjM6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmDIPCdmYAg8J2ZjSDwnZmKIPCdmL0g8J2ZjSDwnZmEIPCdmYkg8J2ZgFwiLFxuICAgIFwibGlkXCI6IFwiMTU1MzUzODMyNTIxOTYyOjQ2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MjA3MDc1MzIzOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDgxMjA5NVxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "𝙎𝙐𝘽𝘼𝙍𝙐 𝙄𝙎 𝙔𝙊𝙐𝙍 𝙇𝘼𝙎𝙏 𝙊𝙋𝙏𝙄𝙊𝙉" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🕊+919614477116_ (ｉｎｓｔａ - lexx_lutheer_)",
  packname: process.env.PACK_NAME || "🎋💔𝐇𝐄𝐘 𝐓𝐇𝐄𝐑𝐄 𝐈'𝐌  ＳＵＢＡＲＵ🌷(๑˃𝐀𝐒𝐈𝐀'𝐒 𝐁𝐈𝐆𝐆𝐄𝐒𝐓 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐂𝐑𝐄𝐀𝐓𝐎𝐑🍂ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
  botname : process.env.BOT_NAME  || "ㅤ📮 ___ＥＭＩＬＩＡ ___ 💌",
  ownername:process.env.OWNER_NAME|| "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ🔰ＳＵＢＡＲＵ💌",

    errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUBARU"  ).toUpperCase(),



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
