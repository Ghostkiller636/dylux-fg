
let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner } ) {
	
	if (!m.isGroup) return !1
	let chat = global.db.data.chats[m.chat]
	let te = `✳️ En este grupo solo se permite personas de habla hispana`
	if (isBotAdmin && chat.onlyLatinos && !isAdmin && !isOwner) {
   if (m.sender.startsWith('212')) {
  //global.db.data.users[m.sender].banned = true
 m.reply(te)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('265')) {
  m.reply(te)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('234')) {
  m.reply(te)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('258')) {
  m.reply(te)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('263')) {
  m.reply(te)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   
   //---
}  
}
export default handler
