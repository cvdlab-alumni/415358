//Exercise 4


r = 1
rG = 7

domain = PROD([INTERVALS(2*PI)(100),INTERVALS(2*PI)(100)])

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

centro = COLOR(BLACK)(TUBE([0,3,2])(100))
cubo1 = COLOR(BLACK)(T([1,2])([-1.4,2.6])(CUBOID([2.8,4.1,2])))
cubo2 = COLOR(BLACK)(T(3)(1)(R([2,3])(PI)(cubo1)))
cubo3 = COLOR(BLACK)(R([1,2])(PI/2)(cubo2))

volante = T(3)(-1)(STRUCT([centro,cubo1]))
VIEW(STRUCT([model,volante,cubo2,cubo3]))