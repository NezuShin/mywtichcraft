var Items = Java.type('nezu.item.Items');
var ItemUtil = Java.type('nezu.item.ItemUtil');
var ArrayList = Java.type('java.util.ArrayList');
var HashMap = Java.type('java.util.HashMap');
var AnvilAPI = Java.type('nezu.anvils.AnvilAPI');

var ItemList = Items.items;

var currentPage = 0;

var pages = new HashMap();

if (ItemList.isEmpty()) {
    closeMenu();
	die();
}

var cp = new ArrayList();
var pn = 0;
var j = 0;
for (var i = 0; i < ItemList.size();i++) {
	var item = ItemList.get(i);
	
	if(item.isHide())
		continue;
	
    cp.add(item);
    if (j > 25) {
        pages.put(parseInt(pn), cp);
        j = -1;
        pn++;
        cp = new ArrayList();
    }
	j++;
}
pages.put(parseInt(pn), cp);


var size = pages.size();

function display() {
    var page = parseInt(currentPage);
    if (size <= page)
        return;


    var items = pages.getOrDefault(parseInt(page), pages.get(parseInt(0)));

    var AIR = new ItemStack(Material.AIR);
    for (var i = 0; i < 27; i++) {
        if (items.size() > i) {
            var iii = items.get(parseInt(i));
			
			var ilist = new ArrayList(iii.getLore()); 
			
			
			var textureAuthor = iii.getTextureAuthor();
			var realisationAuthor = iii.getRealisationAuthor();
			
			if(textureAuthor != null && !textureAuthor.trim().equalsIgnoreCase("")){
				ilist.add('');
				
				ilist.add('§r§7Нарисовал:');
				ilist.add('§r§8' + textureAuthor);
			}
			if(realisationAuthor != null && !realisationAuthor.trim().equalsIgnoreCase("")){
				ilist.add('');
				ilist.add('§r§7Реализовал:');
				ilist.add('§r§8' + realisationAuthor);
			}
			
			
            inventory.setItem(i, new ItemUtil(iii.getItem()).lore(ilist).item());
        } else {
            inventory.setItem(i, AIR);
        }
    }
}

display(0);

function onClick(event) {

    var slot = event.getSlot();

    if(slot == -999)
        return;
	if (slot == 35)
		closeMenu();

    if (slot == 30) {
        currentPage = currentPage == 0 ?  size - 1 : currentPage - 1;
        display();
    } else if (slot == 32) {
        currentPage = currentPage == size - 1 ? 0 : currentPage + 1;
        display();
    } else if(slot < 27){
        var page = pages.get(parseInt(currentPage));
        
        if(page == null)
          return;
        
        if(page.size() <= slot)
          return;
          
        var item = page.get(parseInt(slot));

        if(item == null || item.getCrafts() == null || item.getCrafts().isEmpty())
            return;
        script.openMenu(player, 'craft_of', [item.getId()]);
    }
}