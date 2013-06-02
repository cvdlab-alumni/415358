//PROFILO

var domain = INTERVALS(1)(15);
var domain2 = DOMAIN([[0, 1],[0, 1]])([15, 15]);

var color = [0.975,0.975,0.975];


var p00 = [[18, 4, 0], [14, 0, 0], [0, -7, 0], [-7, 0, 0]];
var p01 = [[14, 0, 0], [11.3, 1, 0], [-5, 0, 0], [-0.5, 0.5, 0]];
var p07 = [[14, 8, 0], [18, 4, 0], [7, 0, 0], [0, -7, 0]];

var c00 = CUBIC_HERMITE(S0)(p00);
var c01 = CUBIC_HERMITE(S0)(p01);
var c07 = CUBIC_HERMITE(S0)(p07);

var curve00 = MAP(c00)(domain);
var curve01 = MAP(c01)(domain);
var curve07 = MAP(c07)(domain);

var r = 3.6;
var divs = 32;
var circleDx = T([0, 1])([14, 4])(CIRCLE(r)(divs));

var rightSide = STRUCT([curve00, curve01, curve07]);

var leftSide = T([0])([18])(ROTATE([0, 2])(PI)(rightSide));

var p02a = [[11.3, 1, 0], [6.7, 1, 0], [-0.5, 0.5, 0], [0.5, -0.5, 0]];
var c02a = CUBIC_HERMITE(S0)(p02a);
var downSide = MAP(c02a)(domain);

var p02b = [[11.3, 8, 0], [6.7, 8, 0], [-0.5, 0, 0], [0.5, 0, 0]];
var c02b = CUBIC_HERMITE(S0)(p02b);

var sup7 = BEZIER(S1)([c02b, c02a]);

var surf7 = MAP(sup7)(domain2);


var p06 = [[4, 8, 0], [14, 8, 0], [7, 0, 0], [7, 0, 0]];

var c06 = CUBIC_HERMITE(S0)(p06);

var upSide = MAP(c06)(domain);

//DRAW(STRUCT([rightSide, downSide, leftSide, upSide, circleDx]));



//TASTO VERDE

var diffX = -1.7
var domainBotton = DOMAIN([[0,1],[0,2*PI]])([50, 50]);

var profileG = BEZIER(S0)([[0+diffX, 0, 0], [0+diffX, 0, 0.3], [0.15+diffX, 0, 0.5], [1.7+diffX, 0, 0.5]]);
var mappingG = ROTATIONAL_SURFACE(profileG);
var surfaceG = T([0,1,2])([12.3,4,1.6])(S([0,1,2])([0.4,0.4,0.4])(COLOR([0, 0.66, 0.42])(MAP(mappingG)(domainBotton))));


//TASTO BLU

var profileB = BEZIER(S0)([[0+diffX, 0, 0], [0+diffX, 0, 0.3], [0.15+diffX, 0, 0.5], [1.7+diffX, 0, 0.5]]);
var mappingB = ROTATIONAL_SURFACE(profileB);
var surfaceB = T([0,1,2])([14,5.7,1.6])(S([0,1,2])([0.4,0.4,0.4])(COLOR([0, 0, 1])(MAP(mappingB)(domainBotton))));


//TASTO ROSSO

var profileR = BEZIER(S0)([[0+diffX, 0, 0], [0+diffX, 0, 0.3], [0.15+diffX, 0, 0.5], [1.7+diffX, 0, 0.5]]);
var mappingR = ROTATIONAL_SURFACE(profileR);
var surfaceR = T([0,1,2])([15.7,4,1.6])(S([0,1,2])([0.4,0.4,0.4])(COLOR([1, 0, 0])(MAP(mappingR)(domainBotton))));


//TASTO GIALLO

var profileY = BEZIER(S0)([[0+diffX, 0, 0], [0+diffX, 0, 0.3], [0.15+diffX, 0, 0.5], [1.7+diffX, 0, 0.5]]);
var mappingY = ROTATIONAL_SURFACE(profileY);
var surfaceY = T([0,1,2])([14,2.3,1.6])(S([0,1,2])([0.4,0.4,0.4])(COLOR([1, 0.85, 0])(MAP(mappingY)(domainBotton))));


var bottoni = STRUCT([surfaceG, surfaceB, surfaceR, surfaceY]);

//UP

var p03 = [[4, 0, 0], [6.7, 1, 0], [5, 0, 0], [0.5, 0.5, 0]];
var p04 = [[0, 4, 0], [4, 0, 0], [0, -7, 0], [7, 0, 0]];
var p05 = [[4, 8, 0], [0, 4, 0], [-7, 0, 0], [0, -7, 0]];

var c04 = CUBIC_HERMITE(S0)(p04);
var c03 = CUBIC_HERMITE(S0)(p03);
var c05 = CUBIC_HERMITE(S0)(p05);

//var curve04 = MAP(c04)(domain);
//var curve03 = MAP(c03)(domain);
//var curve05 = MAP(c05)(domain);

//var rightSide = STRUCT([curve04, COLOR(color)(curve03), curve05]);

//DRAW(rightSide);

var q01 = [[4, 4, 0]];
var q02 = [[4, 1, 0]];
var q03 = [[14, 4, 0]];
var q04 = [[14, 1, 0]];

var c101 = BEZIER(S0)(q01);
var c102 = BEZIER(S0)(q02);
var c103 = BEZIER(S0)(q03);
var c104 = BEZIER(S0)(q04);

var sup1 = BEZIER(S1)([c04, c101]);
var sup2 = BEZIER(S1)([c05, c101]);
var sup3 = BEZIER(S1)([c03, c102]);
var sup4 = BEZIER(S1)([c07, c103]);
var sup5 = BEZIER(S1)([c00, c103]);
var sup6 = BEZIER(S1)([c01, c104]);

var surf1 = MAP(sup1)(domain2);
var surf2 = MAP(sup2)(domain2);
var surf3 = MAP(sup3)(domain2);
var surf4 = MAP(sup4)(domain2);
var surf5 = MAP(sup5)(domain2);
var surf6 = MAP(sup6)(domain2);

var dx = 2.7;
var dy = 7;
var dz = 0;

var cuboid1 = T([0,1])([4,1])(COLOR([0.99,0.99,0.99])(CUBOID([dx, dy, dz])));
var cuboid2 = T([0,1])([11.3,1])(COLOR([0.99,0.99,0.99])(CUBOID([dx, dy, dz])));
var supCurve = COLOR(color)(STRUCT([surf1, surf2, surf3, surf4, surf5, surf6, surf7]))
var front = STRUCT([supCurve, cuboid1, cuboid2]);
var end = T([2])([1.5])(front);
var unionFE = STRUCT([front, end]);

//BORDO

var domainBordo = DOMAIN([[0,1],[0,PI/2]])([100, 100]);
var domainBordoInt = DOMAIN([[0,1],[0,(43*PI)/180]])([100, 100]);

var raggio = 4;
var profileSup1 = BEZIER(S0)([[raggio, 0, 0], [raggio+0.2, 0, 0], [raggio+0.2, 0, 1.5], [raggio, 0, 1.5]]);
var mappingSup1 = ROTATIONAL_SURFACE(profileSup1);
var surfaceSup1 = T([0,1])([4,4])(R([0,1])([PI])(COLOR(color)(MAP(mappingSup1)(domainBordo))));
var surfaceSup2 = T([1])([8])(R([0,1])([-PI/2])(surfaceSup1));

var profileSup7a = BEZIER(S0)([[0, 0, 0], [0.2, 0, 0], [0.2, 1.5, 0], [0, 1.5, 0]]);
var profileSup7b = BEZIER(S0)([[0, 0, 10], [0.2, 0, 10], [0.2, 1.5, 10], [0, 1.5, 10]]);
var s7 = MAP(BEZIER(S1)([profileSup7a, profileSup7b]))(domain2);
var surfaceSup7 = COLOR(color)(T([0,1])([4,8])(R([0,1])([PI/2])(R([1,2])([PI/2])(s7))));

var surfaceSup4 = T([0,2])([18,1.5])(R([0,2])([PI])(surfaceSup2));
var surfaceSup5 = T([0,2])([18,1.5])(R([0,2])([PI])(surfaceSup1));

var surfaceSup3 = T([0])([8])(R([0,1])([PI/2])(T([0,1])([4,4])(R([0,1])([PI])(COLOR(color)(MAP(mappingSup1)(domainBordoInt))))));

var surfaceSup6 = T([0,2])([18,1.5])(R([0,2])([PI])(surfaceSup3));

var s8 = [[11.3, 1, 1.5], [6.7, 1, 1.5], [-0.5, 0.5, 0], [0.5, -0.5, 0]];
var s02a = CUBIC_HERMITE(S0)(s8);
var surfaceSup8 = COLOR(color)(MAP(BEZIER(S1)([s02a, c02a]))(domain2));

var superfici = STRUCT([surfaceSup1, surfaceSup2, surfaceSup3, surfaceSup4, surfaceSup5, surfaceSup6, surfaceSup7, surfaceSup8]);


//CERCHIO DESTRO

function arc(alpha, r, R, h) {
    var domain = DOMAIN([[0,alpha],[r,R]])([100,1]);
    var mapping = function (v) {
        var a = v[0];
        var r = v[1];

        return [r*COS(a), r*SIN(a)];
    }
    var model = MAP(mapping)(domain);

    var arco = EXTRUDE([h])(model);
    return arco;
}

var cerchioDx = T([0,1,2])([14,4,1.5])(COLOR([0.6,0.6,0.6])(arc(2*PI, 0, 3.5, 0.05)));

//TASTO DIREZIONALE

var horizontal = T([0, 1, 2])([2.5, 3.5, 1.5])(COLOR([0, 0, 0])(CUBOID([3, 1, 0.5])));
var vertical = T([0, 1,  2])([3.5, 2.5, 1.5])(COLOR([0, 0, 0])(CUBOID([1, 3, 0.5])));

var tastoDirezione = STRUCT([horizontal, vertical]);

//TASTI START E SELECT

var diffSx = -0.55
var diffSy = -3
var domainBotton = DOMAIN([[0, 1],[0, PI]])([50, 50]);

var profileS = BEZIER(S0)([[3+diffSy, 0, 0.55+diffSx], [3.4+diffSy, 0, 0.45+diffSx], [3.4+diffSy, 0, 3.1+diffSx], [3+diffSy, 0, 3+diffSx]]);
var mappingS = ROTATIONAL_SURFACE(profileS);
var surfaceSelect = T([0, 1,  2])([6.7, 2.8, 1.5])(R([0,1])([(3*PI)/4])(R([1,2])([PI/2])(COLOR([0, 0, 0])(S([0, 1, 2])([0.5, 0.5, 0.5])(MAP(mappingS)(domainBotton))))));
var surfaceStart = T([0])([2])(surfaceSelect);

var tastiSS = STRUCT([surfaceSelect, surfaceStart]);

//BASE TASTI

var baseTastiSX = T([1])([2])(R([0,1])([PI/2])(arc(PI, 0, 2, 0.05)));
var baseTastiDX = T([0,1])([6.4, 2])(R([0,1])([-PI/2])(arc(PI, 0, 2, 0.05)));
var baseCentro = CUBOID([6.4, 4, 0.05]);
var baseTastiSup = T([0,1,2])([12.85, 3.4, 1.55])(R([0, 1])([PI/4])(S([0,1,2])([0.4,0.4,0.4])(COLOR(color)(STRUCT([baseTastiSX, baseTastiDX, baseCentro])))));
var baseTastiDown = T([0,1,2])([14.47, 1.7, 1.55])(R([0, 1])([PI/4])(S([0,1,2])([0.4,0.4,0.4])(COLOR(color)(STRUCT([baseTastiSX, baseTastiDX, baseCentro])))));
var baseT = STRUCT([baseTastiSup,baseTastiDown]);

//LOGO

var logo1 = [[0.6, 3.5], [0.92, 4.64], [2.3, 3.44], [1.19, 3]];
var logo2 = [[0.6, 3.5], [0.57, 3.62], [1.21, 3.47], [1.19, 3]];
var clogo1 = BEZIER(S0)(logo1);
var clogo2 = BEZIER(S0)(logo2);

var modelLogo1 = EXTRUDE([0.1])(COLOR([0,0,1])(MAP(BEZIER(S1)([clogo1,clogo2]))(domain2)));


var logo3 = [[0.02, 2.85], [0.03, 3.25], [1.11, 3.25], [1.08, 2.85]];
var logo4 = [[0.02, 2.85], [0.03, 2.45], [1.11, 2.45], [1.08, 2.85]];
var clogo3 = BEZIER(S0)(logo3);
var clogo4 = BEZIER(S0)(logo4);

var modelLogo2 = EXTRUDE([0.1])(COLOR([0, 0.66, 0.42])(MAP(BEZIER(S1)([clogo3,clogo4]))(domain2)));

var modelLogo3 = COLOR([1,0,0])(T([0,1])([1,-0.4])(modelLogo1));
var modelLogo4 = COLOR([1, 0.85, 0])(T([0,1])([1,-0.4])(modelLogo2));

var logo = S([0,1])([0.8,0.8])(T([0,1,2])([6.3,5.1,1.5])(STRUCT([modelLogo1, modelLogo2, modelLogo3, modelLogo4])));


var model = STRUCT([bottoni, unionFE, superfici, cerchioDx, tastoDirezione, tastiSS, baseT, logo]);
