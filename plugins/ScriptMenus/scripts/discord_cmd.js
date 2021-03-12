var ChatColor = Java.type('net.md_5.bungee.api.ChatColor');
var Color = Java.type('java.awt.Color');
function onCommand(sender, label, args){
  sender.sendMessage('§r' + ChatColor.of(Color.decode('#7B68EE')) + 'Наш дискорд: §r' + ChatColor.of(Color.decode('#C0C0C0')) + 'https://discord.gg/2d9cNwZ');
}