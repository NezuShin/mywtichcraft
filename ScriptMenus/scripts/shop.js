function onClick(event)
{
	slot = event.getSlot();
	if(slot==15)
		sync(function() {
        player.performCommand('shop open red');
		});
	if(slot==10)
		sync(function() {
        player.performCommand('shop open blocks');
		});
	if(slot==14)
		sync(function() {
        player.performCommand('shop open materials');
		});
	if(slot==22)
		sync(function() {
        player.performCommand('shop open other');
		});
	if(slot==11)
		sync(function() {
        player.performCommand('shop open dec1');
		});
	if(slot==12)
		sync(function() {
        player.performCommand('shop open dec2');
		});
	if(slot==16)
		sync(function() {
        player.performCommand('shop open tp');
		});
	if(slot==13)
		sync(function() {
        player.performCommand('shop open food');
		});

}