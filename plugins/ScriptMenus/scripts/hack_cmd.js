var ChorusBan = Java.type('chorus.ban.ChorusBan');

function onCommand(sender, label, args){
	sync(function() {
	ChorusBan.manager().kick(Bukkit.getConsoleSender(), sender.getName(), "уронил мыло в душе", false);
	});
}