const handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `⚠️ 𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝙉𝙄𝙉𝙂𝙐𝙉 𝙋𝙍𝙀𝙁𝙄𝙅𝙊, 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙋𝙍𝙀𝙁𝙄𝙅𝙊 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝘼 𝙀𝙎𝙏𝘼𝘽𝙇𝙀𝘾𝙀𝙍, 𝙀𝙅: ${usedPrefix + command} #`;
const prefix = new RegExp('^[' + text.replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
const settings = global.db.data.settings[conn.user.jid] || {};
settings.prefix = text;
global.db.data.settings[conn.user.jid] = settings;
await m.reply(`✅ *𝙀𝙇 𝙋𝙍𝙀𝙁𝙄𝙅𝙊 𝘼𝘾𝙏𝙐𝘼𝙇 𝘿𝙀𝙇 ${wm} 𝙎𝙀 𝙀𝙎𝙏𝘼𝘽𝙇𝙀𝘾𝙄𝙊 𝘼 :* [ ${text} ]`);
};
handler.help = ['setprefix'].map(v => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(setprefix)$/i;
handler.rowner = true;
export default handler;
 