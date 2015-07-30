options( digits = 16 )
library( jsonlite )

k = 1
lambda = 1.7
x = 0:24
y = dgamma( x, k, lambda )

cat( y, sep = ",\n" )

data = list(
	k = k,
	lambda = lambda,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
