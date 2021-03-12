

function onCommand(sender, label, args){
	
	Java.type('nezu.hardcore.HardcoreManager').getFactory().getModule('NightSkip').cancel(sender);
}

