function onClick(event){
	var slot = event.getSlot();
	
	if(slot==0)
	{
		closeMenu();
		openMenu(player, 'item_list');
	}	
	if(slot==2)
	{
		closeMenu();
		openMenu(player, 'donate');
	}
	if(slot==4)
	{
		closeMenu();
		openMenu(player, 'rules');
	}
	if(slot==6)
	{
		closeMenu();
		openMenu(player, 'shop');
	}
	if(slot==8)
	{
		closeMenu();
		openMenu(player, 'kits');
	}
}