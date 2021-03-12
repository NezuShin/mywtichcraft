var Items = Java.type('nezu.item.Items');

var Renamer = Items.getInstance().getItem('RenameBook').getModule();

function onCommand(sender, label, args){
	
	
	Renamer.rename(sender.getInventory().getItemInMainHand(), Renamer.toAll(0, args), sender);
	
}