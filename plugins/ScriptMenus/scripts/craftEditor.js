var ItemUtil = Java.type('nezu.script.util.ItemUtil');
var Items = Java.type('nezu.item.Items');
var SItem = Java.type('nezu.item.Item');
var ShapedCraft = Java.type('nezu.recipes.craft.ShapedCraft');
var FurnaceCraft = Java.type('nezu.recipes.craft.FurnaceCraft');
var CustomNbtTagCompound = Java.type('nezu.anvils.nbt.CustomNbtTagCompaund');
var RecipeHelper = Java.type('nezu.recipes.RecipeHelper');
var File = Java.type('java.io.File');
var Lists = Java.type('com.google.common.collect.Lists');

var craftNumber = 0;

if (args.length > 0) {
    craftNumber = parseInt(args[0]);
}



var type = true;
var id;

var currentItem = player.getInventory().getItemInMainHand();

if (currentItem == null || currentItem.getType() == Material.AIR) {
    if (args.length > 1) {
        id = args[1];
    } else {
        closeMenu();
        die();
    }
} else {
    id = CustomNbtTagCompound.fromItemStack(currentItem).getString('CNBT').asString();
}
    
var iitem = Items.getInstance().getItem(id);
if (iitem == null){
    closeMenu();
    die();
}

inventory.setItem(16, iitem.getItem());

function swith() {
    var item = inventory.getItem(23);
    if (item.getType() == Material.CRAFTING_TABLE) {
        type = false;
        inventory.setItem(23, new ItemUtil(Material.FURNACE).setName(item.getItemMeta().getDisplayName()).lore('furnace').item());
    } else {
        type = true;
        inventory.setItem(23, new ItemUtil(Material.CRAFTING_TABLE).setName(item.getItemMeta().getDisplayName()).lore('workbech').item());
    }
}

function buildCraft(item) {
    if (type) {
        var matrix = [];

        matrix.push(inventory.getItem(1));
        matrix.push(inventory.getItem(2));
        matrix.push(inventory.getItem(3));
        matrix.push(inventory.getItem(10));
        matrix.push(inventory.getItem(11));
        matrix.push(inventory.getItem(12));
        matrix.push(inventory.getItem(19));
        matrix.push(inventory.getItem(20));
        matrix.push(inventory.getItem(21));

        return new ShapedCraft(item.getItem(), matrix);

    } else {
        var r = inventory.getItem(11);

        if (r == null)
            return null;

        var craft = new FurnaceCraft(item.getItem(), r, 200);
        return craft;
    }
}


function onClick(event) {

    var slot = event.getSlot();


    if (slot == 23) {
        swith();
    } else if (slot == 14) {
        if (id != null) {

            var crafts = iitem.getCrafts();

            if (craftNumber < crafts.size()) {
                var craft = crafts.get(craftNumber);
                craft.unregister();
                crafts.remove(craftNumber);
            }

            var ncraft = buildCraft(iitem);

            crafts.add(ncraft);

            iitem.setCrafts(crafts);
            iitem.save();

            sync(function () {
                ncraft.register();
            });
        }
    }


}

function array(params) {
    return Lists.newArrayList(params);
}

function onQuit(event) {

}

function onClose(event) {

}

function onInput(event) {
}

function onSignInput(s) {

}