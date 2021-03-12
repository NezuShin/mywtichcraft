var ChatColor = Java.type('net.md_5.bungee.api.ChatColor');
var Color = Java.type('java.awt.Color');
function onCommand(sender, label, args){
  sender.sendMessage('§r' + ChatColor.of(Color.decode('#7B68EE')) + 'Наш ТикТок: §r' + ChatColor.of(Color.decode('#C0C0C0')) + 'https://www.tiktok.com/@mc.mywitchcraft.ru');
}