var HashMap = Java.type('java.util.HashMap');
var ArrayList = Java.type('java.util.ArrayList');
var DonDB = Java.type('nezu.don.db.DonDB');
var ItemUtil = Java.type('nezu.script.util.ItemUtil');
var ChorusAPI = Java.type('chorus.payment.ChorusAPI');


var perm = DonDB.getInstance().getData(player).getDonate();

perm = perm == null ? "default" : perm;

var permss = ['zombie', 'werewolf', 'witch', 'vampir', 'demon', 'devil', 'sponsor'];
var lover = new ArrayList();
var perms = new HashMap();

perms.put('zombie', 40);
perms.put('werewolf', 90);
perms.put('witch', 150);
perms.put('vampir', 500);
perms.put('demon', 990);
perms.put('devil', 1490);
perms.put('sponsor', 5000);

var level = perms.getOrDefault(perm, 0);


for(var i = 0; i < 8; i++){
	var item = inventory.getItem(i);
	
	if(item == null || item.getType().equals(Material.AIR))
		continue;
	
	var a = permss[i];
	
	if(perms.get(a) <= level){
		lover.add(a);
		inventory.setItem(i, new ItemUtil(item).lore('&aВы уже купили эту привелегию').item());
	} else {
		var cost = perms.get(a) - level;
		perms.put(a, cost);
		inventory.setItem(i, new ItemUtil(item).setName(item.getItemMeta().getDisplayName() + " &5" + cost).item());
	}
	
}

function onClick(event){
	var slot = event.getSlot();
	
	if(slot == 8){
		closeMenu();
		return;
	}
	
	if(slot >= permss.length || slot < 0)
		return;
	
	var a = permss[slot];
	
	
	if(lover.contains(a))
		return;
	
	if(ChorusAPI.getBalance(player.getName().toLowerCase()) >= perms.get(a)){
		openMenu(player, 'donate_shop_buy', [a]);
	} else {
		player.sendMessage('Недостаточно средств!');
		return;
	}
	
}