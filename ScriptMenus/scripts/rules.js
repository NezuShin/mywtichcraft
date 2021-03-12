function onClick(event){
  var slot = event.getSlot();
  
  if(slot == -999 || slot == 999)
	return;
  
  var item = inventory.getItem(slot);
  
  if(item == null)
    return;
    
  var meta = item.getItemMeta();
  
  if(meta == null || !meta.hasLore())
    return;
    
  var lore = meta.getLore();
    
  for(var i = 0; i < lore.size(); i++){
    player.sendMessage(lore.get(i));
  }
}