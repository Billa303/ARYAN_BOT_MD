//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗠𝗗  𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：3.0                                                       //


   //_____            ______     //
  /// ____|          |  ____|    //
 //| (___   __ _ _ __| |__ _   _ //
  //\___ \ / _` | '__| __| | | | //
  //____) | (_| | |  | |  | |_| |//
 //|_____/ \__,_|_|  |_|   \__,_|//
                               
                               

                                            

//______      _ _          // 
//| ___ \    | | |          //
//| |_/ /   _| | | _____  __ //
//|    / | | | | |/ _ \ \/ / //
//| |\ \ |_| | | |  __/>  <   //
//\_| \_\__,_|_|_|\___/_/\_\. //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
// Owner NaMe ==> ArYan.x3
// Owner Rullex ==> SarFu Rullex
// DosT ==> VaRuN,Hawsi,ArMan,Seenu,Sharad
// ⛥┌┤
// */
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-MD=SUEiRBqC#28E-sBocAU7n-VsIMDN6PeBNHtxy8iCBwJ3w9RqLDmY",
PORT: process.env.PORT || "3000"
};
