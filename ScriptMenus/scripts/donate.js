function open(a){
	openMenu(player, 'kit_show', [a]);
}

function onClick(event){
	var slot = event.getSlot();
		if(slot == 35)
		closeMenu();
		if(slot== 3)
		{
			player.sendMessage("https://vk.com/nezushin");
		}
		if(slot== 0)
		{
			player.sendMessage("https://vk.com/nezushin");
		}
		if(slot== 4)
		{
			closeMenu();
			open('start');
		}
		if(slot== 8)
		{
			player.sendMessage("http://mywitchcraft.ru/");
		}
		if(slot== 12)
		{
			closeMenu();
			open('zombie');
		}
		if(slot== 13)
		{
			closeMenu();
			open('werewolf');
		}
		if(slot== 14)
		{
			closeMenu();
			open('witch');
		}
		if(slot== 21)
		{
			closeMenu();
			open('vampir');
		}
		if(slot== 22)
		{
			closeMenu();
			open('demon');
		}
		if(slot==25)
		sync(function() {
        player.performCommand('donatecases open donate');
		});
}