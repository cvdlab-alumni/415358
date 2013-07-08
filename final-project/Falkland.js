var domain3 = DOMAIN([[0,1],[0,2*PI]])([30,30]);

var colorB = [255,255,255, 0.9];
var colorT = [210/255,210/255,210/255];


//#######CORPUS#######//

var dx = 3;

var p0 = [[3.13-dx, 0, 5.65], [3.14-dx, 0, 5.56], [3.17-dx, 0, 5.42], [3.3-dx, 0, 5.41]];
var profile0 = BEZIER(S0)(p0);
var mapping0 = ROTATIONAL_SURFACE(profile0);
var l0 = COLOR([95/255,95/255,95/255])(MAP(mapping0)(domain3));

var torusSurface0 = COLOR(colorT)(T([2])([5.41])(TORUS_SURFACE([0.01, 0.3])([40,20])));

var p1 = [[3.3-dx, 0, 5.4], [3.31-dx, 0, 5.17], [3.29-dx, 0, 4.96], [3.52-dx, 0, 4.81]];
var profile1 = BEZIER(S0)(p1);
var mapping1 = ROTATIONAL_SURFACE(profile1);
var l1 = COLOR(colorB)(MAP(mapping1)(domain3));

var torusSurface1 = COLOR(colorT)(T([2])([4.81])(TORUS_SURFACE([0.01, 0.52])([40,20])));

var p2 = [[3.52-dx, 0, 4.8], [3.26-dx, 0, 4.67], [3.24-dx, 0, 4.23], [3.46-dx, 0, 4.09]];
var profile2 = BEZIER(S0)(p2);
var mapping2 = ROTATIONAL_SURFACE(profile2);
var l2 = COLOR(colorB)(MAP(mapping2)(domain3));

var torusSurface2 = COLOR(colorT)(T([2])([4.09])(TORUS_SURFACE([0.01, 0.46])([40,20])));

var p3 = [[3.46-dx, 0, 4.08], [3.21-dx, 0, 3.96], [3.19-dx, 0, 3.02], [3.56-dx, 0, 3.01]];
var profile3 = BEZIER(S0)(p3);
var mapping3 = ROTATIONAL_SURFACE(profile3);
var l3 = COLOR(colorB)(MAP(mapping3)(domain3));

var torusSurface3 = COLOR(colorT)(T([2])([3.01])(TORUS_SURFACE([0.01, 0.56])([40,20])));

var p4 = [[3.56-dx, 0, 3], [3.17-dx, 0, 2.91], [3.26-dx, 0, 2.31], [3.52-dx, 0, 2.31]];
var profile4 = BEZIER(S0)(p4);
var mapping4 = ROTATIONAL_SURFACE(profile4);
var l4 = COLOR(colorB)(MAP(mapping4)(domain3));

var torusSurface4 = COLOR(colorT)(T([2])([2.31])(TORUS_SURFACE([0.01, 0.52])([40,20])));

var p5 = [[3.52-dx, 0, 2.3], [3.23-dx, 0, 2.28], [3.3-dx, 0, 1.87], [3.44-dx, 0, 1.88]];
var profile5 = BEZIER(S0)(p5);
var mapping5 = ROTATIONAL_SURFACE(profile5);
var l5 = COLOR(colorB)(MAP(mapping5)(domain3));

var torusSurface5 = COLOR(colorT)(T([2])([1.88])(TORUS_SURFACE([0.01, 0.44])([40,20])));

var p6 = [[3.44-dx, 0, 1.87], [3.16-dx, 0, 1.81], [3.24-dx, 0, 0.69], [3.42-dx, 0, 0.73]];
var profile6 = BEZIER(S0)(p6);
var mapping6 = ROTATIONAL_SURFACE(profile6);
var l6 = COLOR(colorB)(MAP(mapping6)(domain3));

var torusSurface6 = COLOR(colorT)(T([2])([0.73])(TORUS_SURFACE([0.01, 0.42])([40,20])));

var solid = STRUCT([l0,l1,l2,l3,l4,l5,l6,torusSurface0,torusSurface1,torusSurface2,torusSurface3,torusSurface4,torusSurface5,torusSurface6]);

//DRAW(solid);

//#######TUBE#######//

var circle = EXTRUDE([5.4])(CIRCLE(0.025)(32));

var cylinder = COLOR([0.37,0.37,0.37])(T([2])([5.1])(EXTRUDE([0.3])(DISK(0.05)([30,30]))));

//DRAW(STRUCT([circle,cylinder]));

//#######DISK_UP#######//

var disk = COLOR([0.37,0.37,0.37])(T([2])([5.65])(DISK(0.13)([30,30])));

//DRAW(STRUCT([l0,disk]));

//######BASE#######//

var base = COLOR([0.37,0.37,0.37])(EXTRUDE([0.025])(DISK(0.44)([30,30])));

//DRAW(base);

var falkland = STRUCT([solid,circle,cylinder,disk,base]);

DRAW(falkland);