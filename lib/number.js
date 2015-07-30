'use strict';

// MODULES //

var factorialln = require( 'compute-factorialln' );


// FUNCTIONS //

var ln = Math.log,
	exp = Math.exp;


// PDF //

/**
* FUNCTION: pdf( x, k, lambda )
*	Evaluates the probability density function (PDF) for a Erlang distribution with shape parameter `k` and rate parameter `lambda` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} k - shape parameter
* @param {Number} lambda - rate parameter
* @returns {Number} evaluated PDF
*/
function pdf( x, k, lambda ) {
	var lnl;
	if ( x < 0 ) {
		return 0;
	}
	lnl = k * ln( lambda ) + ( k - 1 ) * ln( x );
	lnl -= lambda * x;
	lnl -= factorialln( k - 1);
	return exp( lnl );
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
