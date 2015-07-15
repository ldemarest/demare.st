// url animation

function to (){
	for(var i = 0; i < 100; i++){
		var url = Array(i).join("_") + "luke" + Array(100 - i).join("_");
		window.history.pushState({},'',url);
		if(i == 99){
			fro();
		}
	}
}

function fro(){
	for(var i = 0; i < 100; i++){
		var url = Array(100 - i).join("_") + "luke" + Array(i).join("_")
		window.history.pushState({},'',url);
		if(i == 99){
			to();
		}
	}
}
