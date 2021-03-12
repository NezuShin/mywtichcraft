api для обработчиков меню в js
========================

Во всех js файлах работают фунции AbstractShell
`bungeeMove(player, ServerName)`
`setInterval(function(), ticks, interval)`
`setTimeout(function(), ticks)`
`clearTimeout(id)`
`stopAll()`
`openMenu(player, menuName, args)` - обязательно указать args, даже пустые
`getMoney(player, money)`
`hasMoney(player, money)`
`takeMoney(player, money)` - return boolean if success
`giveMoney(player, money)`
`sync(function())` - не рекомендуется использовать, только в крайнем сулчае
`die()` - надо, чтобы выходить из скрипта вне функций (при инициализации)
	
Констатны, которые работают везде:
 Bukkit
 Thread
 
Для получения класса Java используется `Java.type(class path)`
Те классы, которые изначально есть в скрипте: 
    `Material`
    `InventoryAction`
    `ClickType`
    `IntentoryType`
    `ItemStack`
    `AnvilSlot`
	
	
Меню:
------------------------
Доступные функции:
`closeMenu()`
`openMenu()` - в отличии от функии, предствленной выше, открывает именно это мнею
`input()` and `input(ItemStack)` - ввод через наковальню. ответ вернётся в функции `onInput(AnvilClickEvent)`
`setLocked(boolean)` - игнорирует закрытие меню
`locked()`
`setDontCancelList()` - слоты, в которые можно положить айтем
`getDontCancelList()`
	
Так же у обработчиков меню есть несколько констант:
   `inventory`
   `player`
   `args[]`


Методы, вызываемые при ивентах:
`function onClick(event){}` - InventoryClickEvent

`function onClose(event) {}` - InventoryCloseEvent

`function onQuit(event) {}` - PlayerQuitEvent

`function  onInput(event) {}` - AnvilClickEvent

Команды:
------------------------
Все обращения к командам происходят через метод `onCommand(sender, label, args)`

Отправителем команды может быть и Консоль(CommandSender). Делается это через /ScriptMenu execute <cmd> <args>