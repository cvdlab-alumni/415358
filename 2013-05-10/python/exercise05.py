//Exercise 5

domain2 = PROD([INTERVALS(1)(50),INTERVALS(1)(50)])

p0 = [[1.32, 0.4, -0.2], [0.93, 1.99, -0.2], [1.47, 2, 0], [3.7, 2.3, 0]]      #muso
p1 = [[1.8, 0.23, 0],[1.5, 1.79, 0], [3.85, 1.91, 0],  [3.7, 0.08, 0]]  #ruotaAnteriore

c0 = BEZIER(S1)(p0)
c1 = BEZIER(S1)(p1)


lato1 = BEZIER(S2)([c0,c1])

fuse1 = MAP(lato1)(domain2)


p2 = [[3.7, 0.13, 0], [6.3, 0.08, 0], [7.34, 0.05, 0], [8.4, 0.08, 0]] #centroBasso
asse = [[3.7, 1.12, 0],[6.3, 1.2, 0],[7.34, 1.17, 0],[8.4, 1.17, 0]]
p3 = [[3.7, 2.3, 0], [6.3, 2.3, 0], [7.34, 2.3, 0], [8.4, 2.27, 0]] #centroMedio

c2 = BEZIER(S1)(p2)
cAsse = BEZIER(S1)(asse)
c3 = BEZIER(S1)(p3)

lato2 = BEZIER(S2)([c2,cAsse,c3])

fuse2 = MAP(lato2)(domain2)



p4 = [[8.4, 0.08, 0], [8.36, 1.91, 0], [10.69, 1.79, 0], [10.38, 0.23, 0]] #ruotaBasso
p5 = [[8.4, 2.27, 0], [8.72, 2.29, 0], [9.14, 2.29, 0], [10.38, 2.15, 0]] #ruotaAlto

c4 = BEZIER(S1)(p4)
c5 = BEZIER(S1)(p5)

lato3 = BEZIER(S2)([c4,c5])

fuse3 = MAP(lato3)(domain2)


p6 = [[10.38, 0.23, 0], [10.77, 0.17, 0], [11.02, 0.65, -0.1], [10.9, 1.35, -0.1]] #extEXTBasso
p7 = [[10.38, 2.15, 0], [10.83, 1.9, 0], [10.82, 1.61, -0.1], [10.9, 1.35, -0.1]]  #extEXTAlto

c6 = BEZIER(S1)(p6)
c7 = BEZIER(S1)(p7)

lato4 = BEZIER(S2)([c6,c7])

fuse4 = MAP(lato4)(domain2)



p8 = [[4.1, 2.3, -0.1], [6.31, 4.4, -0.1], [9.19, 2.35, -0.1], [10.38, 2.15, 0]] #tettoAlto
p9 = [[4.27, 2.3, 0], [5.75, 3.39, 0], [7.1, 3.19, 0], [9.02, 2.27, 0]] #tettoBasso

c8 = BEZIER(S1)(p8)
c9 = BEZIER(S1)(p9)

tetto = BEZIER(S2)([c8,c9])

fuse5 = MAP(tetto)(domain2)

profiloDx = STRUCT([fuse1,fuse2,fuse3,fuse4,fuse5])
profiloSx = T(3)(-3)(S(3)(-1)(profiloDx))




p0opp = [[1.32, 0.4, -2.8], [0.93, 1.99, -2.8], [1.47, 2, -3], [3.7, 2.3, -3]]

ext0 = BEZIER(S1)(p0opp)

cofano = BEZIER(S2)([c0,ext0])

cofanoEstruso = MAP(cofano)(domain2)



p1opp = [[3.7, 2.3, -3], [6.3, 2.3, -3], [7.34, 2.3, -3], [8.4, 2.27, -3]]

ext1 = BEZIER(S1)(p1opp)

p03 = BEZIER(S2)([c3,ext1])

p03Estruso = MAP(p03)(domain2)



p2opp = [[4.1, 2.3, -2.9], [6.31, 4.4, -2.9], [9.19, 2.35, -2.9], [10.38, 2.15, -2.9]]

ext2 = BEZIER(S1)(p2opp)

p08 = BEZIER(S2)([c8,ext2])

p08Estruso = MAP(p08)(domain2)



p3opp = [[4.27, 2.3, -3], [5.75, 3.39, -3], [7.1, 3.19, -3], [9.02, 2.27, -3]]

ext3 = BEZIER(S1)(p3opp)

p09 = BEZIER(S2)([c9,ext3])

p09Estruso = MAP(p09)(domain2)



p4opp = [[10.38, 0.23, -3], [10.77, 0.17, -3], [11.02, 0.65, -2.9], [10.9, 1.35, -2.9]]

ext4 = BEZIER(S1)(p4opp)

p06 = BEZIER(S2)([c6,ext4])

p06Estruso = MAP(p06)(domain2)



p5opp = [[10.38, 2.15, -3], [10.83, 1.9, -3], [10.82, 1.61, -2.9], [10.9, 1.35, -2.9]]

ext5 = BEZIER(S1)(p5opp)

p07 = BEZIER(S2)([c7,ext5])

p07Estruso = MAP(p07)(domain2)


p6opp = [[8.4, 2.27, -3], [8.72, 2.29, -3], [9.14, 2.29, -3], [10.38, 2.15, -3]]

ext6 = BEZIER(S1)(p6opp)

p05 = BEZIER(S2)([c5,ext6])

p05Estruso = MAP(p05)(domain2)



p7opp = p1 = [[1.8, 0.23, -3],[1.5, 1.79, -3], [3.85, 1.91, -3],  [3.7, 0.08, -3]]

ext7 = BEZIER(S1)(p7opp)

p01 = BEZIER(S2)([c1,ext7])

p01Estruso = MAP(p01)(domain2)



p8opp = [[3.7, 0.13, -3], [6.3, 0.08, -3], [7.34, 0.05, -3], [8.4, 0.08, -3]]

ext8 = BEZIER(S1)(p8opp)

p02 = BEZIER(S2)([c2,ext8])

p02Estruso = MAP(p02)(domain2)



p9opp = [[8.4, 0.08, -3], [8.36, 1.91, -3], [10.69, 1.79, -3], [10.38, 0.23, -3]]

ext9 = BEZIER(S1)(p9opp)

p04 = BEZIER(S2)([c4,ext9])

p04Estruso = MAP(p04)(domain2)


p30 = [[1.32, 0.4, -0.2],[1.8, 0.23, 0]]
p31 = [[1.32, 0.4, -2.8],[1.8, 0.23, -3]]

c30 = BEZIER(S1)(p30)
c31 = BEZIER(S1)(p31)

latoX = BEZIER(S2)([c30,c31])

fuse6 = MAP(latoX)(domain2)


VIEW(COLOR(BLUE)(STRUCT([profiloDx,profiloSx,cofanoEstruso,p03Estruso,p08Estruso,p09Estruso,p06Estruso,p07Estruso,p05Estruso,p01Estruso,p02Estruso,p04Estruso,fuse6])))