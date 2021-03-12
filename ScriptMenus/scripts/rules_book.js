var AnvilAPI = Java.type('nezu.anvils.AnvilAPI');
var Config = Java.type('nezu.anvils.yml.Config');
var File = Java.type('java.io.File');
var ScriptMenus = Java.type('nezu.script.ScriptMenus');
var ArrayList = Java.type('hava.util.ArrayList');

var config = new Config(new File(ScriptMenus.getInstance().getDataFolder() + File.separator + 'rules.yml'));


function toString(list){
	var r = "";
	
	for(var i = 0; i < list.size(); i++){
		r += list.get(i);
		r += "\n";
	}
}

var map = config.getMap(ArrayList.getClass(), 'rules');

var set = new ArrayList(map.keySet());

ItemStack item = new ItemStack(Material.WRITTEN_BOOK);
var meta = item.getItemMeta();
meta.setAuthor('NezuShin');

for(var a = 0; a < set.size(); a++){
	meta.addPage(tostring(set.get(a)).replace('&', '§'));
}

item.setItemMeta(meta);




function onCommand(sender, label, args){
	AnvilAPI.openBook(sender, item);
}