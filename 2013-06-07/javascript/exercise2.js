var mappaPuntiControllo = {};

var dimX = 50;
var dimY = 20;
var dislCollina = 10;
var dislMontagna = 40;
var numPart = 80;
var puntiCont = 80;
var domain = PROD1x1([INTERVALS(1)(32),INTERVALS(1)(32)]);

function collina(dislivelloCollina) {
	return Math.random()*dislivelloCollina;
}

function montagna(dislivelloMontagna) {
	var fact = Math.random();
	if (fact > 0.5) {
		return fact*dislivelloMontagna;
	}
	return -(fact*dislivelloMontagna);
}

function createKey(dimX, dimY) {
	return (dimX+"/"+dimY);
}

function terrainModel(dimX,dimY,dislivelloCollina,dislivelloMontagna,numeroPartizioni,puntiControllo) {
    
	var xScenarioPianeggiante = (dimX/3);
	var yScenarioPianeggiante = (dimY/3);
    
	var xScenarioCollina = (dimX*(3/4));
	var yScenarioCollina = (dimY*(3/4));
    
	var arrayCurve = new Array();
    
	for (var i=0; i<=dimX; i=i+(dimX/numeroPartizioni)) {
        
		if (i===0 || i===dimX) {
			arrayCurve.push(BEZIER(S0)([[i,0,0],[i,dimY,0]]));
		}
        
		else {
            
			var arrayPuntiControllo = new Array();
            
			var lastJ = 0;
			for (var j=0; j<=dimY; j=j+(dimY/puntiControllo)) {
                
				if (j===0 || j===dimY) {
					arrayPuntiControllo.push([i,j,0]);
					mappaPuntiControllo[createKey(i, j)] = 0;
				}
                
				else {
                    
					if (i < xScenarioPianeggiante && j < yScenarioPianeggiante) {
						arrayPuntiControllo.push([i,j,0]);
						mappaPuntiControllo[createKey(i, j)] = 0;
					}
                    
					else if (i < xScenarioCollina && j < yScenarioCollina) {
						var z = collina(dislivelloCollina);
						arrayPuntiControllo.push([i,j,z]);
						mappaPuntiControllo[createKey(i, j)] = z;
					}
                    
					else {
						var z = montagna(dislivelloMontagna)
						arrayPuntiControllo.push([i,j,z]);
						mappaPuntiControllo[createKey(i, j)] = z;
					}
				}
                
				lastJ += j;
			}
            
			if (lastJ !== dimY) {
				arrayPuntiControllo.push([i,dimY,0]);
				mappaPuntiControllo[createKey(i, dimY)] = 0;
			}
            
			arrayCurve.push(BEZIER(S0)(arrayPuntiControllo));
            
		}
        
	}
	if (i>dimX) {
		arrayCurve.push(BEZIER(S0)([[dimX,0,0],[dimX,dimY,0]]));
	}
    
	return COLOR([153/255,51/255,0])(MAP(BEZIER(S1)(arrayCurve))(domain));
    
}


var model = terrainModel(dimX,dimY,dislCollina,dislMontagna,numPart,puntiCont);

function lake(dimX,dimY) { 
	var lago = COLOR([0,204/255,204/255])(CUBOID([(dimX/2),(dimY/2),1]));
	return lago;
}

var lago = lake(dimX,dimY);

DRAW(STRUCT([model,lago]));