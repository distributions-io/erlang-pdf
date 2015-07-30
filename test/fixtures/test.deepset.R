options( digits = 16 )
library( jsonlite )


k = 1
lambda = 1
x = seq( -1000, 1000, 0.5 )
y = dgamma( x, k,lambda )

cat( y, sep = ",\n" )

data = list(
	k = k,
	lambda = lambda,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
