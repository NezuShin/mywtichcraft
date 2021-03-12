var HashMap = Java.type('java.util.HashMap');
var ArrayList = Java.type('java.util.ArrayList');
var DonDB = Java.type('nezu.don.db.DonDB');
var ItemUtil = Java.type('nezu.script.util.ItemUtil');
var ChorusAPI = Java.type('chorus.payment.ChorusAPI');

var perm = args[0];

var now = DonDB.getInstance().getData(player).getDonate();

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

var items = new HashMap();

var nowlevel = perms.getOrDefault(now, 0);

var cost = perms.get(perm) - nowlevel;

items.put('zombie', new ItemUtil(Material.ZOMBIE_HEAD).setName('&2&lЗомби&f ' + cost).item());
items.put('werewolf', new ItemUtil(Material.GOLD_INGOT).setName('&6&lОборотень&f ' + cost).item());
items.put('witch', new ItemUtil(Material.POTION).setName('&b&lВедьма&f ' + cost).item());
items.put('vampir', new ItemUtil(Material.DIAMOND).setName('&5&lВампир&f ' + cost).item());
items.put('demon', new ItemUtil(Material.PLAYER_HEAD).setHeadOwner('NezuShin').setName('&4&lДемон&f ' + cost).item());
items.put('devil', new ItemUtil(Material.PLAYER_HEAD).setName('&c&lДьявол&f ' + cost).item());
items.put('sponsor', new ItemUtil(Material.DIAMOND).setName('&6&lСпонсор&f ' + cost).item());

inventory.setItem(4, items.get(perm));


function onClick(event){
	var slot = event.getSlot();
	
	if(slot < 4){
		if(ChorusAPI.getBalance(player.getName().toLowerCase()) >= cost){
			ChorusAPI.withdraw(player.getName().toLowerCase(), cost, 'Покупка доната');
			DonDB.getInstance().setDonate(player, perm);
			DonDB.getInstance().update(player);
			closeMenu();
		}
	} else if(slot > 4){
		closeMenu();
		return;
	}
	
}