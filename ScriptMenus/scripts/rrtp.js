var HardcoreManager = Java.type('nezu.hardcore.HardcoreManager');
var Antirelog = Java.type('nezu.anti.relog.Antirelog');

function onCommand(sender, label, args){
	var m = HardcoreManager.getFactory().getModule('RandomTP');
	
	if(Antirelog.getInstance().contains(sender))
		return;
	
	sync(function(){
	m.execute(sender);
	sender.sendMessage("§2§lRTP §3> §f§6Телепортация...");
	});
}