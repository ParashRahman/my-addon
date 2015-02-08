var img = document.getElementById('mainImage');
var fdes = document.getElementById('firstDes')[0];
var sdes = document.getElementById('secondDes')[0];

self.port.on("get-prefs", function(prefs) {
    var tI = prefs[0];
    var d1 = prefs[1];
    var d2 = prefs[2];
    var tP = prefs[3];
    var bC = prefs[4];

    self.port.on("prefchange", function(data) {
	fdes.innerhtml = d1;
	console.log(d1);
	sdes.innerhtml = d2;
	console.log(d2);
    });
});