var ignore = false;

function confirm(){
	ignore = true;
	player.addScoreboardTag('rules'); 
	closeMenu();
	return;
}

function reject(){
	ignore = true;
	sync(function() {player.kickPlayer('Для игры на сервере следует принять правила');});
	closeMenu();
	return;
}

function onClick(event){
	
	var slot = event.getSlot();
	
	if(slot == -999 || slot == 999)
		return;
	
	
	if(slot == 11){
		confirm();
		return;
	} else if(slot == 15){
		reject();
	}
	
}



function onClose(event){
	if(ignore)
	return;
	sync(function() {
		openMenu(player, 'rules_confirm');
	});
}