Custom plugins for https://mywitchcraft.ru by NezuShin.

ScriptMenus - дохуя удобный плагин для кастомных меню, управляемых на JavaScript.
RecipeHelper - кастомныйе крафты. Работает как отдельно, так и имеет api.
ItemXuyna (Items.jar) - хуета, позволяющая загружать айтемы.
AuthTexturePack - загрузка ресурспака по команде /rp.
CustomEnderDragon - новый эндер дракон.
AnvilAPI - api, используемый во всё вышеперечисленном.
Vault - api, необходимый для загрузки ScriptMenus. spigotmc page: https://www.spigotmc.org/resources/vault.34315/
WorldEdit -  api, необходимый для загрузки некоторых айтемов и дракона. bukkit page: https://dev.bukkit.org/projects/worldedit
WorldGuard - Приваты. Необходим для загрузки некоторых айтемов. bukkit page: https://dev.bukkit.org/projects/worldguard
EssentialsX - Все основные команды (такие как home and spawn). Нужен для работы измерителя тпс. spigotmc page: https://www.spigotmc.org/resources/essentialsx.9089/
Citizens - позволяет добавлять npc на сервер, а также необходим для работы гравипушки (Там просто проверка на то, является ли моб npc, а мне убирать лень). spigotmc page: https://www.spigotmc.org/resources/citizens.13811/

Советую юзать ядро https://yatopiamc.org/ для сервера.

Про айтемы:

Айтемы хранится в папке ItemXuyna/items/
Если найден обработчик (ItemXuyna/bin/) с таким же именем, то он будет загржен. 
Не думаю, что есть смысл объяснять, каким образом писать свои обработчики. 

Настройки айтема:
lore - то, что будет отображаться в описании в /crafts
texture-author - ник человека, который нарисовал текстуру
realisation-author - ник человека, кто написал реализацию для айтема.
prevent-anvil-enchant - запрет на энчант(или объединение) в наковальне.
prevent-netherite-upgrade - запрет на апгрейд в незерит.
clear-tag - очистить всю дату при крафте предмета.
hide - прятать из /crafts.
Всё остальное советую не трогать.

Чтобы предмет у игрока корректно определялся сервером, у него должен быть NBT тег CNBT, равный названию айтема в плагине. Он устанавливается автоматический при команде /items create
Получить NBT предмета - data get entity @p SelectedItem


Команды делал человек, который очень не любит админов, потому вы будете посланы нахуй, так что если что то будет неправильно, то вы будете посланы нахуй. 

Команды:
Выдать айтем - items give <item name>
Создать файл айтема из того, что находится в руке - items create <name> [BLOCK/ITEM]
Изменить сохранённый айтем. Для применения надо обязательно перезагрузить плагин - items edit <name> 
Удалить айтем - items remove <name>
Список загруженных айтемов - items list <name>

Задать кастомную прочность айтему - itemutil durability <число>
Задать имя - itemutil name <имя>
Установить цвет - itemutil color <red> <green> <blue>
И так далее. Думаю сами поймёте, табкомплиты работают.



Добавление крафта: 
1. Держим предмет в руке и пишем scriptmenu open craftEditor <номер крафта. Если он один, то не указываем>
2. Указываем крафт и нажимаем на кнопку done в меню.
3. Пишем /items reload 
4. Радуемся жизни


Инструкция по установке:
1. Ставим сервер. Гайд: https://www.youtube.com/watch?v=KWKFrpzKi_8&ab_channel=ClusterStorm
2. Кидаем всю хуету отсюда в папку plugins.
3. Рестартаем его.
4. Радуемся жизни.
