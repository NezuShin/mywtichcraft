var ItemUtil = Java.type('nezu.item.ItemUtil');
var Kits = Java.type('nezu.kits.Kits');
var DateUtil = Java.type('nezu.kits.util.DateUtil');
var HashMap = Java.type('java.util.HashMap');
var ArrayList = Java.type('java.util.ArrayList');

var kit = args[0];

var kkit = Kits.getInstance().getKit(kit);

var l = Kits.getInstance().getTime(kit, player.getName()) + kkit.getCooldown();

var items = kkit.getItems();

var randomItems = new HashMap();

for(var i = 0; i < items.size(); i++){
	var item = items.get(i);
	
	if(item.getClass().getSimpleName().equalsIgnoreCase('SimpleKitItem')){
		inventory.setItem(i, item.getItem());
		continue;	
	}
	randomItems.put(i, item);
}

var listRItems = new ArrayList(randomItems.entrySet());
randomItems = null;

var perm = player.hasPermission('nezu.kits.' + kit.toLowerCase());

if(!perm){
	inventory.setItem(44, new ItemUtil(inventory.getItem(44)).modelData(2).setName('&cНельзя получить').item());
}

function update(){
	if(perm){
		if(l > Kits.currentTimeMillis()){
			inventory.setItem(44, new ItemUtil(inventory.getItem(44)).modelData(2).setName('&rДо получения ' + DateUtil.formatDateDiff(l)).item());
		} else {
			inventory.setItem(44, new ItemUtil(inventory.getItem(44)).modelData(1).setName('&aПолучить&r').item());
		}
	}
	
	
	for(var i = 0; i < listRItems.size(); i++){
		var item = listRItems.get(i);
		
		inventory.setItem(item.getKey(), item.getValue().getItem());
	}
}

update();

setInterval('update', 40);
 
var blocked = false;
function onClick(event){
	if(blocked)
		return;
	if(!perm)
		return;
	var slot = event.getSlot();
	if(slot == 44){
		l = Kits.getInstance().getTime(kit, player.getName()) + kkit.getCooldown();
		if(l > Kits.currentTimeMillis()){
			player.sendMessage('§r§2WitchCraft§r §a>§r §cПодождите§r ещё §a' + DateUtil.formatDateDiff(l) + '§r для того, чтобы §cполучить§к этот кит' );
			closeMenu();
			return;
		}
		blocked = true;
		sync(function() {
			kkit.give(player, false);
		});
		closeMenu();
	}
}
