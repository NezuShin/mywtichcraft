var AnvilAPI = Java.type('nezu.anvils.AnvilAPI');
var ChatCleaner = Java.type('nezu.chat.ChatCleaner');
var StringBuilder = Java.type('java.lang.StringBuilder');
var TextComponent = Java.type('net.md_5.bungee.api.chat.TextComponent');
var Util = Java.type('nezu.chat.util.Util');
var ArrayList = Java.type('java.util.ArrayList');

var emojis = ChatCleaner.getInstance().getEmojiSystem().emojis;


var book = new ItemStack(Material.WRITTEN_BOOK);


var bm = book.getItemMeta();
bm.setAuthor("NezuShin");
bm.setTitle("");
var builder = new StringBuilder();
builder.append("");
for(var i = 0, j = 0; i < emojis.size(); i++, j++){
	if(i != 0)
		builder.append("\n");
	builder.append(":");
	var em = emojis.get(i);
	builder.append(em.getName());
	builder.append(": > §r§f");
	builder.append(em.getSymbol());
	builder.append("§0");
	if(parseInt(j) == parseInt(13)){
		j = -1;
		bm.addPage(builder.toString());
		builder = new StringBuilder();
	}
}

bm.addPage(builder.toString());





book.setItemMeta(bm);


function onCommand(sender, label, args){
	AnvilAPI.openBook(sender, book);
}