//Exercise 3




r = 1
rG = 5
tread = 1.5
raggioPiccoloDisco =  1.3
raggioGrandeDisco = 3

domain = PROD([INTERVALS(PI)(100),INTERVALS(2*PI)(100)])

def torus (rG, r):
	def t2 (v):
		a = v[0]
		b = v[1]
		u = (r * COS(a) + rG) * COS(b)
		v = (r * COS(a) + rG) * SIN(b)
		w = (r * SIN(a))
		return [u,v,w]
	return t2

mapping = torus(rG,r)
model = COLOR(BLACK)(MAP(mapping)(domain))
model1 = COLOR(BLACK)((R([1,3])(PI)(model)))
raggioInt = rG-r
circleInt = EXTRUDE([None, CIRCUMFERENCE(raggioInt)(100), tread])
raggioExt = rG+r
circleExt = COLOR(BLACK)(EXTRUDE([None, CIRCUMFERENCE(raggioExt)(100), tread]))
tire = STRUCT([T(3)([tread])(model),circleExt,circleInt,model1] )
ring = T(3)(0.5)(EXTRUDE([None,RING([raggioPiccoloDisco, raggioGrandeDisco])([100,100]),0.3]))
tube = TUBE([raggioInt-0.5, raggioInt, tread])(100)
centro = TUBE([0,1,tread])(100)
raggi = T([1,2])([-0.25,0.8])(CUBOID([0.5,raggioInt-1.3,0.5]))
raggi2 = STRUCT(NN(5)([raggi, R([1,2])((2*PI)/5)]))
wheel= STRUCT([tire,centro,tube,ring,raggi2])

wheelScalataAntSx = T([1,2,3])([2.68,0.5,0])(S(1)(0.14)(S(2)(0.14)(S(3)(0.14)(R([1,3])(PI)(wheel)))))
wheelScalataAntDx = T([1,2,3])([2.68,0.5,-3])(S(1)(0.14)(S(2)(0.14)(S(3)(0.14)(wheel))))
wheelScalataPostSx = T([1,2,3])([9.47,0.5,0])(S(1)(0.14)(S(2)(0.14)(S(3)(0.14)(R([1,3])(PI)(wheel)))))
wheelScalataPostDx = T([1,2,3])([9.47,0.5,-3])(S(1)(0.14)(S(2)(0.14)(S(3)(0.14)(wheel))))

VIEW(STRUCT([profiloDx,profiloSx,cofanoEstruso,p03Estruso,p08Estruso,p09Estruso,p06Estruso,p07Estruso,p05Estruso,p01Estruso,p02Estruso,
             p04Estruso,fuse6,wheelScalataAntSx,wheelScalataAntDx,wheelScalataPostDx,wheelScalataPostSx]))