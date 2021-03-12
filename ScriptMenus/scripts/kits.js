function open(a){
	openMenu(player, 'kit_show', [a]);
}

function onClick(event){
	var slot = event.getSlot();
	if(slot == 0){
		open('start');
	} else if(slot == 1){
		open('zombie');
	} else if(slot == 2){
		open('werewolf');
	} else if(slot == 3){
		open('witch');
	} else if(slot == 4){
		open('vampir');
	} else if(slot == 5){
		open('demon');
	} else if(slot == 6){
		open('devil');
	} else if(slot == 7){
		open('sponsor');
	} else if(slot == 8){
		closeMenu();
	}
}

