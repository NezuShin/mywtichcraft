var ItemUtil = Java.type('nezu.script.util.ItemUtil');
var Items = Java.type('nezu.item.Items');
var Lists = Java.type('com.google.common.collect.Lists');
var DonDB = Java.type('nezu.don.db.DonDB');
var TimePlayer = Java.type('nezu.don.db.TimePlayer');

var donate = DonDB.getInstance().getData(player);

var time = DonDB.getInstance().timedatabase.query().where("name", player.getName().toLowerCase()).completeAsOne();


if(time == null)
	time =  new TimePlayer(player.getName().toLowerCase(), 0, 0);

function padezh(ed, a, b, c, n) {
    if (n < 0) n = -n;
    var last = n % 100;
    if (last > 10 && last < 21) return ed + c;
    last = n % 10;
    if (last == 0 || last > 4) return ed + c;
    if (last == 1) return ed + a;
    if (last < 5) return ed + b;
    return ed + c;
}

var donname = "&r&7<нет>&r";
var don = donate.getDonate();
if(don != null){

	if(don.equalsIgnoreCase('zombie')){
		donname = '&2Зомби';
	} else if(don.equalsIgnoreCase('werewolf')){
		donname = '&8Оборотень';
	} else if(don.equalsIgnoreCase('witch')){
		donname = '&aВедьма'
	} else if(don.equalsIgnoreCase('vampir')){
		donname = '&6Вампир';
	}  else if(don.equalsIgnoreCase('demon')){
		donname = '&4Демон'
	}   else if(don.equalsIgnoreCase('devil')){
		donname = '&cДьявол';
	} else if(don.equalsIgnoreCase('sponsor')){
		donname = '&6Спонсор'
	}
}

inventory.setItem(5, new ItemUtil(inventory.getItem(5)).lore((donate.getSuffix() == null) ? '&r&7<нет>&r' : donate.getSuffix()).item());

inventory.setItem(3, new ItemUtil(inventory.getItem(3)).lore(donname).item());

var a = time.getPlayed() / 3600000;

inventory.setItem(4, new ItemUtil(inventory.getItem(4)).lore((time.getPlayed() == 0) ? '&r&7<нет>&r' : '&r&7' + a.toFixed(0) + ' ' + padezh('час', '', 'а', 'ов', a)).item());

inventory.setItem(2, new ItemUtil(inventory.getItem(2)).lore('&r&7Статистика не собирается').item());

inventory.setItem(6, new ItemUtil(inventory.getItem(6)).lore('&r&7мне лень это делать', '&r&7притоврись, что тут что то полезное').item());