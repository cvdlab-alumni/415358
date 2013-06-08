function exportLAR(model) {
	var vertici = model[0];
	var facce = model[1];
	var string = "";
	for (var i=0; i<vertici.length; i++) {
		string = string + "v" + i + ": ";
		if (vertici[i].length === 3) {
			string += vertici[i][0] + " " + vertici[i][1] + " " + vertici[i][2];
		} else {
			string += vertici[i][0] + " " + vertici[i][1] + "  0";
		}
		string += "\n";
	}
	string += "\n";
    
	for (var j=0; j<facce.length; j++) {
		string = string + "fv" + j + ": ";
		for (var k=0; k<facce[j].length; k++) {
			string += facce[j][k] + " ";
		};
		string += "\n";
	}
	return string;
}