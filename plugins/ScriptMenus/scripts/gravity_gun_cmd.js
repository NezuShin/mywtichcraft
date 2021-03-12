var Items = Java.type('nezu.item.Items');

var GravityClass = Items.getInstance().getItem('GravityGun').getModule();

function onCommand(sender, label, args) {
	
	var flag = !GravityClass.getGunUse(sender);
	
	GravityClass.setGunUse(sender, flag);
	
	if(flag){
		sender.sendMessage('§aТеперь игроки могут притягивать вас гравипушкой');
	} else {
		sender.sendMessage('§cТеперь игроки не могут притягивать вас гравипушкой');
	}
	
}