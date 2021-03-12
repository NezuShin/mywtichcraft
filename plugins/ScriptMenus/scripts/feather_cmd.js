var Items = Java.type('nezu.item.Items');

var FeatherBoots = Items.getInstance().getItem('FeatherBoots').getModule();

function onCommand(sender, label, args) {
	
	var moved = FeatherBoots.moved.getOrDefault(sender, 0.0);
	
	
	sender.sendMessage('Вы прошли ' + moved + ' блоков')
	
}