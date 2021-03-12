var Items = Java.type('nezu.item.Items');
var ItemUtil = Java.type('nezu.script.util.ItemUtil');
var Location = Java.type('org.bukkit.Location');
var BlockUtil = Java.type('nezu.item.util.BlockUtil');

var blockLoc = new Location(Bukkit.getWorld(args[0]), parseInt(args[1]), parseInt(args[2]), parseInt(args[3]));

if(BlockUtil.getCustomBlock(blockLoc.getBlock()) == null){
	close();
	die();
}

var shaurmaBlock =  Items.getInstance().getItem('ShaurmaBlock').getModule();

function getColor(a){
	if(a > 0){
		return "§a";
	} else if(a < 0){
		return "§c";
	}
	return "§8";
}

function getColorReverce(a){
	if(a > 0){
		return "§c";
	} else if(a < 0){
		return "§a";
	}
	return "§8";
}



function update() {
	shaurmaBlock.updateInventoryInfo(inventory);
	
	var parts = shaurmaBlock.getParts(inventory);
	if(parts == null)
		return;
	
	var saturation = 0;
	var food = 0;
	var failPersent = 0;
	
	for(var i = 0; i < parts.size(); i++){
		var anal = parts.get(i);
		food += anal[0];
		saturation += anal[1];
		failPersent += anal[2];
	}
	inventory.setItem(22, new ItemUtil(inventory.getItem(22)).lore('§r§7Насыщение: ' + getColor(food) + food, '§r§7Калорийность: ' + getColor(saturation) +  saturation, '§r§7Шанс отравления: ' + getColorReverce(failPersent) + failPersent + '%').item());
}

function onClick(event){
	var slot = event.getSlot();
	
	if(slot == 22){
		var item = inventory.getItem(31);
		
		if(item != null)
			return;
		inventory.setItem(31, shaurmaBlock.buildShaurma(inventory));
		return;
	}
	
	setTimeout('update', 2);
}

function onClose(event){
	for(var i = 1; i < 8; i++){
		var item = inventory.getItem(i);
		
		if(item != null){
			if(player.getInventory().firstEmpty() != -1)
				player.getInventory().addItem(item);
			else
				sync(function() {player.getWorld().dropItem(player.getLocation(), item);});
		}
	}
	
}