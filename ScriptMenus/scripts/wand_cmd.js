var Items = Java.type('nezu.item.Items');


function onCommand(sender, label, args){
	
	
	sender.getInventory().addItem(Items.getInstance().getItem('RegionItem').getItem().clone());
}