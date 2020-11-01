function fibonacci(getal){
	var x = 0;
	var rekengetal = function(){
		return getal+=x
	}
	var rekenx = function(){
		return x+=getal
	}
	for (var i = 0; i < 10; i++) {
		rekengetal()
		document.write(getal + "<br>")
		rekenx()
		document.write(x + "<br>")
	}
}