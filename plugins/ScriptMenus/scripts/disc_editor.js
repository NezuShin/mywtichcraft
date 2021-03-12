var ArrayList = Java.type('java.util.ArrayList');
var Lists = Java.type('com.google.common.collect.Lists');

var discs = Lists.newArrayList(Material.MUSIC_DISC_11, Material.MUSIC_DISC_13, Material.MUSIC_DISC_BLOCKS, Material.MUSIC_DISC_CAT, Material.MUSIC_DISC_CHIRP, Material.MUSIC_DISC_FAR, Material.MUSIC_DISC_MALL, Material.MUSIC_DISC_MELLOHI, Material.MUSIC_DISC_STAL, Material.MUSIC_DISC_STRAD, Material.MUSIC_DISC_WAIT, Material.MUSIC_DISC_WARD);

function onClick(event){
	var slot = event.getSlot();
	
	if(inventory.getItem(4) == null)
		return;
	var disc = discs.indexOf(inventory.getItem(4).getType());
	
	if(disc == -1)
		return;
	
	if(slot == 2){
		if(disc == 0){
			inventory.setItem(4, new ItemStack(discs.get(discs.size() - 1)));
		}else inventory.setItem(4, new ItemStack(discs.get(disc - 1)));
		
	} else if(slot == 6){
		if(disc == discs.size() - 1){
			inventory.setItem(4, new ItemStack(discs.get(0)));
		}else inventory.setItem(4, new ItemStack(discs.get(disc + 1)));
	}
}

function onClose(event){
	if(inventory.getItem(4) == null)
		return;
	
	player.getInventory().addItem(inventory.getItem(4));
}