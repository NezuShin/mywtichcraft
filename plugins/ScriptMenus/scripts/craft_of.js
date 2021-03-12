var Items = Java.type('nezu.item.Items');
var ItemUtil = Java.type('nezu.script.util.ItemUtil');

var id = args[0];

var item = Items.getInstance().getItem(id);

if(item == null){
    closeMenu();
    die();
}
var crafts = item.getCrafts();

if(crafts.isEmpty()){
	closeMenu();
	die();
}

var craft = crafts.get(0);
var pointer = 0;

var craftSlots = [2, 3, 4, 11, 12, 13, 20, 21, 22];
var resultSlot = 15;

function ccraft(type) {
	var AIR = new ItemStack(Material.AIR);
	var IRON_BARS = new ItemUtil(Material.IRON_BARS).setName(' ').item();
	for (var i in craftSlots) {
		
		i = craftSlots[i];
		if (type) {
			inventory.setItem(i, AIR);
		} else {
			if (i != 12)
				inventory.setItem(i, IRON_BARS);
			else
				inventory.setItem(i, AIR);
		}
	}

	if (type) {
		inventory.setItem(14, new ItemStack(Material.CRAFTING_TABLE));
	} else {
		inventory.setItem(14, new ItemStack(Material.FURNACE));
	}
}

function show() {
	

	inventory.setItem(15, item.getItem());

	if (craft.getClass().getSimpleName().equalsIgnoreCase('ShapedCraft')) {
		ccraft(true);

		inventory.setItem(2, craft.matrix[0]);
		inventory.setItem(3, craft.matrix[1]);
		inventory.setItem(4, craft.matrix[2]);
		inventory.setItem(11, craft.matrix[3]);
		inventory.setItem(12, craft.matrix[4]);
		inventory.setItem(13, craft.matrix[5]);
		inventory.setItem(20, craft.matrix[6]);
		inventory.setItem(21, craft.matrix[7]);
		inventory.setItem(22, craft.matrix[8]);
	} else {
		ccraft(false);
		inventory.setItem(12, craft.item);
	}

}

if(craft == null){
    closeMenu();
    die();
}
else {
    show();
}

function onClick(event){
	var slot = event.getSlot();
    if(slot == 18){
        closeMenu();
        openMenu(player, 'item_list');
    } else if(slot == 26){
        closeMenu();
    } else if(slot == 0){
		pointer = pointer != 0 ? pointer - 1 : crafts.size() - 1;
		craft = crafts.get(pointer);
		show();
	} else if(slot == 8){
		pointer = pointer == crafts.size() - 1 ? 0 : pointer + 1;
		craft = crafts.get(pointer);
		show();
	}
}