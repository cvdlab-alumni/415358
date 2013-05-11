//Exercise 2


domain2 = INTERVALS(1)(50)

//Vista laterale

bez1 =  [[0.39, 1.15], [0.15, 2.06], [1.27, 1.97], [1.76, 2.06]]
bez2 =[[1.76, 2.06], [2.84, 2.76], [3.34, 2.64], [4.57, 2.16]]
bez3 =[[4.57, 2.16], [4.55, 2.03], [5.69, 2.09], [5.27, 1.19]]
bez4 = [[5.27, 1.19], [4.98, 1.12], [4.88, 1.18], [4.88, 1.17]]
bez5 = [[4.88, 1.17], [4.91, 2.1], [3.78, 1.68], [4.03, 1.15]]
bez6 = [[4.03, 1.15], [3.05, 1.13], [2.43, 1.1], [1.9, 1.11]]
bez7 = [[1.9, 1.11], [1.98, 1.94], [0.86, 1.86], [1.03, 1.09]]
bez8 = [[1.03, 1.09], [0.76, 1.19], [0.51, 1.06], [0.39, 1.15]]


curv1 = MAP(BEZIER(S1)(bez1))(domain2)
curv2 = MAP(BEZIER(S1)(bez2))(domain2)
curv3 = MAP(BEZIER(S1)(bez3))(domain2)
curv4 = MAP(BEZIER(S1)(bez4))(domain2)
curv5 = MAP(BEZIER(S1)(bez5))(domain2)
curv6 = MAP(BEZIER(S1)(bez6))(domain2)
curv7 = MAP(BEZIER(S1)(bez7))(domain2)
curv8 = MAP(BEZIER(S1)(bez8))(domain2)

lato = T([2,3])([2.3,-1.14])(R([2,3])(PI/2)(STRUCT([curv1,curv2,curv3,curv4,curv5,curv6,curv7,curv8])))


//Vista fronte

bez9 = [[0.28, 4.45],[0.37, 4.52], [1.97, 4.56], [2.24, 4.43] ]
bez10 = [[2.24, 4.43], [2.37, 4.2], [2.33, 3.89], [2.23, 3.6]]
bez11 = [[2.23, 3.6], [1.35, 3.62], [0.56, 3.59], [0.29, 3.6]]
bez12 = [[0.29, 3.6], [0.16, 3.89], [0.11, 4.13], [0.28, 4.45]]

curv9 = MAP(BEZIER(S1)(bez9))(domain2)
curv10 = MAP(BEZIER(S1)(bez10))(domain2)
curv11 = MAP(BEZIER(S1)(bez11))(domain2)
curv12 = MAP(BEZIER(S1)(bez12))(domain2)

fronte = T([1,2,3])([1,1,-3.6])(R([1,2])(PI/2)(R([2,3])(PI/2)(STRUCT([curv9,curv10,curv11,curv12]))))


//Vista retro

bez13 = [[3.44, 4.47], [3.67, 4.56], [5.24, 4.53], [5.37, 4.48]]
bez14 = [[5.37, 4.48], [5.56, 4.15], [5.44, 3.96], [5.42, 3.7]]
bez15 = [[5.42, 3.7], [5.12, 3.59], [3.97, 3.7], [3.51, 3.63]]
bez16 = [[3.51, 3.63], [3.3, 3.76], [3.29, 4.12], [3.44, 4.47]]

curv13 = MAP(BEZIER(S1)(bez13))(domain2)
curv14 = MAP(BEZIER(S1)(bez14))(domain2)
curv15 = MAP(BEZIER(S1)(bez15))(domain2)
curv16 = MAP(BEZIER(S1)(bez16))(domain2)

retro = T([1,2,3])([4.9,-2.15,-3.6])(R([1,2])(PI/2)(R([2,3])(PI/2)(STRUCT([curv13,curv14,curv15,curv16]))))


//Vista alto

bez17 = [[0.87, 3.32,0], [1.73, 3.37,0], [3, 3.38,0], [3.81, 3.33,0]]
bez18 = [[3.82, 3.33,0], [4.77, 3.4,0], [5.14, 3.32,0], [5.22, 2.76,0]]
bez19 = [[5.22, 2.76,0], [5.29, 1.97,0], [5.32, 1.49,0], [4.83, 1.26,0]]
bez20 = [[4.83, 1.26,0], [4.45, 1.19,0], [3.09, 1.21,0], [1.93, 1.21,0]]
bez21 = [[1.93, 1.21,0], [0.94, 1.07,0], [0.41, 1.37,0], [0.42, 1.71,0]]
bez22 = [[0.42, 1.71,0], [0.26, 2.06,0], [0.15, 3.07,0], [0.87, 3.32,0]]

curv17 = MAP(BEZIER(S1)(bez17))(domain2)
curv18 = MAP(BEZIER(S1)(bez18))(domain2)
curv19 = MAP(BEZIER(S1)(bez19))(domain2)
curv20 = MAP(BEZIER(S1)(bez20))(domain2)
curv21 = MAP(BEZIER(S1)(bez21))(domain2)
curv22 = MAP(BEZIER(S1)(bez22))(domain2)

vistaAlto = T(3)(0.5)(STRUCT([curv17, curv18, curv19, curv20, curv21, curv22]))

VIEW(STRUCT([lato,vistaAlto,retro,fronte]))