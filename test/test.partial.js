/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Check whether an element is a finite number
	isFiniteNumber = require( 'validate.io-finite' ),

	// Check whether an element is `NaN`
	isnan = require( 'validate.io-nan' ),	

	// Module to be tested:
	partial = require( './../lib/partial.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'partial pdf', function tests() {

	var	validationData = require( './fixtures/partial.json' ),
		data = validationData.data,
		expected = validationData.expected.map( function( d ) {
			return d === 'Inf' ? Infinity : d;
		}),
		k = validationData.k,
		lambda = validationData.lambda;

	it( 'should export a function', function test() {
		expect( partial ).to.be.a( 'function' );
	});

	it( 'should partially apply the Erlang pdf for given parameter values', function test() {
		var pdf;
		pdf = partial( k, lambda );
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should return a function which evaluates the probability density function', function test() {
		var pdf, actual;
		pdf = partial(  k, lambda );
		for ( var i = 0; i < data.length; i++ ) {
			actual = pdf( data[ i ] );
			if ( isFiniteNumber( actual ) && isFiniteNumber( expected[ i ] ) ) {
				assert.closeTo( actual, expected[ i ] , 1e-14 );
			}
		}
	});

	it( 'should return `NaN` if provided `NaN` as input', function test() {
		var pdf = partial(  k, lambda );
		assert.isTrue( isnan( pdf( NaN ) ) );
	});

});
