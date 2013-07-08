var domain = INTERVALS(1)(15);
var domain2 = DOMAIN([[0, 1],[0, 1]])([15, 15]);

var color = [1,204/255,0];

function chairFish(color) {
    
    var dy = 2.26;

    var p1 = [[3.58, 4.46, 0], [3.57, 4.9, 0], [4.25, 4.9, 0], [4.24, 4.46, 0]];
    var b1 = BEZIER(S0)(p1);
    var c1 = MAP(b1)(domain);

    var p2 = [[3.58, 4.46, 0], [3.57, 4.02, 0], [4.25, 4.02, 0], [4.24, 4.46, 0]];
    var b2 = BEZIER(S0)(p2);
    var c2 = MAP(b2)(domain);

    var p3 = [[3.46, 4.46, 0], [3.45, 5.08, 0], [4.37, 5.08, 0], [4.36, 4.46, 0]];
    var b3 = BEZIER(S0)(p3);
    var c3 = MAP(b3)(domain);

    var p4 = [[3.46, 4.46, 0], [3.45, 3.84, 0], [4.37, 3.84, 0], [4.36, 4.46, 0]];
    var b4 = BEZIER(S0)(p4);
    var c4 = MAP(b4)(domain);

    var s1 = BEZIER(S1)([b1,b3]);
    var model1 = COLOR(color)(MAP(s1)(domain2));
    //DRAW(model1);

    var s2 = BEZIER(S1)([b2,b4]);
    var model2 = COLOR(color)(MAP(s2)(domain2));
    //DRAW(model2);

    var p5 = [[3.05, 4.01, 0], [3.34, 4.35, 0], [3.49, 4.09, 0], [3.69, 4.05, 0]];
    var b5 = BEZIER(S0)(p5);
    var c5 = MAP(b5)(domain);

    var p6 = [[2.77, 4.01, 0], [2.94, 4.25, 0], [3.18, 4.84, 0], [3.76, 4.11, 0]];
    var b6 = BEZIER(S0)(p6);
    var c6 = MAP(b6)(domain);

    var s3 = BEZIER(S1)([b5,b6]);
    var model3 = COLOR(color)(MAP(s3)(domain2));
    //DRAW(model3);

    var p7 = [[2.94, 4.25, 0], [3.19, 4.4, 0], [3.35, 4.37, 0], [3.55, 4.28, 0]];
    var b7 = BEZIER(S0)(p7);
    var c7 = MAP(b7)(domain);

    var p8 = [[2.94, 4.25, 0], [3.19, 4.69, 0], [3.18, 4.68, 0], [3.57, 4.79, 0]];
    var b8 = BEZIER(S0)(p8);
    var c8 = MAP(b8)(domain);

    var s4 = BEZIER(S1)([b7,b8]);
    var model4 = COLOR(color)(MAP(s4)(domain2));
    //DRAW(model4);

    var p9 = [[3.9, 2.66+dy, 0], [3.66, 2.7+dy, 0], [3.41, 2.4+dy, 0], [3.17, 2.46+dy, 0]];
    var b9 = BEZIER(S0)(p9);
    var c9 = MAP(b9)(domain);

    var s5 = BEZIER(S1)([b9,[3.01, 2.21+dy, 0]]);
    var model5 = COLOR(color)(MAP(s5)(domain2));
    //DRAW(model5);


    var p10 = [[2.42, 3.32+dy, 0], [2.61, 2.69+dy, 0], [2.86, 2.41+dy, 0], [3.01, 2.21+dy, 0]];
    var b10 = BEZIER(S0)(p10);
    var c10 = MAP(b10)(domain);

    var p11 = [[2.51, 3.37+dy, 0], [2.51, 3.37+dy, 0], [2.42, 3.32+dy, 0], [2.42, 3.32+dy, 0]];
    var b11 = BEZIER(S0)(p11);
    var c11 = MAP(b11)(domain);

    var p12 = [[2.51, 3.37+dy, 0], [2.72, 2.92+dy, 0], [2.96, 2.45+dy, 0], [3.17, 2.46+dy, 0]];
    var b12 = BEZIER(S0)(p12);
    var c12 = MAP(b12)(domain);

    var s6 = BEZIER(S1)([b10,[3.01, 2.21+dy, 0]]);
    var model6 = COLOR(color)(MAP(s6)(domain2));
    //DRAW(model6);

    var s7 = BEZIER(S1)([b11,[3.01, 2.21+dy, 0]]);
    var model7 = COLOR(color)(MAP(s7)(domain2));
    //DRAW(model7);

    var s8 = BEZIER(S1)([b12,[3.01, 2.21+dy, 0]]);
    var model8 = COLOR(color)(MAP(s8)(domain2));
    //DRAW(model8);

    var p13 = [[2.77, 1.75+dy, 0], [2.87, 1.96+dy, 0], [3.01, 2.07+dy, 0], [3.01, 2.21+dy, 0]];
    var b13 = BEZIER(S0)(p13);
    var c13 = MAP(b13)(domain);

    var p14 = [[3.19, 4.37, 0], [3.19, 4.62, 0]];
    var b14 = BEZIER(S0)(p14);
    var c14 = MAP(b14)(domain);

    var s9 = BEZIER(S1)([b13,b14]);
    var model9 = COLOR(color)(MAP(s9)(domain2));
    //DRAW(model9);

    var rightSide = STRUCT([model1,model2,model3,model4,model5,model6,model7,model8,model9]);
    var leftSide = T([2])([0.89])(rightSide);

    var p15 = [[3.05, 1.75+dy, 0], [2.87, 1.75+dy, 0], [2.94, 1.75+dy, 0], [2.77, 1.75+dy, 0]];
    var b15 = BEZIER(S0)(p15);
    var c15 = MAP(b15)(domain);

    var p9b = [[3.9, 2.66+dy, 0.89], [3.66, 2.7+dy, 0.89], [3.41, 2.4+dy, 0.89], [3.17, 2.46+dy, 0.89]];
    var b9b = BEZIER(S0)(p9b);
    var c9b = MAP(b9b)(domain);

    var s10 = BEZIER(S1)([b9,b9b]);
    var model10 = COLOR(color)(MAP(s10)(domain2));
    //DRAW(model10);

    var p12b = [[2.51, 3.37+dy, 0.89], [2.72, 2.92+dy, 0.89], [2.96, 2.45+dy, 0.89], [3.17, 2.46+dy, 0.89]];
    var b12b = BEZIER(S0)(p12b);
    var c12b = MAP(b12b)(domain);

    var s11 = BEZIER(S1)([b12,b12b]);
    var model11 = COLOR(color)(MAP(s11)(domain2));
    //DRAW(model11);

    var p11b = [[2.51, 3.37+dy, 0.89], [2.51, 3.37+dy, 0.89], [2.42, 3.32+dy, 0.89], [2.42, 3.32+dy, 0.89]];
    var b11b = BEZIER(S0)(p11b);
    var c11b = MAP(b11b)(domain);

    var s12 = BEZIER(S1)([b11,b11b]);
    var model12 = COLOR(color)(MAP(s12)(domain2));
    //DRAW(model12);

    var p15b = [[3.05, 1.75+dy, 0.89], [2.87, 1.75+dy, 0.89], [2.94, 1.75+dy, 0.89], [2.77, 1.75+dy, 0.89]];
    var b15b = BEZIER(S0)(p15b);
    var c15b = MAP(b15b)(domain);

    var s13 = BEZIER(S1)([b15,b15b]);
    var model13 = COLOR(color)(MAP(s13)(domain2));
    //DRAW(model13);

    var p5b = [[3.05, 4.01, 0.89], [3.34, 4.35, 0.89], [3.49, 4.09, 0.89], [3.69, 4.05, 0.89]];
    var b5b = BEZIER(S0)(p5b);
    var c5b = MAP(b5b)(domain);

    var s14 = BEZIER(S1)([b5,b5b]);
    var model14 = COLOR(color)(MAP(s14)(domain2));
    //DRAW(model14);

    var p4b = [[3.46, 4.46, 0.89], [3.45, 3.84, 0.89], [4.37, 3.84, 0.89], [4.36, 4.46, 0.89]];
    var b4b = BEZIER(S0)(p4b);
    var c4b = MAP(b4b)(domain);

    var s15 = BEZIER(S1)([b4,b4b]);
    var model15 = COLOR(color)(MAP(s15)(domain2));
    //DRAW(model15);

    var p3b = [[3.46, 4.46, 0.89], [3.45, 5.08, 0.89], [4.37, 5.08, 0.89], [4.36, 4.46, 0.89]];
    var b3b = BEZIER(S0)(p3b);
    var c3b = MAP(b3b)(domain);

    var s16 = BEZIER(S1)([b3,b3b]);
    var model16 = COLOR(color)(MAP(s16)(domain2));
    //DRAW(model16);

    var p1b = [[3.58, 4.46, 0.89], [3.57, 4.9, 0.89], [4.25, 4.9, 0.89], [4.24, 4.46, 0.89]];
    var b1b = BEZIER(S0)(p1b);
    var c1b = MAP(b1b)(domain);

    var s17 = BEZIER(S1)([b1,b1b]);
    var model17 = COLOR([1.5,1.5,1.5])(MAP(s17)(domain2));
    //DRAW(model17);

    var p2b = [[3.58, 4.46, 0.89], [3.57, 4.02, 0.89], [4.25, 4.02, 0.89], [4.24, 4.46, 0.89]];
    var b2b = BEZIER(S0)(p2b);
    var c2b = MAP(b2b)(domain);

    var s18 = BEZIER(S1)([b2,b2b]);
    var model18 = COLOR([1.5,1.5,1.5])(MAP(s18)(domain2));
    //DRAW(model18);

    var solid = STRUCT([model10,model11,model12,model13,model14,model15,model16,model17,model18]);
    //DRAW(solid);

    var fish_chair = STRUCT([rightSide,leftSide,solid]);
    
    return fish_chair;
}

DRAW(chairFish(color));