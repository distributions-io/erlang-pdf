'use strict';

// MODULES //

var factorialln = require( 'compute-factorialln' );


// FUNCTIONS //

var ln = Math.log,
	exp = Math.exp;


// PARTIAL //

/**
* FUNCTION: partial( k, lambda )
*	Partially applies shape parameter `k` and rate parameter `lambda` and returns a function for evaluating the probability density function (PDF) for a Erlang distribution.
*
* @param {Number} k - shape parameter
* @param {Number} lambda - rate parameter
* @returns {Function} PDF
*/
function partial( k, lambda ) {

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Erlang distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		var lnl;
		if ( x < 0 ) {
			return 0;
		}
		lnl = k * ln( lambda ) + ( k - 1 ) * ln( x );
		lnl -= lambda * x;
		lnl -= factorialln( k - 1);
		return exp( lnl );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
