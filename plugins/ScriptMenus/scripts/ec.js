

function onCommand(sender, label, args){
	
	sync(function() {
        sender.performCommand('ec open');
    });
}

