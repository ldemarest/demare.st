// url animation

function to (){
	for(var i = 0; i < 100; i++){
		var url = "luke";
		var pre = Array(i).join("_");
		var post = Array(100 - i).join("_");
		url = pre + url + post;
		window.history.pushState({},'',url);
		if(i == 99){
			fro();
		}
	}
}

function fro(){
		for(var i = 0; i < 100; i++){
		var url = "luke";
		var pre = Array(100 - i).join("_");
		var post = Array(i).join("_");
		url = pre + url + post;
		window.history.pushState({},'',url);
		if(i == 99){
			to();
		}
	}
}
