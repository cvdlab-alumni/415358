var mappaPuntiControllo = {};

var dimX = 50;
var dimY = 20;
var dx = 2;
var dy = 3;
var num = 4;
var scenario = 1;
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

DRAW(model);

function lake(dimX,dimY) {
	var lago = COLOR([0,204/255,204/255])(CUBOID([(dimX/2),(dimY/2),1]));
	return lago;
}

DRAW(lake(dimX,dimY));


function tree(heightTrunk,heightFoliage,radius,angle,domain) {
	var trunk = COLOR([150/255,75/255,0])(EXTRUDE([heightTrunk])(DISK(radius)(angle)));
	var apex = [0,0,heightFoliage];
	var foliageProfile1 = BEZIER(S0)([[3*radius,0,0],[3*radius,4.2*radius,0],[-3*radius,4.2*radius,0],[-3*radius,0,0]]);
	var foliageProfile2 = BEZIER(S0)([[3*radius,0,0],[3*radius,-4.2*radius,0],[-3*radius,-4.2*radius,0],[-3*radius,0,0]]);
	var out1 = MAP(CONICAL_SURFACE(apex)(foliageProfile1))(domain);
	var out2 = MAP(CONICAL_SURFACE(apex)(foliageProfile2))(domain);
	var base = MAP(BEZIER(S1)([foliageProfile1,foliageProfile2]))(domain);
	var foliage = COLOR([34/255,139/255,34/255])(T([2])([heightTrunk])(STRUCT([out1,out2,base])));
	var tree = STRUCT([foliage,trunk]);
	return tree;
}


function splitF (key) {
	var coordinates = new Array();
	coordinates.push(key.split("/"));
	return coordinates;
}

function sorgenteAlbero (dimX,dimY,scenario) {
	var posizione = new Array();
	for(var k in mappaPuntiControllo) {
		var coor = splitF(k);
		if (scenario==0) {
			if (coor[0][0]<(dimX/3) && coor[0][1]<(dimY/3)) {
				var x = coor[0][0];
				var y = coor[0][1];
				posizione.push([x,y]);
			}
		}
		if (scenario==1) {
			if (coor[0][0]>(dimX/3) && coor[0][0]<((dimX*3)/4) && coor[0][1]<((dimY*3)/4)) {
				var x = coor[0][0];
				var y = coor[0][1];
				posizione.push([x,y]);
			}
		}
		if (scenario==2) {
			if (coor[0][0]>((dimX*3)/4) && coor[0][1]>((dimY*3)/4)) {
				var x = coor[0][0];
				var y = coor[0][1];
				posizione.push([x,y]);
			}
		}
	}
	return posizione;
}

var lista = sorgenteAlbero (dimX,dimY,scenario);
var c = 10;

function forestazione (listPos,cont) {
	var foresta = new Array();
	for(var i=0; i<=cont; i++) {
		var index = Math.floor(Math.random() * listPos.length);
		var coord = listPos[index];
		albero = T([0,1])([coord[0],coord[1]])(S([0,1,2])([0.1,0.1,0.1])(tree(70,7.5,1.5,30,domain)));
		foresta.push(albero);
	}
	return foresta;
}

var listforesta = forestazione (lista,c);

function view (listaforesta) {
	for (var i=1; i<listaforesta.length; i++) {
		DRAW(listaforesta[i]);
	}
}

view(listforesta);


function settlement (num) {
	var trasl = 0;
	var complesso = [];
	for(var i=0; i<num; i++) {
		var r = Math.random();
		var g = Math.random();
		var b = Math.random();
		var x = dx;
		var y = (Math.random()*dy)+1;
		var points = [[0,0],[x,0],[0,y],[x,y],[(x/2),y+(y/2)]];
		var cells = [[0,1,2],[1,3,2],[2,3,4]];
		var simplicialComplex = SIMPLICIAL_COMPLEX(points)(cells);
		var casa = COLOR([r,g,b])(T([0])([trasl])(R([1,2])([PI/2])(EXTRUDE([3])(simplicialComplex))));
		trasl = trasl+x+0.3;
		complesso.push(casa);
	}
	return STRUCT(complesso);
}

complesso1 = T([1])([6])(settlement(5));
complesso2 = T([0])([(num*(dx+0.3))+3])(complesso1);

complesso = T([0,1,2])([2,dimY/2,5])(S([0,1,2])([0.4,0.4,0.4])(STRUCT([complesso1,complesso2])));

DRAW(complesso);
