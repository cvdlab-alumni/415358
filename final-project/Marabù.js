var domain = INTERVALS(1)(15);
var domain2 = DOMAIN([[0, 1],[0, 1]])([15, 15]);
var domain3 = DOMAIN([[0,1],[0,2*PI]])([30,30]);

//#######LEG1#######//
var color = [150/255,75/255,0];

function tableM(color){
    
    var p1 = [[0.41, 3.57, 0], [0.66, 4.15, 0], [0.81, 4.46, 0], [0.95, 4.81, 0]];
    var b1 = BEZIER(S0)(p1);
    var c1 = MAP(b1)(domain);

    var p2 = [[0.51, 3.57, 0], [0.73, 4.08, 0], [0.9, 4.45, 0], [1.05, 4.81, 0]];
    var b2 = BEZIER(S0)(p2);
    var c2= MAP(b2)(domain);

    var p3 = [[0.74, 5.55, 0], [0.81, 5.35, 0], [0.89, 5.17, 0], [0.95, 5, 0]];
    var b3 = BEZIER(S0)(p3);
    var c3 = MAP(b3)(domain);

    var p4 = [[0.84, 5.55, 0], [0.9, 5.37, 0], [0.96, 5.23, 0], [1.05, 5, 0]];
    var b4 = BEZIER(S0)(p4);
    var c4 = MAP(b4)(domain);

    var p5 = [[1.05, 4.81, 0], [1.07, 4.86, 0], [1.08, 4.92, 0], [1.05, 5, 0]];
    var b5 = BEZIER(S0)(p5);
    var c5 = MAP(b5)(domain);

    var p6 = [[0.95, 4.81, 0], [0.97, 4.86, 0], [0.98, 4.92, 0], [0.95, 5, 0]];
    var b6 = BEZIER(S0)(p6);
    var c6 = MAP(b6)(domain);

    //DRAW(STRUCT([c1,c2,c3,c4,c5,c6]));

    var pSide12 = [b1,b2];
    var bSide12 = BEZIER(S1)(pSide12);
    var cSide12 = MAP(bSide12)(domain2);

    var pSide34 = [b3,b4];
    var bSide34 = BEZIER(S1)(pSide34);
    var cSide34 = MAP(bSide34)(domain2);

    var pSide56 = [b5,b6];
    var bSide56 = BEZIER(S1)(pSide56);
    var cSide56 = MAP(bSide56)(domain2);

    //DRAW(STRUCT([cSide12,cSide34,cSide56]));

    var leg1a = COLOR(color)(STRUCT([cSide12,cSide34,cSide56]));

    //DRAW(leg1a);

    var p7 = [[0.41, 3.57, 0.1], [0.66, 4.15, 0.1], [0.81, 4.46, 0.1], [0.95, 4.81, 0.1]];
    var b7 = BEZIER(S0)(p7);
    var b17 = BEZIER(S1)([b1,b7]);
    var c17 = MAP(b17)(domain2);

    var p8 = [[0.51, 3.57, 0.1], [0.73, 4.08, 0.1], [0.9, 4.45, 0.1], [1.05, 4.81, 0.1]];
    var b8 = BEZIER(S0)(p8);
    var b28= BEZIER(S1)([b2,b8]);
    var c28= MAP(b28)(domain2);

    var p9 = [[0.74, 5.55, 0.1], [0.81, 5.35, 0.1], [0.89, 5.17, 0.1], [0.95, 5, 0.1]];
    var b9 = BEZIER(S0)(p9);
    var b39= BEZIER(S1)([b3,b9]);
    var c39 = MAP(b39)(domain2);

    var p10 = [[0.84, 5.55, 0.1], [0.9, 5.37, 0.1], [0.96, 5.23, 0.1], [1.05, 5, 0.1]];
    var b10 = BEZIER(S0)(p10);
    var b410= BEZIER(S1)([b4,b10]);
    var c410 = MAP(b410)(domain2);

    var p11 = [[1.05, 4.81, 0.1], [1.07, 4.86, 0.1], [1.08, 4.92, 0.1], [1.05, 5, 0.1]];
    var b11 = BEZIER(S0)(p11);
    var b511= BEZIER(S1)([b5,b11]);
    var c511 = MAP(b511)(domain2);

    var p12 = [[0.95, 4.81, 0.1], [0.97, 4.86, 0.1], [0.98, 4.92, 0.1], [0.95, 5, 0.1]];
    var b12 = BEZIER(S0)(p12);
    var b612 = BEZIER(S1)([b6,b12]);
    var c612 = MAP(b612)(domain2);

    var solidLeg = COLOR(color)(STRUCT([c17,c28,c39,c410,c511,c612]));


    var leg1b = T([2])([0.1])(leg1a);


    var leg1 = T([1])([-3.57])(STRUCT([leg1a,leg1b,solidLeg]));

    //DRAW(leg1);


//########LEG2#######//


    var p13 = [[3.03, 4.97, 0], [3.03, 4.7, 0], [3.03, 4.3, 0], [3.03, 3.57, 0]];
    var b13 = BEZIER(S0)(p13);
    var c13 = MAP(b13)(domain);

    var p14 = [[3.13, 4.97, 0], [3.13, 4.6, 0], [3.13, 4.18, 0], [3.13, 3.57, 0]];
    var b14 = BEZIER(S0)(p14);
    var c14 = MAP(b14)(domain);

    var p15 = [[2.92, 5.19, 0], [2.82, 5.28, 0], [2.72, 5.39, 0], [2.56, 5.55, 0]];
    var b15 = BEZIER(S0)(p15);
    var c15 = MAP(b15)(domain);

    var p16 = [[3.03, 5.19, 0], [2.92, 5.3, 0], [2.82, 5.4, 0], [2.67, 5.55, 0]];
    var b16 = BEZIER(S0)(p16);
    var c16 = MAP(b16)(domain);

    var p17 = [[3.03, 5.19, 0], [3.06, 5.15, 0], [3.13, 5.09, 0], [3.13, 4.97, 0]];
    var b17 = BEZIER(S0)(p17);
    var c17 = MAP(b17)(domain);

    var p18 = [[2.92, 5.19, 0], [2.99, 5.11, 0], [3.03, 5.11, 0], [3.03, 4.97, 0]];
    var b18 = BEZIER(S0)(p18);
    var c18 = MAP(b18)(domain);

    //DRAW(STRUCT([c13,c14,c15,c16,c17,c18]));


    var pSide13_14 = [b13,b14];
    var bSide13_14 = BEZIER(S1)(pSide13_14);
    var cSide13_14 = MAP(bSide13_14)(domain2);

    var pSide15_16 = [b15,b16];
    var bSide15_16 = BEZIER(S1)(pSide15_16);
    var cSide15_16 = MAP(bSide15_16)(domain2);

    var pSide17_18 = [b17,b18];
    var bSide17_18 = BEZIER(S1)(pSide17_18);
    var cSide17_18 = MAP(bSide17_18)(domain2);

    var leg2a = COLOR(color)(STRUCT([cSide13_14,cSide15_16,cSide17_18]));

    //DRAW(leg2a);

    var p19 = [[3.03, 4.97, 0.1], [3.03, 4.7, 0.1], [3.03, 4.3, 0.1], [3.03, 3.57, 0.1]];
    var b19 = BEZIER(S0)(p19);
    var b13_19 = BEZIER(S1)([b13,b19]);
    var c13_19 = MAP(b13_19)(domain2);

    var p20 = [[3.13, 4.97, 0.1], [3.13, 4.6, 0.1], [3.13, 4.18, 0.1], [3.13, 3.57, 0.1]];
    var b20 = BEZIER(S0)(p20);
    var b14_20 = BEZIER(S1)([b14,b20]);
    var c14_20 = MAP(b14_20)(domain2);

    var p21 = [[2.92, 5.19, 0.1], [2.82, 5.28, 0.1], [2.72, 5.39, 0.1], [2.56, 5.55, 0.1]];
    var b21 = BEZIER(S0)(p21);
    var b15_21 = BEZIER(S1)([b15,b21]);
    var c15_21 = MAP(b15_21)(domain2);

    var p22 = [[3.03, 5.19, 0.1], [2.92, 5.3, 0.1], [2.82, 5.4, 0.1], [2.67, 5.55, 0.1]];
    var b22 = BEZIER(S0)(p22);
    var b16_22 = BEZIER(S1)([b16,b22]);
    var c16_22 = MAP(b16_22)(domain2);

    var p23 = [[3.03, 5.19, 0.1], [3.06, 5.15, 0.1], [3.13, 5.09, 0.1], [3.13, 4.97, 0.1]];
    var b23 = BEZIER(S0)(p23);
    var b17_23 = BEZIER(S1)([b17,b23]);
    var c17_23 = MAP(b17_23)(domain2);

    var p24 = [[2.92, 5.19, 0.1], [2.99, 5.11, 0.1], [3.03, 5.11, 0.1], [3.03, 4.97, 0.1]];
    var b24 = BEZIER(S0)(p24);
    var b18_24 = BEZIER(S1)([b18,b24]);
    var c18_24 = MAP(b18_24)(domain2);

    var solidLeg2 = COLOR(color)(STRUCT([c13_19,c14_20,c15_21,c16_22,c17_23,c18_24]));


    var leg2b = T([2])([0.1])(leg2a);


    var leg2 = T([0,1,2])([-1.93,-3.57,0.11])(STRUCT([leg2a,leg2b,solidLeg2]));

    //DRAW(leg2);


//########BASE########//

    var dx = 7.92+0.6;
    var p25 = [[7.92-dx, 0, 0], [7.93-dx, 0, 0.11], [9.11-dx, 0, 0.11], [9.12-dx, 0, 0]];
    var profile1 = BEZIER(S0)(p25);
    var mapping1 = ROTATIONAL_SURFACE(profile1);
    var base = T([0,2])([0.81,0.1])(R([1,2])([-PI/2])(COLOR(color)(MAP(mapping1)(domain3))));

    var p26 = [[0, 0, 0], [0.2, 0, 0], [0.4, 0, 0], [0.6, 0, 0]];
    var profile2 = BEZIER(S0)(p26);
    var mapping2 = ROTATIONAL_SURFACE(profile2);
    var circle = T([0,2])([0.81,0.1])(R([1,2])([-PI/2])(COLOR(color)(MAP(mapping2)(domain3))));

    //DRAW(STRUCT([circle,base]));


//#######TABLE#######//


    var p27 = [[1.84, 4.63, 0], [3.35, 4.71, 0], [3.84, 2.7, 0], [1.84, 1.34, 0]];
    var b27 = BEZIER(S0)(p27);
    var c27 = MAP(b27)(domain);

    var p28 = [[1.84, 4.63, 0], [0.33, 4.71, 0], [-0.16, 2.7, 0], [1.84, 1.34, 0]];
    var b28 = BEZIER(S0)(p28);
    var c28 = MAP(b28)(domain);

    var pTable27_28 = [b27,b28];
    var bTable27_28 = BEZIER(S1)(pTable27_28);
    var cTableUp = COLOR(color)(MAP(bTable27_28)(domain2));

    //DRAW(cTableUp);


    var p29 = [[1.84, 4.63, 0.05], [3.35, 4.71, 0.05], [3.84, 2.7, 0.05], [1.84, 1.34, 0.05]];
    var b29 = BEZIER(S0)(p29);
    var b27_29 = BEZIER(S1)([b27,b29]);
    var c27_29 = MAP(b27_29)(domain2);

    var p30 = [[1.84, 4.63, 0.05], [0.33, 4.71, 0.05], [-0.16, 2.7, 0.05], [1.84, 1.34, 0.05]];
    var b30 = BEZIER(S0)(p30);
    var b28_30 = BEZIER(S1)([b28,b30]);
    var c28_30 = MAP(b28_30)(domain2);

    var solidTable = COLOR(color)(STRUCT([c27_29,c28_30]));

    var cTableDown = T([2])([0.05])(cTableUp);

    var tavola =   R([0,2])([-PI/2])(R([1,2])([PI/2])(T([0,1])([-1.84,-4.63])(STRUCT([cTableDown,cTableUp,solidTable]))));

    var tavolaT = T([1,2])([1.98,0.1])(S([0,1,2])([0.6,0.6,0.6])(tavola));

    //DRAW(tavolaT);

    var marabù = STRUCT([leg1,leg2,base,circle,tavolaT]);
    return marabù;
}

DRAW(tableM(color));

