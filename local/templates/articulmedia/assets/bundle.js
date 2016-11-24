/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// reqiurements
	'use strict';

	var jquery = window.$ = window.jQuery = __webpack_require__(1);
	var sprite = __webpack_require__(2);

	// var TweenMax = window.TweenMax = require('gsap');
	// // require('gsap/src/minified/plugins/CSSRulePlugin.min.js');

	// // var jquery_validate = require('../libs/jquery-validate/jquery.validate.min.js');
	// // var jquery_univalidate = require('./uni-validate.js');
	// // require('./animations.js');

	// //angular modules
	// import appName from './app/app.js';

	$(document).ready(function () {});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	$(document).ready(function () {
		var files = __webpack_require__(3);
		files.keys().forEach(files);
		// console.log( files.keys() );
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./arrow-left-light.svg": 4,
		"./arrow-left-small.svg": 7,
		"./arrow-left.svg": 8,
		"./arrow-right-light.svg": 9,
		"./arrow-right-small.svg": 10,
		"./arrow-right.svg": 11,
		"./breadcrumb-arrow.svg": 12,
		"./burger-mini.svg": 13,
		"./burger.svg": 14,
		"./burger1.svg": 15,
		"./card-zoom.svg": 16,
		"./caret.svg": 17,
		"./check.svg": 18,
		"./close-icon.svg": 19,
		"./close.svg": 20,
		"./cross-thick.svg": 21,
		"./cross.svg": 22,
		"./fast-forward.svg": 23,
		"./funnel.svg": 24,
		"./icon-fb.svg": 25,
		"./icon-inst.svg": 26,
		"./icon-instagram.svg": 27,
		"./icon-youtube.svg": 28,
		"./link.svg": 29,
		"./list.svg": 30,
		"./login.svg": 31,
		"./logo.svg": 32,
		"./logosm.svg": 33,
		"./noresult.svg": 34,
		"./pdf.svg": 35,
		"./pin.svg": 36,
		"./print.svg": 37,
		"./reload.svg": 38,
		"./rss.svg": 39,
		"./scroll-down.svg": 40,
		"./search.svg": 41,
		"./service-city.svg": 42,
		"./service-consulting.svg": 43,
		"./service-outoftown.svg": 44,
		"./service-rent.svg": 45,
		"./skype.svg": 46,
		"./slider-arrow-left.svg": 47,
		"./social-icon-fb.svg": 48,
		"./social-icon-g.svg": 49,
		"./social-icon-ok.svg": 50,
		"./social-icon-tw.svg": 51,
		"./social-icon-vk.svg": 52,
		"./social-icon-yt.svg": 53,
		"./sort.svg": 54,
		"./zoom.svg": 55
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 20 37\" id=\"spr-arrow-left-light\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <polygon points=\"18.2,37 0,18.6 18.3,0 20,1.7 3.3,18.6 19.8,35.3 \t\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-arrow-left-light");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Sprite = __webpack_require__(6);
	var globalSprite = new Sprite();

	if (document.body) {
	  globalSprite.elem = globalSprite.render(document.body);
	} else {
	  document.addEventListener('DOMContentLoaded', function () {
	    globalSprite.elem = globalSprite.render(document.body);
	  }, false);
	}

	module.exports = globalSprite;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * List of SVG attributes to fix url target in them
	 * @type {string[]}
	 */
	var fixAttributes = [
	  'clipPath',
	  'colorProfile',
	  'src',
	  'cursor',
	  'fill',
	  'filter',
	  'marker',
	  'markerStart',
	  'markerMid',
	  'markerEnd',
	  'mask',
	  'stroke'
	];

	/**
	 * Query to find'em
	 * @type {string}
	 */
	var fixAttributesQuery = '[' + fixAttributes.join('],[') + ']';
	/**
	 * @type {RegExp}
	 */
	var URI_FUNC_REGEX = /^url\((.*)\)$/;

	/**
	 * Convert array-like to array
	 * @param {Object} arrayLike
	 * @returns {Array.<*>}
	 */
	function arrayFrom(arrayLike) {
	  return Array.prototype.slice.call(arrayLike, 0);
	}

	/**
	 * Handles forbidden symbols which cannot be directly used inside attributes with url(...) content.
	 * Adds leading slash for the brackets
	 * @param {string} url
	 * @return {string} encoded url
	 */
	function encodeUrlForEmbedding(url) {
	  return url.replace(/\(|\)/g, "\\$&");
	}

	/**
	 * Replaces prefix in `url()` functions
	 * @param {Element} svg
	 * @param {string} currentUrlPrefix
	 * @param {string} newUrlPrefix
	 */
	function baseUrlWorkAround(svg, currentUrlPrefix, newUrlPrefix) {
	  var nodes = svg.querySelectorAll(fixAttributesQuery);

	  if (!nodes) {
	    return;
	  }

	  arrayFrom(nodes).forEach(function (node) {
	    if (!node.attributes) {
	      return;
	    }

	    arrayFrom(node.attributes).forEach(function (attribute) {
	      if (fixAttributes.indexOf(attribute.localName) !== -1) {
	        var match = URI_FUNC_REGEX.exec(node.getAttribute(attribute.localName));

	        // Do not touch urls with unexpected prefix
	        if (match && match[1].indexOf(currentUrlPrefix) === 0) {
	          var referenceUrl = encodeUrlForEmbedding(newUrlPrefix + match[1].split(currentUrlPrefix)[1]);
	          node.setAttribute(attribute.localName, 'url(' + referenceUrl + ')');
	        }
	      }
	    });
	  });
	}

	/**
	 * Because of Firefox bug #353575 gradients and patterns don't work if they are within a symbol.
	 * To workaround this we move the gradient definition outside the symbol element
	 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
	 * @param {Element} svg
	 */
	var FirefoxSymbolBugWorkaround = function (svg) {
	  var defs = svg.querySelector('defs');

	  var moveToDefsElems = svg.querySelectorAll('symbol linearGradient, symbol radialGradient, symbol pattern');
	  for (var i = 0, len = moveToDefsElems.length; i < len; i++) {
	    defs.appendChild(moveToDefsElems[i]);
	  }
	};

	/**
	 * @type {string}
	 */
	var DEFAULT_URI_PREFIX = '#';

	/**
	 * @type {string}
	 */
	var xLinkHref = 'xlink:href';
	/**
	 * @type {string}
	 */
	var xLinkNS = 'http://www.w3.org/1999/xlink';
	/**
	 * @type {string}
	 */
	var svgOpening = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + xLinkNS + '"';
	/**
	 * @type {string}
	 */
	var svgClosing = '</svg>';
	/**
	 * @type {string}
	 */
	var contentPlaceHolder = '{content}';

	/**
	 * Representation of SVG sprite
	 * @constructor
	 */
	function Sprite() {
	  var baseElement = document.getElementsByTagName('base')[0];
	  var currentUrl = window.location.href.split('#')[0];
	  var baseUrl = baseElement && baseElement.href;
	  this.urlPrefix = baseUrl && baseUrl !== currentUrl ? currentUrl + DEFAULT_URI_PREFIX : DEFAULT_URI_PREFIX;

	  this.content = [];
	  this.isFirefox = /firefox\//i.test(navigator.userAgent);
	  this.isIE = /(trident|edge)\//i.test(navigator.userAgent);

	  if (!this.isIE && baseUrl) {
	    window.addEventListener('spriteLoaderLocationUpdated', function (e) {
	      var currentPrefix = this.urlPrefix;
	      var newUrlPrefix = e.detail.newUrl.split(DEFAULT_URI_PREFIX)[0] + DEFAULT_URI_PREFIX;
	      baseUrlWorkAround(this.svg, currentPrefix, newUrlPrefix);
	      this.urlPrefix = newUrlPrefix;

	      if (this.isFirefox) {
	        var nodes = arrayFrom(document.querySelectorAll('use[*|href]'));
	        nodes.forEach(function (node) {
	          var href = node.getAttribute(xLinkHref);
	          if (href && href.indexOf(currentPrefix) === 0) {
	            node.setAttributeNS(xLinkNS, xLinkHref, newUrlPrefix + href.split(DEFAULT_URI_PREFIX)[1]);
	          }
	        });
	      }
	    }.bind(this));
	  }
	}

	Sprite.styles = ['position:absolute', 'width:0', 'height:0', 'visibility:hidden'];

	Sprite.spriteTemplate = svgOpening + ' style="'+ Sprite.styles.join(';') +'"><defs>' + contentPlaceHolder + '</defs>' + svgClosing;
	Sprite.symbolTemplate = svgOpening + '>' + contentPlaceHolder + svgClosing;

	/**
	 * @type {Array<String>}
	 */
	Sprite.prototype.content = null;

	/**
	 * @param {String} content
	 * @param {String} id
	 */
	Sprite.prototype.add = function (content, id) {
	  if (this.svg) {
	    this.appendSymbol(content);
	  }

	  this.content.push(content);

	  return DEFAULT_URI_PREFIX + id;
	};

	/**
	 *
	 * @param content
	 * @param template
	 * @returns {Element}
	 */
	Sprite.prototype.wrapSVG = function (content, template) {
	  var svgString = template.replace(contentPlaceHolder, content);

	  var svg = new DOMParser().parseFromString(svgString, 'image/svg+xml').documentElement;

	  if (!this.isIE && this.urlPrefix) {
	    baseUrlWorkAround(svg, DEFAULT_URI_PREFIX, this.urlPrefix);
	  }

	  return svg;
	};

	Sprite.prototype.appendSymbol = function (content) {
	  var symbol = this.wrapSVG(content, Sprite.symbolTemplate).childNodes[0];

	  this.svg.querySelector('defs').appendChild(symbol);
	  if (this.isFirefox) {
	    FirefoxSymbolBugWorkaround(this.svg);
	  }
	};

	/**
	 * @returns {String}
	 */
	Sprite.prototype.toString = function () {
	  var wrapper = document.createElement('div');
	  wrapper.appendChild(this.render());
	  return wrapper.innerHTML;
	};

	/**
	 * @param {HTMLElement} [target]
	 * @param {Boolean} [prepend=true]
	 * @returns {HTMLElement} Rendered sprite node
	 */
	Sprite.prototype.render = function (target, prepend) {
	  target = target || null;
	  prepend = typeof prepend === 'boolean' ? prepend : true;

	  var svg = this.wrapSVG(this.content.join(''), Sprite.spriteTemplate);

	  if (this.isFirefox) {
	    FirefoxSymbolBugWorkaround(svg);
	  }

	  if (target) {
	    if (prepend && target.childNodes[0]) {
	      target.insertBefore(svg, target.childNodes[0]);
	    } else {
	      target.appendChild(svg);
	    }
	  }

	  this.svg = svg;

	  return svg;
	};

	module.exports = Sprite;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 39.2 62.9\" id=\"spr-arrow-left-small\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <polygon points=\"31.4,62.9 0,31.4 31.4,0 39.2,7.8 15.6,31.4 39.2,55.1 \t\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-arrow-left-small");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 59.8 103.9\" id=\"spr-arrow-left\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <polygon points=\"52,103.9 0,52 52,0 59.8,7.8 15.6,52 59.8,96.2 \t\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-arrow-left");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 20 37\" id=\"spr-arrow-right-light\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <polygon points=\"0.2,35.3 16.7,18.6 0,1.7 1.7,0 20,18.6 1.8,37 \t\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-arrow-right-light");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-379 269.1 39.2 62.9\" id=\"spr-arrow-right-small\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <polygon points=\"-379,324.2 -355.4,300.5 -379,276.9 -371.2,269.1 -339.8,300.5 -371.2,332 \t\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-arrow-right-small");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-369 249.1 59.8 103.9\" id=\"spr-arrow-right\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <polygon points=\"-369,345.3 -324.8,301.1 -369,256.9 -361.2,249.1 -309.2,301.1 -361.2,353 \t\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-arrow-right");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 11 11\" id=\"spr-breadcrumb-arrow\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M-579-2085.5c3.038,0,5.5,2.462,5.5,5.5s-2.462,5.5-5.5,5.5\r\n\ts-5.5-2.462-5.5-5.5S-582.038-2085.5-579-2085.5z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M-577.854-2082.854l0.707,0.708l-3,3l-0.707-0.708L-577.854-2082.854z\r\n\t\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M-580.854-2080.147l0.707-0.707l3,3l-0.707,0.707L-580.854-2080.147z\"/> <g> <path d=\"M5.5,0C2.462,0,0,2.462,0,5.5S2.462,11,5.5,11S11,8.538,11,5.5S8.538,0,5.5,0z M7.354,7.646L6.646,8.353\r\n\t\tL4.5,6.207L4.354,6.354L3.646,5.646L3.793,5.5L3.646,5.353l0.708-0.707L4.5,4.792l2.146-2.146l0.707,0.708L5.208,5.5L7.354,7.646z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-breadcrumb-arrow");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 26 23\" id=\"spr-burger-mini\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <path d=\"M0,0v5h26V0H0z M0,14h26V9H0V14z M0,23h26v-5H0V23z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-burger-mini");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 50 43\" id=\"spr-burger\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <path d=\"M0,0v5h50V0H0z M0,24h50v-5H0V24z M0,43h50v-5H0V43z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-burger");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 30 22\" id=\"spr-burger1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <style type=\"text/css\"> .st0{fill-rule:evenodd;clip-rule:evenodd;} </style> <g> <g id=\"spr-burger1_XMLID_32_\"> <path id=\"spr-burger1_XMLID_33_\" class=\"st0\" d=\"M0,0v2h30V0H0z M0,22h30v-2H0V22z M0,12h30v-2H0V12z\"/> </g> </g> </symbol>";
	module.exports = sprite.add(image, "spr-burger1");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 40 40\" id=\"spr-card-zoom\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"fff\" d=\"M25.772,24.378l3.93,3.93c0.384,0.384,0.384,1.008,0,1.392\n\tc-0.385,0.384-1.008,0.384-1.392,0l-3.93-3.93c-3.479,2.786-8.57,2.57-11.795-0.655c-3.461-3.461-3.461-9.072,0-12.532\n\tc3.461-3.461,9.071-3.461,12.532,0C28.342,15.809,28.558,20.899,25.772,24.378z M13.977,13.976c-2.692,2.692-2.692,7.056,0,9.747\n\ts7.055,2.692,9.747,0c2.692-2.692,2.692-7.056,0-9.747C21.033,11.284,16.669,11.284,13.977,13.976z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"fff\" d=\"M19,15c0.552,0,1,0.448,1,1v6c0,0.552-0.448,1-1,1\n\tc-0.552,0-1-0.448-1-1v-6C18,15.448,18.448,15,19,15z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"fff\" d=\"M16,18h6c0.552,0,1,0.448,1,1s-0.448,1-1,1h-6c-0.552,0-1-0.448-1-1\n\tS15.448,18,16,18z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-card-zoom");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 8.004 6.009\" id=\"spr-caret\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M8.004,0L4.002,6.009L0,0H8.004z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-caret");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-385 292 17 17\" id=\"spr-check\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <path d=\"M-376.5,309c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S-371.8,309-376.5,309z M-376.5,293.2\r\n\t\tc-4,0-7.3,3.3-7.3,7.3s3.3,7.3,7.3,7.3s7.3-3.3,7.3-7.3S-372.4,293.2-376.5,293.2z\"/> <path d=\"M-377,304.2c-0.2,0-0.4-0.1-0.5-0.2l-3.6-3.7c-0.3-0.3-0.3-0.7,0-1c0.3-0.3,0.7-0.3,1,0l3.1,3.2l4.1-4.6\r\n\t\tc0.2-0.3,0.7-0.3,1-0.1c0.3,0.2,0.3,0.7,0.1,1l-4.6,5.2C-376.6,304.1-376.8,304.2-377,304.2C-377,304.2-377,304.2-377,304.2z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-check");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 30.978 30.978\" id=\"spr-close-icon\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"none\" d=\"M29.637,0l1.341,1.341L1.341,30.978L0,29.637L29.637,0z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"none\" d=\"M1.341,0L0,1.341l29.637,29.637l1.341-1.341L1.341,0z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-close-icon");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 30.978 30.978\" id=\"spr-close\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M29.637,0l1.341,1.341L1.341,30.978L0,29.637L29.637,0z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.341,0L0,1.341l29.637,29.637l1.341-1.341L1.341,0z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-close");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 21 21\" id=\"spr-cross-thick\" ><defs/><title>ic_</title><path d=\"M21,1.62C20.46,1.08,19.93.53,19.39,0L10.5,8.89,1.62,0C1.08,0.55.54,1.09,0,1.63l8.88,8.88L0,19.39C0.54,19.93,1.08,20.46,1.62,21l8.88-8.89L19.39,21c0.54-.54,1.08-1.07,1.61-1.61l-8.89-8.89Z\"/></symbol>";
	module.exports = sprite.add(image, "spr-cross-thick");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 22.6 22.6\" id=\"spr-cross\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <style type=\"text/css\"> .st0{fill-rule:evenodd;clip-rule:evenodd;} </style> <polygon id=\"spr-cross_XMLID_16_\" class=\"st0\" points=\"22.6,1.4 21.2,0 11.3,9.9 1.4,0 0,1.4 9.9,11.3 0,21.2 1.4,22.6 11.3,12.7 21.2,22.6 \r\n\t22.6,21.2 12.7,11.3 \"/> </symbol>";
	module.exports = sprite.add(image, "spr-cross");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 5.996 4.003\" id=\"spr-fast-forward\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M0.019,0.154C0.055,0.063,0.004,0.188,0.019,0.154L0.019,0.154z\"/> <path d=\"M2.174,1.829L0.427,0.075C0.303-0.054,0.085-0.01,0.019,0.154C0.004,0.188-0.001,0.223,0,0.259v3.487\r\n\tC-0.006,3.967,0.267,4.09,0.425,3.931l1.749-1.746C2.27,2.089,2.27,1.925,2.174,1.829z M0.496,3.145V0.87l1.149,1.136L0.496,3.145z\"/> <path d=\"M3.769,0.154C3.805,0.063,3.754,0.188,3.769,0.154L3.769,0.154z\"/> <path d=\"M5.924,1.829L4.177,0.075C4.054-0.054,3.835-0.01,3.769,0.154C3.754,0.188,3.749,0.223,3.75,0.259v3.487\r\n\tC3.744,3.967,4.017,4.09,4.175,3.931l1.749-1.746C6.02,2.089,6.02,1.925,5.924,1.829z M4.246,3.145V0.87l1.149,1.136L4.246,3.145z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-fast-forward");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 29.993 31.009\" id=\"spr-funnel\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <polygon points=\"29.993,0 0,0 12.001,16.81 12.001,31.009 18.005,27.81 18.005,16.793 \t\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-funnel");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 1024 768\" id=\"spr-icon-fb\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M756.139,829.223h-6.605v-3.654c0-1.373,1.079-1.691,1.837-1.691c0.758,0,4.662,0,4.662,0v-6.035l-6.421-0.021\n\tc-7.128,0-8.748,4.501-8.748,7.382v4.021h-4.121v6.219h4.121c0,7.979,0,17.594,0,17.594h8.67c0,0,0-9.71,0-17.594h5.849\n\tL756.139,829.223z\"/> <path d=\"M839,829.799c0-3.203-2.596-5.799-5.799-5.799h-29.402c-3.203,0-5.799,2.596-5.799,5.799v14.402\n\tc0,3.203,2.596,5.799,5.799,5.799h29.402c3.203,0,5.799-2.596,5.799-5.799V829.799z M813,843.942v-14.173l12.274,7.087L813,843.942z\n\t\"/> <g> <path d=\"M901.382,822.777c2.21,0,4.008,1.798,4.008,4.008v20.264c0,2.21-1.798,4.008-4.008,4.008h-20.264\n\t\tc-2.21,0-4.008-1.798-4.008-4.008v-20.264c0-2.21,1.798-4.008,4.008-4.008H901.382 M901.382,819.167h-20.264\n\t\tc-4.19,0-7.618,3.428-7.618,7.618v20.264c0,4.19,3.428,7.618,7.618,7.618h20.264c4.19,0,7.618-3.428,7.618-7.618v-20.264\n\t\tC909,822.595,905.572,819.167,901.382,819.167L901.382,819.167z\"/> <path d=\"M891.25,832.231c2.584,0,4.686,2.102,4.686,4.686s-2.102,4.686-4.686,4.686s-4.686-2.102-4.686-4.686\n\t\tS888.666,832.231,891.25,832.231 M891.25,828.621c-4.582,0-8.296,3.714-8.296,8.296c0,4.582,3.714,8.296,8.296,8.296\n\t\ts8.296-3.714,8.296-8.296C899.546,832.335,895.832,828.621,891.25,828.621L891.25,828.621z\"/> <path d=\"M900.075,825.886c-1.218,0-2.206,0.988-2.206,2.206s0.988,2.206,2.206,2.206s2.206-0.988,2.206-2.206\n\t\tS901.293,825.886,900.075,825.886L900.075,825.886z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-icon-fb");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 1024 768\" id=\"spr-icon-inst\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M756.139,829.223h-6.605v-3.654c0-1.373,1.079-1.691,1.837-1.691c0.758,0,4.662,0,4.662,0v-6.035l-6.421-0.021\n\tc-7.128,0-8.748,4.501-8.748,7.382v4.021h-4.121v6.219h4.121c0,7.979,0,17.594,0,17.594h8.67c0,0,0-9.71,0-17.594h5.849\n\tL756.139,829.223z\"/> <path d=\"M839,829.799c0-3.203-2.596-5.799-5.799-5.799h-29.402c-3.203,0-5.799,2.596-5.799,5.799v14.402\n\tc0,3.203,2.596,5.799,5.799,5.799h29.402c3.203,0,5.799-2.596,5.799-5.799V829.799z M813,843.942v-14.173l12.274,7.087L813,843.942z\n\t\"/> <g> <path d=\"M901.382,822.777c2.21,0,4.008,1.798,4.008,4.008v20.264c0,2.21-1.798,4.008-4.008,4.008h-20.264\n\t\tc-2.21,0-4.008-1.798-4.008-4.008v-20.264c0-2.21,1.798-4.008,4.008-4.008H901.382 M901.382,819.167h-20.264\n\t\tc-4.19,0-7.618,3.428-7.618,7.618v20.264c0,4.19,3.428,7.618,7.618,7.618h20.264c4.19,0,7.618-3.428,7.618-7.618v-20.264\n\t\tC909,822.595,905.572,819.167,901.382,819.167L901.382,819.167z\"/> <path d=\"M891.25,832.231c2.584,0,4.686,2.102,4.686,4.686s-2.102,4.686-4.686,4.686s-4.686-2.102-4.686-4.686\n\t\tS888.666,832.231,891.25,832.231 M891.25,828.621c-4.582,0-8.296,3.714-8.296,8.296c0,4.582,3.714,8.296,8.296,8.296\n\t\ts8.296-3.714,8.296-8.296C899.546,832.335,895.832,828.621,891.25,828.621L891.25,828.621z\"/> <path d=\"M900.075,825.886c-1.218,0-2.206,0.988-2.206,2.206s0.988,2.206,2.206,2.206s2.206-0.988,2.206-2.206\n\t\tS901.293,825.886,900.075,825.886L900.075,825.886z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-icon-inst");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 56.7 56.7\" id=\"spr-icon-instagram\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g><path d=\"M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7   c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z\"/><circle cx=\"41.5\" cy=\"16.4\" r=\"2.9\"/><path d=\"M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9   h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.4,39.9c0,3.1-0.9,5.6-2.7,7.3   c-1.8,1.7-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6   c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9z\"/></g></symbol>";
	module.exports = sprite.add(image, "spr-icon-instagram");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol id=\"spr-icon-youtube\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g id=\"spr-icon-youtube_black\"> <g id=\"spr-icon-youtube_slice\" transform=\"translate(-500.000000, -100.000000)\"> </g> <g id=\"spr-icon-youtube_youtube\" transform=\"translate(10.000000, 16.000000)\"> <path id=\"spr-icon-youtube_Fill-195\" d=\"M38.8,6.8c0,0-0.4-2.6-1.5-3.8c-1.5-1.5-3.1-1.5-3.8-1.6C28.1,0.9,20,0.9,20,0.9h0c0,0-8,0-13.4,0.4\n\t\t\tC5.8,1.4,4.2,1.4,2.7,3C1.6,4.1,1.2,6.8,1.2,6.8S0.8,9.9,0.8,13v2.9c0,3.1,0.4,6.2,0.4,6.2s0.4,2.6,1.5,3.8\n\t\t\tc1.5,1.5,3.4,1.5,4.2,1.6c3.1,0.3,13,0.4,13,0.4s8.1,0,13.4-0.4c0.7-0.1,2.4-0.1,3.8-1.6c1.2-1.2,1.5-3.8,1.5-3.8s0.4-3.1,0.4-6.2\n\t\t\tV13C39.2,9.9,38.8,6.8,38.8,6.8z M16,19.4l0-10.8L26.4,14L16,19.4z\"/> </g> </g> </symbol>";
	module.exports = sprite.add(image, "spr-icon-youtube");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-474 276 10 10\" id=\"spr-link\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <path d=\"M-464.3,276h-3.2c-0.2,0-0.3,0.3-0.2,0.5c0.4,0.4,0.8,0.8,1.1,1.1c-1,1-2,2-3,3c0,0.2-0.2,0.3-0.2,0.4\r\n\t\ts0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.3,0.4,0.4c0.1,0.1,0.3,0.1,0.4,0c1-1,2.1-2.1,3.1-3.1c0.4,0.4,0.8,0.8,1.1,1.1\r\n\t\tc0.2,0.2,0.5,0,0.5-0.2v-3.2C-464,276.1-464.1,276-464.3,276z\"/> <path d=\"M-464.9,285h-8.1v-8h4v-1h-4c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1v-4h-0.9V285z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-link");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 19 16\" id=\"spr-list\" ><title>rslt</title><path d=\"M18,0H1A1,1,0,0,0,0,1V2.19a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V1A1,1,0,0,0,18,0Zm0,6.41H1a1,1,0,0,0-1,1V8.59a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V7.41A1,1,0,0,0,18,6.41Zm0,6.41H1a1,1,0,0,0-1,1V15a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V13.81A1,1,0,0,0,18,12.81Z\"/></symbol>";
	module.exports = sprite.add(image, "spr-list");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 16 17\" id=\"spr-login\" ><defs/><title>ic_</title><path class=\"a\" d=\"M10.34,1.3a4.12,4.12,0,0,1,2.09.6,5.69,5.69,0,0,1,2,2.11,3.89,3.89,0,0,1,.47,2.55,3.86,3.86,0,0,1-1.52,2.35,3.5,3.5,0,0,1-2.11.73H11.18A4.25,4.25,0,0,1,9.11,9L2.66,15.41A1,1,0,0,1,2,15.7a0.88,0.88,0,0,1-.46-0.12,0.93,0.93,0,0,1-.31-1.32c0.2-.27.46-0.48,0.69-0.72C1.65,13.27,1.37,13,1.12,12.74A0.39,0.39,0,0,1,1,12.29a3.88,3.88,0,0,1,.65-0.74A2.88,2.88,0,0,1,2.37,11a0.31,0.31,0,0,1,.13,0,0.49,0.49,0,0,1,.33.15l0.76,0.75L7.71,7.72A4.48,4.48,0,0,1,6.66,5.17a3.45,3.45,0,0,1,.58-2.1,3.94,3.94,0,0,1,2.38-1.7,3.37,3.37,0,0,1,.72-0.08m0.9,7.16a2.43,2.43,0,0,0,1.62-.62,2.49,2.49,0,0,0,.95-2.09,3.82,3.82,0,0,0-1.46-2.49,3.17,3.17,0,0,0-1.94-.77H10.22a2.39,2.39,0,0,0-1.44.62,2.5,2.5,0,0,0-.94,2,3.38,3.38,0,0,0,.91,2,3.76,3.76,0,0,0,2,1.26,2.27,2.27,0,0,0,.52.06M10.34,0.3h0a4.38,4.38,0,0,0-.93.1,4.94,4.94,0,0,0-3,2.12,4.45,4.45,0,0,0-.75,2.71,5.13,5.13,0,0,0,.75,2.39L5.13,8.89,3.59,10.43l-0.06-.06a1.46,1.46,0,0,0-1-.43,1.3,1.3,0,0,0-.57.13,3,3,0,0,0-.83.65L1,10.83,0.81,11a3.43,3.43,0,0,0-.64.79,1.4,1.4,0,0,0,.25,1.64l0.09,0.1-0.09.11A1.93,1.93,0,0,0,1,16.46,1.83,1.83,0,0,0,2,16.7a2,2,0,0,0,1.42-.61L6.49,13,9.3,10.19a5,5,0,0,0,1.86.44h0.17A4.5,4.5,0,0,0,14,9.71a4.82,4.82,0,0,0,1.89-3,4.88,4.88,0,0,0-.57-3.2A6.67,6.67,0,0,0,12.95,1,5.09,5.09,0,0,0,10.34.3h0Zm0.9,7.16a1.27,1.27,0,0,1-.29,0,2.77,2.77,0,0,1-1.44-.94,2.41,2.41,0,0,1-.68-1.44,1.49,1.49,0,0,1,.58-1.17,1.45,1.45,0,0,1,.87-0.4h0.13A2.19,2.19,0,0,1,11.72,4a2.83,2.83,0,0,1,1.1,1.81,1.5,1.5,0,0,1-.58,1.22l0,0,0,0a1.42,1.42,0,0,1-.95.36h0Z\"/></symbol>";
	module.exports = sprite.add(image, "spr-login");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 115.024 30.016\" id=\"spr-logo\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M65.946,13.952c-0.047-0.094-0.099-0.186-0.137-0.282c-0.29-0.754-0.576-1.511-0.865-2.266\r\n\tc-0.288-0.747-0.546-1.5-0.751-2.272c-0.189-0.716-0.229-1.423-0.048-2.134c0.104-0.402-0.026-0.724-0.24-1.042\r\n\tc-0.345-0.507-0.835-0.846-1.352-1.161c-0.408-0.248-0.85-0.416-1.297-0.577c-0.696-0.252-1.412-0.379-2.156-0.353\r\n\tc-0.403,0.013-0.789,0.074-1.152,0.246c-0.553,0.263-0.944,0.645-1.107,1.251c-0.155,0.59-0.101,1.169,0.053,1.733\r\n\tc0.229,0.833,0.51,1.656,0.777,2.479c0.19,0.597,0.34,1.194,0.32,1.83c-0.045,1.471-0.081,2.941-0.091,4.412\r\n\tc-0.017,2.114-0.015,4.228,0.074,6.342c0.069,1.646,0.133,3.288,0.458,4.908c0.073,0.37,0.205,0.733,0.364,1.075\r\n\tc0.21,0.449,0.564,0.454,0.87,0.127c0.198-0.212,0.374-0.46,0.502-0.719c0.353-0.721,0.582-1.49,0.722-2.277\r\n\tc0.144-0.803,0.253-1.615,0.333-2.427c0.094-0.941,0.145-1.884,0.206-2.824c0.023-0.352,0.013-0.703,0.035-1.053\r\n\tc0.052-0.817,0.111-1.632,0.171-2.447c0.01-0.126,0.035-0.249,0.053-0.373c0.077,0.081,0.103,0.168,0.117,0.256\r\n\tc0.032,0.212,0.04,0.429,0.089,0.637c0.278,1.188,0.698,2.333,1.148,3.467c0.35,0.879,0.671,1.767,0.981,2.659\r\n\tc0.15,0.434,0.309,0.865,0.629,1.216c0.279,0.304,0.681,0.414,1.048,0.238c0.141-0.068,0.287-0.136,0.412-0.229\r\n\tc0.316-0.235,0.617-0.483,0.757-0.876c0.121-0.346,0.178-0.7,0.161-1.06c-0.042-0.837,0.156-1.617,0.492-2.38\r\n\tc0.356-0.812,0.698-1.631,1.014-2.459c0.353-0.922,0.818-1.793,1.218-2.693c0.189-0.426,0.351-0.864,0.521-1.3\r\n\tc0.076-0.194,0.139-0.393,0.209-0.595c0.031,0.022,0.058,0.03,0.06,0.042c0.111,0.534,0.23,1.066,0.33,1.603\r\n\tc0.094,0.508,0.171,1.019,0.252,1.528c0.119,0.738,0.247,1.477,0.348,2.218c0.103,0.744,0.183,1.489,0.26,2.237\r\n\tc0.1,0.96,0.196,1.919,0.277,2.877c0.081,0.961,0.146,1.925,0.214,2.886c0.044,0.632,0.067,1.265,0.128,1.896\r\n\tc0.032,0.325,0.101,0.654,0.201,0.967c0.085,0.262,0.323,0.292,0.499,0.073c0.159-0.196,0.313-0.408,0.415-0.635\r\n\tc0.235-0.524,0.455-1.056,0.65-1.594c0.365-1.008,0.727-2.017,1.049-3.037c0.141-0.451,0.224-0.933,0.255-1.405\r\n\tc0.058-0.924,0.059-1.849,0.088-2.772c0.015-0.508,0.024-1.015,0.06-1.519c0.051-0.708,0.123-1.415,0.19-2.124\r\n\tc0.038-0.378,0.081-0.755,0.137-1.132c0.176-1.159,0.229-2.325,0.146-3.494c-0.028-0.391-0.135-0.765-0.38-1.089\r\n\tc-0.088-0.118-0.164-0.243-0.234-0.371c-0.198-0.366-0.226-0.764-0.202-1.167c0.027-0.496,0.086-0.991,0.1-1.485\r\n\tc0.015-0.523-0.157-0.991-0.506-1.398c-0.57-0.663-1.279-1.127-2.088-1.455c-1.017-0.409-1.992-0.345-2.923,0.248\r\n\tc-0.985,0.628-1.58,1.533-1.951,2.604c-0.184,0.53-0.237,1.081-0.283,1.634c-0.067,0.809-0.215,1.602-0.479,2.372\r\n\tc-0.154,0.449-0.314,0.901-0.504,1.34c-0.16,0.372-0.369,0.727-0.557,1.088C66.002,13.959,65.973,13.956,65.946,13.952\"/> <path d=\"M35.809,5.433c-1.082-0.098-2.163-0.038-3.243,0.038c-0.757,0.053-1.504,0.002-2.25-0.119\r\n\tc-0.629-0.104-1.156-0.436-1.673-0.775c-0.591-0.387-1.271-0.628-1.979-0.691c-1.162-0.104-2.271,0.1-3.315,0.628\r\n\tc-0.687,0.348-1.206,0.846-1.417,1.602c-0.049,0.178-0.108,0.355-0.139,0.537c-0.078,0.461-0.174,0.922-0.205,1.386\r\n\tc-0.052,0.743,0.218,1.416,0.577,2.054c0.333,0.592,0.573,1.218,0.676,1.889c0.036,0.226,0.029,0.468-0.001,0.696\r\n\tc-0.075,0.563-0.354,1.048-0.665,1.515c-0.283,0.425-0.575,0.841-0.839,1.274c-0.194,0.317-0.335,0.654-0.327,1.043\r\n\tc0.014,0.662-0.011,1.324-0.001,1.987c0.029,1.91,0.063,3.82,0.103,5.729c0.015,0.799,0.043,1.598,0.073,2.396\r\n\tc0.017,0.477,0.028,0.955,0.079,1.43c0.047,0.429,0.195,0.825,0.534,1.135c0.579,0.529,1.33,0.5,2.048,0.42\r\n\tc0.49-0.056,0.976-0.143,1.458-0.244c0.916-0.194,1.836-0.365,2.761-0.512c0.75-0.12,1.478-0.269,2.112-0.718\r\n\tc0.514-0.364,1.048-0.701,1.571-1.054c0.064-0.044,0.137-0.096,0.167-0.161c0.157-0.341,0.186-0.696,0.056-1.051\r\n\tc-0.124-0.336-0.407-0.524-0.714-0.666c-0.47-0.22-0.976-0.332-1.49-0.385c-0.848-0.09-1.698-0.168-2.548-0.233\r\n\tc-0.552-0.042-1.044-0.216-1.482-0.546c-0.313-0.233-0.426-0.532-0.299-0.901c0.207-0.599,0.432-1.189,0.636-1.789\r\n\tc0.226-0.668,0.692-1.119,1.315-1.432c1.114-0.56,2.252-1.054,3.463-1.382c0.233-0.063,0.462-0.101,0.701-0.102\r\n\tc0.118,0,0.238,0,0.356,0.01c0.19,0.018,0.381-0.035,0.538-0.143c0.688-0.472,1.05-1.125,1.12-1.929\r\n\tc0.027-0.303-0.056-0.598-0.2-0.872c-0.258-0.491-0.689-0.78-1.217-0.902c-0.46-0.11-0.937-0.153-1.407-0.222\r\n\tc-0.45-0.068-0.904-0.116-1.353-0.199c-0.633-0.117-1.124-0.519-1.647-0.849c-0.058-0.037-0.094-0.151-0.094-0.231\r\n\tc-0.002-0.331-0.009-0.664,0.028-0.991c0.049-0.439,0.285-0.778,0.672-1.015c0.42-0.261,0.889-0.377,1.371-0.445\r\n\tc0.678-0.093,1.359-0.177,2.037-0.265c0.662-0.085,1.232-0.348,1.696-0.824c0.124-0.126,0.255-0.245,0.388-0.36\r\n\tc0.308-0.266,0.656-0.417,1.08-0.417c0.314-0.003,0.632-0.053,0.941-0.11c0.315-0.058,0.545-0.235,0.617-0.559\r\n\tc0.104-0.465,0.227-0.928,0.291-1.399c0.038-0.287,0.019-0.58,0.011-0.9c-0.002-0.114-0.084-0.211-0.197-0.236\r\n\tC36.323,5.517,36.067,5.456,35.809,5.433\"/> <path d=\"M101.071,21.155c0,0.595-0.006,1.189,0.002,1.784c0.01,0.77,0.099,1.533,0.23,2.292\r\n\tc0.089,0.509,0.192,1.016,0.258,1.528c0.091,0.694,0.14,1.396,0.134,2.098c-0.002,0.098,0.001,0.194,0.012,0.292\r\n\tc0.048,0.369,0.234,0.491,0.598,0.387c0.571-0.16,1.009-0.476,1.271-1.015c0.191-0.387,0.317-0.792,0.418-1.21\r\n\tc0.145-0.595,0.288-1.192,0.459-1.781c0.187-0.646,0.428-1.276,0.602-1.923c0.278-1.032,0.521-2.075,0.779-3.114\r\n\tc0.252-1.02,0.512-2.04,0.758-3.061c0.216-0.9,0.49-1.783,0.836-2.642c0.218-0.542,0.487-1.065,0.734-1.593\r\n\tc0.179-0.385,0.326-0.778,0.274-1.21c-0.037-0.309-0.081-0.617-0.145-0.922c-0.11-0.545,0.042-0.996,0.457-1.372\r\n\tc0.255-0.23,0.563-0.384,0.877-0.477c0.614-0.181,1.247-0.308,1.878-0.435c0.872-0.176,1.768-0.254,2.59-0.626\r\n\tc0.293-0.131,0.547-0.304,0.737-0.563c0.245-0.338,0.318-1.153-0.139-1.506c-0.225-0.172-0.459-0.344-0.715-0.461\r\n\tc-0.686-0.312-1.414-0.495-2.15-0.656c-1.031-0.225-2.074-0.33-3.121-0.412c-1.127-0.088-2.255-0.164-3.377-0.295\r\n\tc-1.037-0.12-2.073-0.198-3.118-0.156c-0.669,0.024-1.316,0.149-1.904,0.492c-0.203,0.119-0.416,0.224-0.632,0.325\r\n\tc-0.444,0.207-0.901,0.359-1.406,0.243c-0.308-0.071-0.623-0.123-0.926-0.21c-0.542-0.159-1.069-0.147-1.604,0.034\r\n\tc-0.758,0.259-1.253,0.728-1.344,1.54c-0.023,0.216-0.017,0.424,0.124,0.613c0.338,0.457,0.672,0.915,0.999,1.379\r\n\tc0.093,0.129,0.207,0.209,0.356,0.241c0.34,0.072,0.681,0.136,1.021,0.199c0.545,0.102,1.095,0.188,1.636,0.301\r\n\tc0.494,0.105,0.98,0.241,1.47,0.357c0.089,0.02,0.209,0.034,0.277-0.007c0.129-0.079,0.228-0.039,0.33,0.022\r\n\tc0.297,0.18,0.515,0.422,0.587,0.768c0.083,0.391,0.164,0.781,0.24,1.172c0.122,0.615,0.162,1.237,0.122,1.861\r\n\tc-0.048,0.719-0.094,1.44-0.202,2.15c-0.162,1.075-0.167,2.157-0.246,3.232c-0.058,0.777-0.043,1.558-0.06,2.337H101.071z\"/> <path d=\"M6.69,21.155c0,0.595-0.005,1.189,0.001,1.784c0.01,0.77,0.1,1.533,0.231,2.292\r\n\tc0.088,0.509,0.191,1.016,0.258,1.528c0.091,0.694,0.14,1.396,0.132,2.098c-0.001,0.098,0.002,0.194,0.013,0.292\r\n\tc0.048,0.369,0.233,0.491,0.599,0.387c0.572-0.16,1.008-0.476,1.271-1.015c0.19-0.387,0.317-0.792,0.418-1.21\r\n\tc0.145-0.595,0.287-1.192,0.459-1.781c0.186-0.646,0.427-1.276,0.602-1.923c0.278-1.032,0.521-2.075,0.778-3.114\r\n\tc0.253-1.02,0.513-2.04,0.757-3.061c0.217-0.9,0.49-1.783,0.836-2.642c0.219-0.542,0.487-1.065,0.734-1.593\r\n\tc0.18-0.385,0.327-0.778,0.275-1.21c-0.037-0.309-0.082-0.617-0.145-0.922c-0.11-0.545,0.043-0.996,0.457-1.372\r\n\tc0.254-0.23,0.563-0.384,0.877-0.477c0.615-0.181,1.247-0.308,1.876-0.435c0.873-0.176,1.768-0.254,2.591-0.626\r\n\tc0.292-0.131,0.546-0.304,0.736-0.563c0.244-0.338,0.319-1.153-0.139-1.506c-0.224-0.172-0.458-0.344-0.714-0.461\r\n\tc-0.687-0.312-1.413-0.495-2.151-0.656c-1.03-0.225-2.072-0.33-3.12-0.412c-1.127-0.088-2.256-0.164-3.377-0.295\r\n\tc-1.037-0.12-2.075-0.198-3.117-0.156C7.158,4.131,6.512,4.255,5.923,4.599C5.72,4.718,5.506,4.823,5.292,4.923\r\n\tC4.846,5.131,4.39,5.283,3.885,5.166C3.577,5.095,3.262,5.043,2.96,4.956C2.417,4.797,1.888,4.809,1.354,4.99\r\n\tC0.597,5.249,0.101,5.718,0.011,6.53c-0.024,0.216-0.018,0.424,0.122,0.613c0.339,0.457,0.672,0.915,1,1.379\r\n\tC1.224,8.651,1.34,8.73,1.49,8.762C1.828,8.834,2.17,8.898,2.51,8.961c0.545,0.102,1.094,0.323,1.636,0.437\r\n\tc0.493,0.105,0.659,0.161,1.15,0.274c0.089,0.021,0.528-0.019,0.597-0.059c0.129-0.079,0.228-0.039,0.331,0.022\r\n\tc0.297,0.18,0.514,0.422,0.587,0.768c0.082,0.391,0.163,0.781,0.24,1.172c0.121,0.615,0.162,1.237,0.121,1.861\r\n\tc-0.048,0.719-0.094,1.44-0.201,2.15c-0.162,1.075-0.167,2.157-0.246,3.232c-0.058,0.777-0.043,1.558-0.06,2.337H6.69z\"/> <path d=\"M93.381,7.474c-0.104-0.615-0.364-1.167-0.768-1.652c-0.694-0.833-1.58-1.38-2.644-1.629\r\n\tc-0.784-0.181-1.562-0.16-2.257,0.31c-0.25,0.17-0.482,0.371-0.704,0.578c-0.679,0.632-1.181,1.382-1.505,2.244\r\n\tc-0.201,0.529-0.352,1.072-0.447,1.631c-0.134,0.781-0.18,1.569-0.168,2.358c0.018,1.1,0.131,2.194,0.294,3.284\r\n\tc0.15,0.994,0.294,1.986,0.434,2.98c0.07,0.5,0.151,1.002,0.188,1.507c0.069,0.927-0.026,1.848-0.216,2.758\r\n\tc-0.163,0.787-0.226,1.583-0.15,2.382c0.096,0.998,0.215,1.995,0.327,2.992c0.055,0.476,0.067,0.95-0.005,1.426\r\n\tc-0.03,0.212-0.044,0.425-0.062,0.638c-0.01,0.115,0.018,0.22,0.139,0.265c0.541,0.202,1.082,0.338,1.631,0.02\r\n\tc0.24-0.141,0.432-0.334,0.609-0.546c0.476-0.567,0.687-1.24,0.848-1.938c0.16-0.693,0.307-1.389,0.522-2.067\r\n\tc0.161-0.519,0.408-1.011,0.635-1.508c0.386-0.843,0.558-1.722,0.482-2.643c-0.051-0.606-0.021-1.205,0.103-1.801\r\n\tc0.062-0.305,0.121-0.613,0.147-0.921c0.075-0.934,0.114-1.868,0.204-2.798c0.076-0.788,0.265-1.551,0.676-2.25\r\n\tc0.152-0.254,0.337-0.426,0.64-0.459c0.281-0.034,0.472-0.187,0.6-0.427c0.058-0.112,0.128-0.222,0.166-0.342\r\n\tc0.12-0.39,0.258-0.776,0.336-1.176c0.093-0.476,0.133-0.962,0.197-1.441C93.547,8.649,93.48,8.058,93.381,7.474\"/> <path d=\"M82.052,5.356c0.061-0.221,0.103-0.25,0.327-0.256c0.098-0.004,0.2-0.004,0.294-0.03\r\n\tc0.467-0.128,0.93-0.266,1.395-0.397c0.136-0.04,0.209-0.112,0.187-0.252c-0.022-0.153-0.043-0.31-0.083-0.458\r\n\tc-0.053-0.2-0.096-0.219-0.296-0.156c-0.256,0.08-0.504,0.181-0.764,0.246c-0.271,0.069-0.55,0.139-0.842,0.121\r\n\tc0.101-0.556,0.225-0.683,0.734-0.788c0.048-0.008,0.097-0.021,0.146-0.024c0.35-0.026,0.584-0.231,0.771-0.492\r\n\tc0.095-0.133,0.147-0.295,0.226-0.442c0.034-0.063,0.074-0.146,0.135-0.174c0.484-0.216,0.944-0.498,1.475-0.605\r\n\tc0.258-0.052,0.444-0.208,0.579-0.425c0.118-0.191,0.24-0.38,0.349-0.577c0.048-0.085,0.064-0.187,0.093-0.273\r\n\tc-0.364-0.219-0.637-0.122-0.883,0.129c-0.027,0.028-0.061,0.051-0.087,0.08c-0.271,0.302-0.59,0.545-0.969,0.705\r\n\tc-0.262,0.111-0.515,0.248-0.822,0.196c-1.095-0.188-2.195-0.141-3.296-0.086c-0.088,0.004-0.178,0.016-0.266,0.005\r\n\tc-0.332-0.037-0.663-0.107-0.997,0.029c-0.034-0.052-0.061-0.091-0.088-0.129c-0.133-0.195-0.199-0.216-0.42-0.142\r\n\tc-0.197,0.066-0.288,0.049-0.4-0.113c-0.113-0.162-0.197-0.34-0.313-0.496c-0.107-0.149-0.224-0.299-0.366-0.414\r\n\tc-0.106-0.085-0.255-0.203-0.403-0.094c-0.144,0.105-0.181,0.278-0.149,0.451c0.017,0.085,0.044,0.173,0.091,0.244\r\n\tc0.086,0.13,0.179,0.259,0.293,0.365c0.285,0.271,0.582,0.529,0.875,0.791c0.119,0.107,0.231,0.208,0.153,0.398\r\n\tc-0.023,0.055,0.011,0.156,0.053,0.214c0.129,0.184,0.276,0.354,0.414,0.532c0.1,0.131,0.221,0.256,0.19,0.441\r\n\tc-0.042,0.266-0.085,0.533-0.129,0.814c-0.138,0-0.26,0.024-0.37-0.003c-0.326-0.078-0.646-0.176-0.968-0.268\r\n\tc-0.261-0.075-0.515-0.199-0.802-0.121c-0.078,0.289-0.063,0.531,0.214,0.703c0.05,0.031,0.091,0.076,0.128,0.121\r\n\tc0.164,0.198,0.378,0.275,0.63,0.27c0.218-0.006,0.436-0.019,0.655-0.021c0.188-0.001,0.377-0.001,0.564,0.018\r\n\tc0.258,0.024,0.331,0.124,0.295,0.368c-0.017,0.115-0.027,0.233-0.051,0.345c-0.061,0.275-0.143,0.304-0.355,0.282\r\n\tc-0.345-0.036-0.693-0.047-1.04-0.041c-0.195,0.004-0.393,0.047-0.582,0.102c-0.207,0.058-0.287,0.197-0.276,0.396\r\n\tc0.01,0.199,0.073,0.284,0.311,0.322c0.161,0.025,0.338,0.032,0.497-0.004c0.55-0.121,1.098-0.13,1.652-0.044\r\n\tc0.25,0.037,0.292,0.099,0.164,0.322c-0.121,0.208-0.186,0.428-0.219,0.661c-0.01,0.067-0.021,0.14-0.056,0.195\r\n\tc-0.082,0.126-0.072,0.256-0.048,0.395c0.03,0.178,0.087,0.358,0.022,0.562c-0.138,0.014-0.277,0.049-0.41,0.036\r\n\tc-0.292-0.025-0.55,0.066-0.786,0.211c-0.244,0.146-0.48,0.308-0.699,0.488c-0.248,0.203-0.408,0.481-0.482,0.788\r\n\tc-0.034,0.141-0.006,0.31,0.04,0.452c0.061,0.194,0.256,0.246,0.429,0.127c0.085-0.059,0.166-0.142,0.219-0.23\r\n\tc0.08-0.133,0.129-0.285,0.202-0.421c0.054-0.103,0.107-0.216,0.19-0.286c0.337-0.287,0.755-0.278,1.169-0.323\r\n\tc0.01,0.081,0.013,0.118,0.021,0.156c0.053,0.262,0.111,0.306,0.386,0.357c0.29,0.053,0.575,0.046,0.857-0.022\r\n\tc0.275-0.066,0.539-0.2,0.67-0.445c0.087-0.161,0.184-0.177,0.323-0.176c0.211,0.002,0.384,0.095,0.531,0.234\r\n\tc0.085,0.083,0.159,0.175,0.242,0.258c0.13,0.126,0.326,0.177,0.43,0.116c0.094-0.053,0.157-0.281,0.115-0.429\r\n\tc-0.013-0.047-0.032-0.095-0.062-0.133c-0.34-0.426-0.735-0.761-1.333-0.751c-0.107,0.002-0.211-0.011-0.315-0.017\r\n\tc-0.014-0.293,0.01-0.377,0.21-0.802c0.207-0.435,0.385-0.876,0.326-1.372c-0.001-0.016,0.02-0.032,0.039-0.06\r\n\tc0.248-0.044,0.501-0.025,0.75,0.055c0.086,0.028,0.17,0.06,0.257,0.069c0.18,0.021,0.222-0.014,0.268-0.193\r\n\tc0.028-0.113,0.056-0.227,0.073-0.343c0.031-0.183-0.022-0.254-0.209-0.273c-0.119-0.009-0.239-0.001-0.357-0.011\r\n\tc-0.252-0.02-0.504-0.044-0.784-0.069C81.979,5.654,82.011,5.505,82.052,5.356\"/> <path d=\"M49.266,17.982c0.195,0.265,0.613,0.635,0.815,0.895c0.062,0.083,0.123,0.16,0.182,0.235\r\n\tc0.862,1.5,2.457,2.675,3.181,4.053c0.07,0.09,0.141,0.184,0.215,0.277c0.072,0.094,0.145,0.189,0.217,0.286\r\n\tc0.063,0.073,0.124,0.147,0.186,0.22c0.489,0.592,0.931,1.209,1.099,1.948c0.124,0.551,0.241,1.076,0.283,1.615\r\n\tc0.011,0.134,0.017,0.271,0.017,0.408c-0.351,0.909-0.749,1.692-1.467,2.036c-0.235,0.089-0.472,0.09-0.675-0.089\r\n\tc-0.249-0.22-0.513-0.429-0.737-0.672c-0.699-0.755-1.144-1.547-1.821-2.322c-0.153-0.178-0.345-0.356-0.557-0.536\r\n\tc-0.071-0.059-0.145-0.118-0.218-0.179c-1.25-0.851-2.047-1.634-2.931-2.845c-0.079-0.078-0.157-0.157-0.239-0.238\r\n\tc-0.081-0.08-0.166-0.16-0.252-0.243c-0.078-0.064-0.15-0.121-0.22-0.174c-0.609-0.439-1.196-0.555-2.007-0.612\r\n\tC43.8,22.01,43.4,22.264,43.36,22.812c-0.01,0.141-0.017,0.283-0.021,0.424c-0.002,0.07-0.003,0.142-0.004,0.211\r\n\tc-0.178,0.688,0.118,1.1-0.305,2.754c-0.328,1.286-2.677,2.326-4.296,1.393c-0.141-0.098-0.26-0.214-0.359-0.347\r\n\tc-0.196-0.265-0.302-0.593-0.308-0.973c-0.006-0.291,0.021-0.584,0.043-0.874c0.052-0.729,0.104-1.458,0.171-2.185\r\n\tc0.053-0.587-0.073-1.143-0.262-1.691c-0.129-0.371-0.188-0.749-0.203-1.144c-0.037-1.078,0.112-2.136,0.309-3.19\r\n\tc0.145-0.774,0.292-1.55,0.434-2.325c0.215-1.175,0.322-2.358,0.201-3.547c-0.053-0.533-0.16-1.058-0.25-1.588\r\n\tc-0.139-0.806-0.318-1.606-0.291-2.432c0.019-0.603,0.139-1.179,0.545-1.665c0.224-0.266,0.482-0.486,0.792-0.647\r\n\tc0.304-0.159,0.617-0.286,0.94-0.394c0.161-0.052,0.324-0.099,0.49-0.143c2.64-0.574,5.36-0.269,7.982,0.352\r\n\tc0.179,0.037,0.358,0.076,0.54,0.115c0.181,0.039,0.366,0.078,0.556,0.114c0.659,0.119,1.514,0.089,2.118,0.408\r\n\tc0.156,0.082,0.313,0.167,0.456,0.272c0.168,0.122,0.312,0.279,0.364,0.485c0.142,0.586,0.292,1.171,0.415,1.76\r\n\tc0.133,0.639,0.231,1.286,0.357,1.925c0.056,0.281,0.116,0.537,0.27,0.805c0.029,0.047,0.032,0.248,0.026,0.313\r\n\tc-0.027,0.29-0.026,0.487-0.095,0.768c-0.158,0.632-0.363,1.253-0.529,1.883c-0.158,0.604-0.382,1.185-0.646,1.751\r\n\tc-0.247,0.528-0.599,0.988-1.024,1.385c-0.379,0.354-0.798,0.667-1.196,0.998c-0.112,0.093-0.232,0.134-0.383,0.13\r\n\tc-0.295-0.011-0.592-0.003-0.889-0.003C49.293,17.934,49.279,17.958,49.266,17.982 M49.099,11.753\r\n\tc0.013-0.388,0.02-0.776-0.119-1.153c-0.079-0.208-0.218-0.308-0.446-0.318c-0.351-0.016-0.799,0.13-1.544,0.3\r\n\tc-0.733,0.167-0.872-0.083-1.628,0.151c-0.347,0.106-0.688,0.247-1.015,0.407c-0.399,0.199-0.652,0.741-0.733,1.19\r\n\tc-0.069,0.378,0.001,1.183,0.078,1.543c0.08,0.37,0.18,0.738,0.285,1.103c0.131,0.463,0.404,0.794,0.906,0.908\r\n\tc0.708,0.163,1.367,0.045,1.888-0.44c0.622-0.581,1.215-1.201,1.76-1.852C48.965,13.075,49.081,12.418,49.099,11.753\"/> </symbol>";
	module.exports = sprite.add(image, "spr-logo");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 140.022 23.999\" id=\"spr-logosm\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0,3.936l16.208,4.043l9.109-4.254l-7.876,10.262L0,3.936L0,3.936z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M79.516,5.904l3.83,4.746l6.985-5.66l-8.627,12.091L79.516,5.904\r\n\tL79.516,5.904z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35.73,14.412c-0.172,0.458-0.348,0.86-0.522,1.203\r\n\tc-0.153,0.292-0.343,0.605-0.57,0.935c-0.225,0.3-0.488,0.581-0.785,0.833c-0.297,0.253-0.648,0.492-1.048,0.715\r\n\tc-0.4,0.223-0.833,0.39-1.295,0.5c-0.463,0.111-0.982,0.167-1.558,0.167c-0.859,0-1.579-0.137-2.163-0.415\r\n\tc-0.584-0.276-1.018-0.655-1.298-1.134c-0.281-0.479-0.441-1.027-0.485-1.644c-0.008-0.11-0.008-0.25-0.001-0.42\r\n\tc0.006-0.164,0.01-0.256,0.012-0.28c0.026-0.402,0.087-0.801,0.18-1.2c0.092-0.396,0.216-0.786,0.37-1.165\r\n\tc0.154-0.378,0.338-0.756,0.554-1.134c0.454-0.801,1.139-1.492,2.051-2.07c0.912-0.581,2.059-0.87,3.435-0.87\r\n\tc1.074,0,1.88,0.208,2.425,0.628c0.543,0.417,0.88,0.927,1.013,1.525c0.046,0.229,0.076,0.435,0.09,0.625\r\n\tc0.015,0.188,0.012,0.414-0.006,0.676c-0.009,0.134-0.022,0.265-0.041,0.396s-0.033,0.241-0.044,0.328h-3.138\r\n\tc0.043-0.634-0.008-1.084-0.156-1.352c-0.146-0.268-0.422-0.402-0.827-0.402c-0.286,0-0.565,0.06-0.841,0.176\r\n\tc-0.13,0.045-0.263,0.131-0.395,0.253c-0.112,0.104-0.241,0.25-0.385,0.435c-0.295,0.402-0.531,0.971-0.707,1.704\r\n\tc-0.114,0.476-0.181,0.878-0.202,1.203c-0.031,0.461,0.021,0.819,0.157,1.075c0.199,0.42,0.539,0.628,1.014,0.628\r\n\tc0.486,0,0.87-0.161,1.147-0.479c0.167-0.188,0.304-0.381,0.417-0.586c0.136-0.238,0.26-0.525,0.372-0.855H35.73L35.73,14.412z\r\n\t M44.665,18.426h-3.259l1.745-7.207h-2.774l-1.745,7.207h-3.26l2.33-9.631h9.293L44.665,18.426L44.665,18.426z M57.178,13.602\r\n\tc-0.236,0.983-0.594,1.813-1.074,2.496c-0.243,0.342-0.497,0.646-0.766,0.905c-0.267,0.262-0.563,0.5-0.887,0.718\r\n\tc-0.607,0.39-1.228,0.661-1.863,0.819c-0.334,0.081-0.644,0.143-0.929,0.182c-0.289,0.042-0.585,0.063-0.895,0.063\r\n\tc-0.654,0-1.265-0.095-1.84-0.289c-0.573-0.19-1.053-0.495-1.442-0.912c-0.39-0.417-0.643-0.965-0.759-1.644\r\n\tc-0.057-0.349-0.074-0.718-0.048-1.099c0.023-0.352,0.09-0.763,0.198-1.242c0.229-0.959,0.588-1.79,1.074-2.496\r\n\tc0.252-0.348,0.507-0.648,0.768-0.905c0.261-0.256,0.552-0.495,0.877-0.718c0.298-0.19,0.604-0.352,0.918-0.485\r\n\tc0.314-0.134,0.628-0.241,0.944-0.322c0.625-0.158,1.231-0.238,1.816-0.238c0.595,0,1.171,0.077,1.722,0.232\r\n\tc0.553,0.152,1.04,0.426,1.46,0.816c0.216,0.209,0.393,0.444,0.531,0.706c0.141,0.262,0.25,0.566,0.329,0.917\r\n\tc0.079,0.348,0.104,0.753,0.072,1.212C57.361,12.696,57.291,13.125,57.178,13.602L57.178,13.602z M53.812,13.602\r\n\tc0.097-0.396,0.157-0.75,0.178-1.058c0.038-0.56-0.049-0.979-0.262-1.262c-0.213-0.283-0.563-0.423-1.048-0.423\r\n\tc-0.61,0-1.111,0.229-1.507,0.685c-0.394,0.459-0.704,1.144-0.925,2.058c-0.098,0.399-0.158,0.759-0.179,1.072\r\n\tc-0.038,0.565,0.046,0.986,0.254,1.266c0.208,0.28,0.553,0.419,1.033,0.419c0.61,0,1.116-0.232,1.518-0.694\r\n\tC53.275,15.205,53.59,14.513,53.812,13.602L53.812,13.602z M67.804,13.528c-0.368,1.513-0.951,2.65-1.746,3.416\r\n\tc-0.798,0.766-1.553,1.257-2.262,1.471c-0.684,0.19-1.234,0.286-1.649,0.286c-0.532,0-1.037-0.11-1.515-0.331\r\n\tc-0.128-0.06-0.248-0.128-0.357-0.206c-0.109-0.077-0.213-0.167-0.312-0.265l-0.936,3.856H55.76l3.179-13.148h3.104L61.86,9.287\r\n\tc0.889-0.664,1.838-0.994,2.848-0.994c1.359,0,2.31,0.487,2.854,1.465c0.366,0.659,0.517,1.462,0.454,2.41\r\n\tC67.989,12.58,67.917,13.033,67.804,13.528L67.804,13.528z M64.446,13.492c0.079-0.313,0.125-0.599,0.143-0.855\r\n\tc0.018-0.262,0.004-0.5-0.045-0.715c-0.07-0.378-0.215-0.652-0.438-0.819c-0.223-0.17-0.49-0.253-0.805-0.253\r\n\tc-0.242,0-0.479,0.051-0.71,0.152s-0.458,0.256-0.685,0.462c-0.226,0.205-0.422,0.477-0.586,0.813\r\n\tc-0.166,0.334-0.308,0.739-0.425,1.215c-0.033,0.14-0.063,0.286-0.085,0.441c-0.025,0.154-0.042,0.297-0.051,0.431\r\n\tc-0.027,0.408,0.01,0.763,0.114,1.066c0.07,0.232,0.205,0.405,0.404,0.521c0.2,0.116,0.452,0.176,0.757,0.176\r\n\tc0.585,0,1.081-0.227,1.482-0.682C63.951,14.924,64.26,14.272,64.446,13.492L64.446,13.492z M77.202,11.22h-2.916l-1.745,7.207\r\n\th-3.26l1.746-7.207h-2.909l0.584-2.425h9.083L77.202,11.22L77.202,11.22z M97.959,18.087h-3.316L94.62,17.45\r\n\tc-0.221,0.164-0.442,0.298-0.662,0.405c-0.222,0.11-0.469,0.197-0.74,0.269c-0.66,0.169-1.218,0.252-1.676,0.252\r\n\tc-0.647,0-1.174-0.077-1.578-0.232c-0.404-0.151-0.691-0.384-0.861-0.694c-0.246-0.447-0.353-0.926-0.318-1.439\r\n\tc0.011-0.164,0.037-0.336,0.079-0.524c0.146-0.61,0.387-1.12,0.727-1.527c0.339-0.405,0.744-0.721,1.217-0.941\r\n\tc0.395-0.208,0.849-0.363,1.361-0.461c0.24-0.048,0.497-0.095,0.771-0.146c0.272-0.048,0.56-0.089,0.862-0.125\r\n\tc0.303-0.036,0.512-0.063,0.628-0.081c0.334-0.044,0.584-0.083,0.742-0.113c0.213-0.044,0.358-0.098,0.438-0.16\r\n\tc0.077-0.06,0.135-0.158,0.174-0.292l0.056-0.217c0.016-0.083,0.024-0.14,0.026-0.176c0.033-0.488-0.278-0.733-0.93-0.733\r\n\tc-0.28,0-0.506,0.021-0.677,0.066c-0.169,0.044-0.316,0.127-0.437,0.253c-0.123,0.125-0.228,0.274-0.317,0.449\r\n\tc-0.087,0.173-0.168,0.399-0.245,0.67h-3.143c0.114-0.423,0.235-0.778,0.364-1.063c0.128-0.286,0.286-0.557,0.474-0.819\r\n\tc0.19-0.262,0.429-0.506,0.715-0.733c0.286-0.229,0.627-0.438,1.021-0.628c0.365-0.169,0.786-0.297,1.263-0.39\r\n\tc0.477-0.089,1-0.134,1.568-0.134c0.607,0,1.136,0.05,1.578,0.148c0.445,0.099,0.806,0.244,1.083,0.435\r\n\tc0.55,0.396,0.862,0.86,0.937,1.397c0.01,0.104,0.018,0.214,0.02,0.327s-0.001,0.235-0.01,0.37c-0.019,0.28-0.066,0.589-0.14,0.926\r\n\tl-1.026,4.119c-0.058,0.25-0.106,0.458-0.137,0.631c-0.034,0.173-0.056,0.316-0.063,0.433c0.001,0.053,0.001,0.089,0,0.113\r\n\tc0.004,0.086,0.028,0.161,0.073,0.224c0.043,0.059,0.131,0.125,0.265,0.196L97.959,18.087L97.959,18.087z M95.223,14.022\r\n\tl0.017-0.072l-0.253,0.063c-0.024,0.006-0.161,0.033-0.406,0.086c-0.248,0.054-0.46,0.093-0.637,0.12\r\n\tc-0.177,0.023-0.38,0.068-0.604,0.134c-0.226,0.063-0.434,0.137-0.62,0.218c-0.128,0.06-0.229,0.143-0.302,0.25\r\n\tc-0.076,0.108-0.131,0.253-0.173,0.441c-0.013,0.057-0.021,0.102-0.023,0.132c-0.01,0.148,0.034,0.297,0.129,0.443\r\n\tc0.074,0.086,0.17,0.151,0.287,0.19c0.117,0.042,0.271,0.062,0.466,0.062c0.381,0,0.776-0.151,1.182-0.452\r\n\tC94.691,15.333,95.003,14.793,95.223,14.022L95.223,14.022z M109.205,14.055c-0.172,0.458-0.348,0.86-0.522,1.203\r\n\tc-0.154,0.292-0.343,0.604-0.57,0.935c-0.225,0.301-0.487,0.581-0.785,0.834c-0.298,0.253-0.648,0.491-1.048,0.715\r\n\tc-0.4,0.223-0.834,0.39-1.295,0.5c-0.463,0.109-0.982,0.167-1.558,0.167c-0.859,0-1.579-0.137-2.163-0.415s-1.018-0.655-1.298-1.135\r\n\tc-0.28-0.479-0.441-1.027-0.485-1.644c-0.007-0.11-0.008-0.25-0.001-0.42c0.006-0.164,0.01-0.255,0.012-0.28\r\n\tc0.027-0.402,0.088-0.801,0.18-1.2c0.092-0.396,0.216-0.787,0.371-1.165c0.154-0.378,0.338-0.756,0.554-1.135\r\n\tc0.454-0.801,1.14-1.492,2.051-2.069c0.912-0.581,2.059-0.87,3.435-0.87c1.073,0,1.879,0.208,2.424,0.628\r\n\tc0.543,0.417,0.88,0.926,1.013,1.524c0.045,0.23,0.076,0.435,0.09,0.626c0.014,0.187,0.012,0.414-0.006,0.676\r\n\tc-0.009,0.134-0.023,0.265-0.041,0.396c-0.019,0.131-0.034,0.241-0.044,0.328h-3.138c0.042-0.634-0.008-1.084-0.156-1.352\r\n\tc-0.146-0.268-0.422-0.402-0.827-0.402c-0.286,0-0.565,0.06-0.841,0.176c-0.13,0.044-0.262,0.13-0.395,0.253\r\n\tc-0.112,0.104-0.241,0.25-0.386,0.435c-0.295,0.402-0.531,0.971-0.707,1.704c-0.114,0.477-0.181,0.878-0.202,1.204\r\n\tc-0.031,0.461,0.021,0.819,0.157,1.075c0.199,0.419,0.539,0.628,1.015,0.628c0.485,0,0.87-0.16,1.147-0.479\r\n\tc0.166-0.187,0.304-0.381,0.417-0.586c0.136-0.239,0.26-0.524,0.372-0.855H109.205L109.205,14.055z M118.929,10.862h-2.916\r\n\tl-1.745,7.207h-3.26l1.746-7.207h-2.908l0.584-2.424h9.083L118.929,10.862L118.929,10.862z M128.238,14.114h-6.797\r\n\tc-0.008,0.048-0.013,0.093-0.019,0.134c-0.005,0.045-0.012,0.096-0.016,0.155c-0.011,0.173-0.001,0.348,0.031,0.525\r\n\tc0.021,0.169,0.067,0.318,0.133,0.452c0.067,0.134,0.157,0.253,0.262,0.36c0.108,0.104,0.241,0.182,0.404,0.235\r\n\tc0.16,0.051,0.339,0.078,0.534,0.078c0.375,0,0.735-0.089,1.077-0.271c0.157-0.081,0.296-0.19,0.415-0.331s0.245-0.345,0.383-0.613\r\n\th3.303c-0.215,0.444-0.412,0.798-0.591,1.069c-0.177,0.271-0.384,0.524-0.619,0.756c-0.211,0.232-0.467,0.453-0.771,0.658\r\n\tc-0.307,0.206-0.656,0.393-1.053,0.563c-0.781,0.336-1.717,0.506-2.808,0.506c-0.819,0-1.521-0.119-2.106-0.357\r\n\tc-0.296-0.128-0.555-0.277-0.777-0.45c-0.223-0.172-0.412-0.372-0.572-0.602c-0.158-0.229-0.28-0.482-0.369-0.753\r\n\tc-0.089-0.273-0.149-0.578-0.181-0.908c-0.01-0.11-0.015-0.241-0.015-0.39c0-0.146,0.005-0.298,0.015-0.446\r\n\tc0.025-0.379,0.09-0.792,0.19-1.239c0.262-1.072,0.714-1.999,1.354-2.784c0.641-0.784,1.414-1.371,2.323-1.754\r\n\tc0.432-0.185,0.886-0.328,1.36-0.426c0.475-0.099,0.962-0.149,1.457-0.149c0.858,0,1.567,0.14,2.128,0.422\r\n\tc0.56,0.283,0.982,0.67,1.269,1.165c0.129,0.256,0.231,0.521,0.303,0.798c0.071,0.277,0.114,0.557,0.126,0.843\r\n\tc0.013,0.283,0.009,0.554-0.008,0.81c-0.028,0.408-0.094,0.816-0.197,1.23L128.238,14.114L128.238,14.114z M125.351,12.092\r\n\tc0.023-0.134,0.039-0.256,0.046-0.366c0.027-0.402-0.049-0.691-0.228-0.863c-0.26-0.262-0.588-0.393-0.988-0.393\r\n\tc-0.33,0-0.616,0.044-0.861,0.134c-0.245,0.092-0.46,0.238-0.644,0.44c-0.153,0.176-0.287,0.346-0.397,0.507\r\n\tc-0.132,0.187-0.237,0.366-0.314,0.542H125.351L125.351,12.092z M139.795,13.17c-0.367,1.513-0.95,2.651-1.746,3.416\r\n\tc-0.797,0.765-1.553,1.257-2.262,1.471c-0.684,0.191-1.234,0.286-1.649,0.286c-0.532,0-1.037-0.11-1.515-0.33\r\n\tc-0.127-0.06-0.248-0.128-0.357-0.206c-0.109-0.077-0.213-0.167-0.312-0.265l-0.936,3.856h-3.267l3.18-13.148h3.104l-0.183,0.679\r\n\tc0.889-0.664,1.838-0.995,2.849-0.995c1.358,0,2.309,0.488,2.854,1.465c0.366,0.659,0.518,1.463,0.454,2.41\r\n\tC139.98,12.223,139.909,12.675,139.795,13.17L139.795,13.17z M136.438,13.134c0.08-0.313,0.126-0.599,0.143-0.854\r\n\tc0.018-0.262,0.004-0.5-0.045-0.715c-0.07-0.378-0.215-0.652-0.438-0.818c-0.223-0.17-0.491-0.254-0.805-0.254\r\n\tc-0.242,0-0.479,0.051-0.71,0.152c-0.231,0.102-0.459,0.256-0.685,0.462c-0.226,0.206-0.422,0.477-0.586,0.813\r\n\tc-0.166,0.333-0.308,0.738-0.425,1.215c-0.034,0.14-0.063,0.286-0.086,0.441c-0.025,0.154-0.042,0.297-0.051,0.431\r\n\tc-0.027,0.408,0.01,0.763,0.114,1.066c0.07,0.232,0.205,0.405,0.404,0.521c0.199,0.116,0.452,0.176,0.757,0.176\r\n\tc0.585,0,1.081-0.226,1.482-0.682C135.942,14.567,136.251,13.915,136.438,13.134L136.438,13.134z M16.163,6.389\r\n\tc-1.564,0-2.841-1.435-2.841-3.195S14.598,0,16.163,0c1.565,0,2.841,1.435,2.841,3.194S17.728,6.389,16.163,6.389L16.163,6.389z\r\n\t M31.519,23.752l-19.725-4.523l-10.416,4.77l9.222-12.015L31.519,23.752L31.519,23.752z M76.328,18.065h4.301l-1.925-9.701\r\n\tL76.328,18.065L76.328,18.065z M82.641,18.065h4.301l2.388-9.63L82.641,18.065L82.641,18.065z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-logosm");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 40.5 63.017\" id=\"spr-noresult\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32.5-595.483c10.217,0,18.5,8.283,18.5,18.5s-8.283,18.5-18.5,18.5\r\n\ts-18.5-8.283-18.5-18.5S22.283-595.483,32.5-595.483z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32.5-593.483c9.112,0,16.5,7.387,16.5,16.5s-7.388,16.5-16.5,16.5\r\n\tc-9.113,0-16.5-7.387-16.5-16.5S23.387-593.483,32.5-593.483z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.5-570.983h15v2h-15V-570.983z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M33-560.483c4.142,0,7.5,3.358,7.5,7.5s-3.358,7.5-7.5,7.5\r\n\ts-7.5-3.358-7.5-7.5S28.858-560.483,33-560.483z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M33-558.483c3.038,0,5.5,2.462,5.5,5.5s-2.462,5.5-5.5,5.5\r\n\ts-5.5-2.462-5.5-5.5S29.962-558.483,33-558.483z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19-552.983h27.5v7.5H19V-552.983z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.5-596.483h27v25.5h-27V-596.483z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M34.612-607.866l9.526,5.5l-16,25.883l-9.526-5.5L34.612-607.866z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35.345-605.134l6.062,3.5l-14,22.419l-6.062-3.5L35.345-605.134z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M33.747-608.366l11.258,6.5c0.478,0.276,0.642,0.888,0.366,1.366\r\n\tc-0.276,0.478-0.888,0.642-1.366,0.366l-11.258-6.5c-0.479-0.276-0.642-0.887-0.366-1.366\r\n\tC32.657-608.478,33.268-608.642,33.747-608.366z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.5-598.483c2.761,0,5,2.239,5,5c0,2.761-2.239,5-5,5\r\n\tc-2.762,0-5-2.239-5-5C32.5-596.244,34.738-598.483,37.5-598.483z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.5-596.483c1.657,0,3,1.343,3,3s-1.343,3-3,3s-3-1.343-3-3\r\n\tS35.843-596.483,37.5-596.483z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39-554.983h5.5v2H39V-554.983z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.5-554.983H27v2h-5.5V-554.983z\"/> <g> <path d=\"M40.5,31.517c0-6.565-3.434-12.309-8.592-15.586C31.963,15.634,32,15.331,32,15.017\r\n\t\tc0-1.443-0.621-2.733-1.599-3.646l2.185-3.534l0.918,0.53c0.479,0.276,1.09,0.112,1.366-0.366c0.275-0.479,0.112-1.09-0.366-1.366\r\n\t\tl-5.629-3.25l-4.763-2.75l-0.866-0.5c-0.478-0.276-1.09-0.112-1.365,0.366c-0.276,0.479-0.112,1.09,0.365,1.366l0.814,0.47\r\n\t\tL8.112,26.517l9.526,5.5l7.621-12.329c0.544,0.203,1.125,0.329,1.74,0.329c1.727,0,3.249-0.875,4.147-2.206\r\n\t\tc4.429,2.955,7.353,7.981,7.353,13.706c0,9.113-7.388,16.5-16.5,16.5c-6.209,0-11.61-3.433-14.427-8.5H16v-2H1v2h4.339\r\n\t\tc2.419,5.029,7.034,8.801,12.606,10.051c-1.276,0.978-2.221,2.358-2.663,3.949H11v2h6c0-3.038,2.463-5.5,5.5-5.5s5.5,2.462,5.5,5.5\r\n\t\th6v-2h-4.279c-0.472-1.702-1.521-3.162-2.933-4.148C34.68,47.256,40.5,40.076,40.5,31.517z M27,18.017c-1.657,0-3-1.343-3-3\r\n\t\ts1.343-3,3-3s3,1.343,3,3S28.657,18.017,27,18.017z M28.735,10.344c-0.542-0.201-1.122-0.327-1.735-0.327c-2.762,0-5,2.238-5,5\r\n\t\tc0,1.425,0.603,2.703,1.56,3.614l-6.653,10.653l-6.062-3.5l14-22.418l6.062,3.5L28.735,10.344z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-noresult");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-463 260 33 44\" id=\"spr-pdf\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M-437.8,266h-9.2v-2c0-2.2-1.8-4-4-4h-1c-2.2,0-4,1.8-4,4v2h-7v36h33v-28L-437.8,266z M-454,264c0-1.1,0.9-2,2-2h1\r\n\tc1.1,0,2,0.9,2,2v2h-5V264z M-432,300h-29v-32h5v11c0,2.2,1.8,4,4,4h1c2.2,0,4-1.8,4-4v-7h-2v7c0,1.1-0.9,2-2,2h-1c-1.1,0-2-0.9-2-2\r\n\tv-11h15v7h7V300z\"/> <path d=\"M-454.3,286.7h-3.6v9.3h1.8v-3.5h1.8c1.6,0,2.9-1.3,2.9-2.9S-452.7,286.7-454.3,286.7z M-454.4,290.9h-1.7v-2.5h1.7\r\n\tc0.7-0.1,1.3,0.5,1.4,1.2s-0.5,1.3-1.2,1.4C-454.3,290.9-454.3,290.9-454.4,290.9z\"/> <path d=\"M-446.4,286.7h-3.3v9.3h3.3c1.1,0.1,2.2-0.4,2.8-1.4c0.6-0.8,0.6-1.7,0.6-3.3c0-1.5,0-2.5-0.6-3.3\r\n\tC-444.2,287.2-445.3,286.7-446.4,286.7z M-445.2,293.8c-0.3,0.4-0.8,0.6-1.4,0.6h-1.4v-6h1.4c0.5,0,1,0.2,1.4,0.6\r\n\tc0.3,0.4,0.4,1,0.4,2.4S-444.9,293.4-445.2,293.8L-445.2,293.8z\"/> <polygon points=\"-441.2,296 -439.4,296 -439.4,292.2 -435.7,292.2 -435.7,290.6 -439.4,290.6 -439.4,288.4 -435.1,288.4 \r\n\t-435.1,286.7 -441.2,286.7 \"/> </symbol>";
	module.exports = sprite.add(image, "spr-pdf");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 11.986 16\" id=\"spr-pin\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M5.761,0h0.564c1.5,0.098,2.962,0.754,3.996,1.852C11.384,2.951,11.993,4.471,11.986,6\r\n\tc-0.04,1.171-0.568,2.253-1.103,3.272c-1.147,2.085-2.597,3.988-4.11,5.818C6.536,15.402,6.235,15.667,6.032,16H5.954\r\n\tc-0.02-0.033-0.06-0.098-0.08-0.132c-1.546-1.792-3.01-3.666-4.252-5.686c-0.601-1.007-1.171-2.052-1.48-3.19\r\n\tC-0.038,6.355-0.031,5.679,0.076,5.03c0.228-1.452,1.025-2.801,2.172-3.716C3.239,0.513,4.49,0.055,5.761,0z M4.063,1.39\r\n\tC3.105,1.782,2.284,2.492,1.74,3.374c-0.515,0.838-0.784,1.83-0.735,2.814c0.062,0.702,0.33,1.365,0.622,1.998\r\n\tc0.538,1.124,1.218,2.172,1.931,3.19c0.766,1.075,1.573,2.121,2.433,3.123c1.1-1.292,2.135-2.639,3.069-4.056\r\n\tc0.581-0.902,1.142-1.827,1.543-2.826c0.185-0.478,0.35-0.974,0.378-1.49c0.036-1.115-0.322-2.237-0.994-3.126\r\n\tC9.342,2.132,8.404,1.487,7.363,1.19C6.283,0.886,5.097,0.947,4.063,1.39z\"/> <path d=\"M5.463,3.049c0.74-0.134,1.533,0.021,2.161,0.438c0.785,0.504,1.307,1.394,1.356,2.327\r\n\tC9.031,6.528,8.805,7.254,8.37,7.82C7.841,8.517,6.993,8.967,6.117,8.994C5.366,9.03,4.605,8.766,4.038,8.271\r\n\tC3.447,7.768,3.069,7.026,3.007,6.252C2.948,5.533,3.148,4.79,3.586,4.214C4.035,3.607,4.717,3.174,5.463,3.049z M5.755,4.014\r\n\tC5.022,4.095,4.367,4.621,4.116,5.313C3.765,6.214,4.191,7.326,5.053,7.763c0.828,0.465,1.963,0.217,2.524-0.548\r\n\tC8.153,6.49,8.115,5.368,7.494,4.683C7.069,4.192,6.399,3.934,5.755,4.014z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-pin");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-471 274 16 14\" id=\"spr-print\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <path d=\"M-458,276v-2h-10v2c-1.7,0-3,1.3-3,3v4c0,1.1,0.9,2,2,2h1v-3h10v3h1c1.1,0,2-0.9,2-2v-4\r\n\t\tC-455,277.3-456.3,276-458,276z M-457,279h-1v-1h1V279z\"/> <rect x=\"-467\" y=\"283\" width=\"8\" height=\"5\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-print");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 28.6 24.6\" id=\"spr-reload\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <path d=\"M28.6,21.7l-1.2-11.1l-10.6,3.7l4.4,2.8c-1.5,2.2-4,3.5-6.8,3.5c-3.6,0-6.8-2.4-7.9-5.7l-3.8,1.3\r\n\t\tc1.6,5,6.3,8.4,11.7,8.4c4.2,0,7.9-2.1,10.2-5.4L28.6,21.7z\"/> <path d=\"M7.5,7.5C9,5.4,11.5,4,14.3,4c3.6,0,6.8,2.4,7.9,5.7l3.8-1.3C24.3,3.4,19.6,0,14.3,0C10.1,0,6.3,2.1,4.1,5.4\r\n\t\tL0,2.8L1.2,14l10.6-3.7L7.5,7.5z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-reload");

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 19.35 19.351\" id=\"spr-rss\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M0.01,0c3.943-0.009,7.877,1.232,11.095,3.511c3.164,2.217,5.645,5.399,7.002,9.018\r\n\tc0.825,2.169,1.24,4.49,1.243,6.81c-0.534,0.013-1.068,0.016-1.601,0.002c-0.02-3.567-1.104-7.126-3.148-10.055\r\n\tc-2.233-3.248-5.575-5.719-9.344-6.879C3.562,1.871,1.784,1.625,0.008,1.603C0.001,1.068,0,0.534,0.01,0z\"/> <path d=\"M0.019,6.477c2.721,0.002,5.436,0.891,7.618,2.52c2.412,1.774,4.177,4.409,4.872,7.325\r\n\tc0.24,0.984,0.351,1.998,0.366,3.011c-0.54,0.027-1.082,0.027-1.622-0.007c0.01-2.368-0.772-4.726-2.177-6.63\r\n\tc-1.698-2.328-4.319-3.964-7.163-4.44C1.284,8.142,0.645,8.11,0.008,8.078C-0.004,7.544-0.002,7.01,0.019,6.477z\"/> <path d=\"M0.011,12.894c1.664-0.003,3.317,0.672,4.499,1.845c1.235,1.189,1.947,2.891,1.948,4.604\r\n\tc-0.535,0.009-1.07,0.006-1.604-0.002c-0.027-1.265-0.519-2.523-1.43-3.413c-0.889-0.912-2.149-1.401-3.414-1.434\r\n\tC-0.005,13.959-0.001,13.427,0.011,12.894z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-rss");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 28.463 27.987\" id=\"spr-scroll-down\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M13.645,14.705c0-0.144,0.056-0.295,0.167-0.406L27.45,0.179c0.222-0.233,0.595-0.239,0.828-0.017\r\n\tc0.233,0.228,0.239,0.6,0.011,0.834l-13.645,14.12c-0.222,0.233-0.595,0.239-0.828,0.016C13.7,15.016,13.645,14.86,13.645,14.705z\"/> <path d=\"M0,0.585C0,0.43,0.061,0.279,0.178,0.163C0.411-0.06,0.784-0.054,1.006,0.179L14.65,14.299\r\n\tc0.223,0.233,0.217,0.606-0.017,0.828s-0.606,0.217-0.828-0.017L0.167,0.997C0.056,0.88,0,0.735,0,0.585z\"/> <path d=\"M13.645,27.401c0-0.145,0.056-0.295,0.167-0.406l13.645-14.12c0.222-0.233,0.595-0.239,0.828-0.017\r\n\tc0.233,0.222,0.239,0.595,0.017,0.828l-13.644,14.12c-0.223,0.233-0.595,0.239-0.828,0.017C13.7,27.707,13.645,27.551,13.645,27.401\r\n\tz\"/> <path d=\"M0,13.282c0-0.156,0.061-0.306,0.178-0.422c0.233-0.223,0.606-0.217,0.828,0.017l13.645,14.12\r\n\tc0.223,0.234,0.217,0.606-0.017,0.828c-0.233,0.223-0.606,0.217-0.828-0.017L0.167,13.688C0.056,13.571,0,13.426,0,13.282z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-scroll-down");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 20.006 21.006\" id=\"spr-search\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.506,0c-4.694,0-8.5,3.806-8.5,8.5\r\n    c0,2.239,0.872,4.269,2.287,5.787c-0.001,0.001-0.002,0.001-0.003,0.002l-4.994,4.995c-0.394,0.394-0.394,1.033,0,1.426\r\n    c0.394,0.395,1.033,0.395,1.427,0l4.994-4.994c0.04-0.04,0.058-0.091,0.09-0.135C8.153,16.476,9.768,17,11.506,17\r\n    c4.694,0,8.5-3.806,8.5-8.5S16.201,0,11.506,0z M11.506,15.125c-3.659,0-6.625-2.966-6.625-6.625c0-3.659,2.966-6.625,6.625-6.625\r\n    c3.659,0,6.625,2.966,6.625,6.625C18.131,12.159,15.165,15.125,11.506,15.125z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-search");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 139 100\" id=\"spr-service-city\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M136.7,95.5h-2.6v-72c0-1.2-1-2.2-2.3-2.2H119c-1.3-2.9-4.2-4.8-7.5-4.8c-3.3,0-6.2,1.9-7.5,4.8H93.4V4.5h0.2\r\n\tc1.2,0,2.3-1,2.3-2.2S94.8,0,93.5,0H47.9c-1.2,0-2.3,1-2.3,2.2s1,2.2,2.3,2.2H48v28.9H4.6c-1.2,0-2.3,1-2.3,2.2s1,2.2,2.3,2.2h0.2\r\n\tv57.6H2.3c-1.2,0-2.3,1-2.3,2.2C0,99,1,100,2.3,100h48h40.8h45.6c1.2,0,2.3-1,2.3-2.2C139,96.5,138,95.5,136.7,95.5z M105.7,25.8\r\n\tc1.1,0,2-0.8,2.2-1.8c0.4-1.7,1.9-3,3.7-3c1.8,0,3.3,1.2,3.7,3c0.2,1.1,1.1,1.8,2.2,1.8h12.3v69.7H93.4V25.8H105.7z M48,37.9v2.7\r\n\tH9.3v-2.7H48z M9.3,45H48v50.5H9.3V45z M52.5,95.5v-91h36.3v91H52.5z\"/> <path d=\"M98.3,90.4h9.6c1.2,0,2.3-1,2.3-2.2V66.7c0-1.2-1-2.2-2.3-2.2h-9.6c-1.2,0-2.3,1-2.3,2.2v21.5\r\n\tC96.1,89.4,97.1,90.4,98.3,90.4z M100.6,86v-7.5h5.1V86H100.6z M105.7,68.9V74h-5.1v-5.1H105.7z\"/> <path d=\"M115.1,90.4h9.6c1.2,0,2.3-1,2.3-2.2V66.7c0-1.2-1-2.2-2.3-2.2h-9.6c-1.2,0-2.3,1-2.3,2.2v21.5\r\n\tC112.9,89.4,113.9,90.4,115.1,90.4z M117.4,86v-7.5h5.1V86H117.4z M122.5,68.9V74h-5.1v-5.1H122.5z\"/> <path d=\"M98.3,57h9.6c1.2,0,2.3-1,2.3-2.2V33.8c0-1.6-1.3-2.8-2.9-2.8h-8.4c-1.6,0-2.9,1.3-2.9,2.8v20.9\r\n\tC96.1,56,97.1,57,98.3,57z M100.6,52.5V45h5.1v7.5H100.6z M105.7,35.5v5.1h-5.1v-5.1H105.7z\"/> <path d=\"M115.1,57h9.6c1.2,0,2.3-1,2.3-2.2V33.8c0-1.6-1.3-2.8-2.9-2.8h-8.4c-1.6,0-2.9,1.3-2.9,2.8v20.9\r\n\tC112.9,56,113.9,57,115.1,57z M117.4,52.5V45h5.1v7.5H117.4z M122.5,35.5v5.1h-5.1v-5.1H122.5z\"/> <path d=\"M43.1,50.1H14.3c-1.2,0-2.3,1-2.3,2.2v35.8c0,1.2,1,2.2,2.3,2.2h28.8c1.2,0,2.3-1,2.3-2.2V52.4\r\n\tC45.3,51.1,44.3,50.1,43.1,50.1z M16.5,66.5h9.9V74h-9.9V66.5z M30.9,66.5h9.9V74h-9.9V66.5z M40.8,62h-9.9v-7.5h9.9V62z M26.4,54.6\r\n\tV62h-9.9v-7.5H26.4z M16.5,78.5h9.9V86h-9.9V78.5z M30.9,86v-7.5h9.9V86H30.9z\"/> <path d=\"M67.1,9.5h-9.6c-1.2,0-2.3,1-2.3,2.2v19.1c0,1.2,1,2.2,2.3,2.2h9.6c1.2,0,2.3-1,2.3-2.2V11.7\r\n\tC69.4,10.5,68.3,9.5,67.1,9.5z M64.8,15.3v1.4v4.5v5.3v2.2h-5.1v-2.2v-5.3v-4.5v-1.4V14h5.1V15.3z\"/> <path d=\"M67.1,38.2h-9.6c-1.2,0-2.3,1-2.3,2.2v19.1c0,1.2,1,2.2,2.3,2.2h9.6c1.2,0,2.3-1,2.3-2.2V40.4\r\n\tC69.4,39.2,68.3,38.2,67.1,38.2z M64.8,43.8v1.5v4.5v3.9v3.6h-5.1v-3.6v-3.9v-4.5v-1.5v-1.2h5.1V43.8z\"/> <path d=\"M83.9,38.2h-9.6c-1.2,0-2.3,1-2.3,2.2v19.1c0,1.2,1,2.2,2.3,2.2h9.6c1.2,0,2.3-1,2.3-2.2V40.4\r\n\tC86.2,39.2,85.2,38.2,83.9,38.2z M81.7,44v1.4v4.5v4v3.5h-5.1v-3.5v-4v-4.5V44v-1.4h5.1V44z\"/> <path d=\"M67.1,66.8h-9.6c-1.2,0-2.3,1-2.3,2.2v19.1c0,1.2,1,2.2,2.3,2.2h9.6c1.2,0,2.3-1,2.3-2.2V69.1\r\n\tC69.4,67.8,68.3,66.8,67.1,66.8z M64.8,73.3V74v4.5v4.3V86h-5.1v-3.1v-4.3V74v-0.8v-1.9h5.1V73.3z\"/> <path d=\"M83.9,66.8h-9.6c-1.2,0-2.3,1-2.3,2.2v19.1c0,1.2,1,2.2,2.3,2.2h9.6c1.2,0,2.3-1,2.3-2.2V69.1\r\n\tC86.2,67.8,85.2,66.8,83.9,66.8z M81.7,73v1v4.5v4V86h-5.1v-3.5v-4V74v-1v-1.7h5.1V73z\"/> <path d=\"M83.9,9.5h-9.6c-1.2,0-2.3,1-2.3,2.2v19.1c0,1.2,1,2.2,2.3,2.2h9.6c1.2,0,2.3-1,2.3-2.2V11.7\r\n\tC86.2,10.5,85.2,9.5,83.9,9.5z M81.7,15.9v0.8v4.5v4.7v2.8h-5.1v-2.8v-4.7v-4.5v-0.8V14h5.1V15.9z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-service-city");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-266 190 148 100\" id=\"spr-service-consulting\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g id=\"spr-service-consulting_people_xA0_&#x418;&#x437;&#x43E;&#x431;&#x440;&#x430;&#x436;&#x435;&#x43D;&#x438;&#x435;_1_\"> <path d=\"M-141.3,230h-8.3v-4.2c0-4.4-2.3-8.4-5.9-10.6c1.8-1.7,2.9-4.1,2.9-6.8c0-5.2-4.2-9.5-9.5-9.5\r\n\t\tc-5.2,0-9.5,4.2-9.5,9.5c0,2.7,1.1,5.1,2.9,6.8c-3.5,2.2-5.9,6.1-5.9,10.6v4.2h-5v-4.2c0-4.4-2.3-8.4-5.9-10.6\r\n\t\tc1.8-1.7,2.9-4.1,2.9-6.8c0.1-5.1-4.2-9.4-9.4-9.4s-9.5,4.2-9.5,9.5c0,2.7,1.1,5.1,2.9,6.8c-3.5,2.2-5.9,6.1-5.9,10.6v4.1h-5v-4.2\r\n\t\tc0-4.4-2.3-8.4-5.9-10.6c1.8-1.7,2.9-4.1,2.9-6.8c0-5.2-4.2-9.5-9.5-9.5s-9.5,4.2-9.5,9.5c0,2.7,1.1,5.1,2.9,6.8\r\n\t\tc-3.5,2.2-5.9,6.1-5.9,10.6v4.2h-8.3c-1.2,0-2.2,1-2.2,2.3v31.1c0,1.3,1,2.3,2.3,2.3h8.3v10.9c0,1.3,1,2.3,2.3,2.3\r\n\t\tc1.3,0,2.3-1,2.3-2.3v-10.8h75.4v10.9c0,1.3,1,2.3,2.3,2.3c1.3,0,2.3-1,2.3-2.3v-10.9h8.3c1.3,0,2.3-1,2.3-2.3v-31.2\r\n\t\tC-139,231-140,230-141.3,230z M-157.3,208.5c0,2.7-2.2,4.8-4.8,4.8c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8\r\n\t\tS-157.3,205.8-157.3,208.5z M-169.9,225.8c0-4.3,3.5-7.8,7.8-7.8c4.3,0,7.8,3.5,7.8,7.8v9.3c0,0.3-0.3,0.6-0.6,0.6\r\n\t\ts-0.6-0.3-0.6-0.6v-6.6c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3v1.5h-3.9v-1.4c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3v6.6\r\n\t\tc0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6L-169.9,225.8L-169.9,225.8z M-187.2,208.5c0,2.7-2.2,4.8-4.8,4.8s-4.8-2.2-4.8-4.8\r\n\t\ts2.2-4.8,4.8-4.8C-189.3,203.7-187.2,205.8-187.2,208.5z M-199.8,225.8c0-4.3,3.5-7.8,7.8-7.8s7.8,3.5,7.8,7.8v9.3\r\n\t\tc0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6v-6.6c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3v1.5h-3.9v-1.4c0-1.3-1-2.3-2.3-2.3\r\n\t\tc-1.3,0-2.3,1-2.3,2.3v6.6c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6L-199.8,225.8L-199.8,225.8z M-217.1,208.5\r\n\t\tc0,2.7-2.2,4.8-4.8,4.8c-2.7,0-4.8-2.2-4.8-4.8s2.2-4.8,4.8-4.8C-219.3,203.7-217.1,205.8-217.1,208.5z M-229.7,225.8\r\n\t\tc0-4.3,3.5-7.8,7.8-7.8c4.3,0,7.8,3.5,7.8,7.8v9.3c0,0.3-0.3,0.6-0.6,0.6s-0.6-0.3-0.6-0.6v-6.6c0-1.3-1-2.3-2.3-2.3\r\n\t\tc-1.3,0-2.3,1-2.3,2.3v1.5h-3.9v-1.4c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3v6.6c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6\r\n\t\tC-229.7,235.2-229.7,225.8-229.7,225.8z M-143.7,261.1h-96.6v-26.5h6v0.5c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3v-0.5h3.7v0.5\r\n\t\tc0,2.9,2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3v-0.5h5v0.5c0,2.9,2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3v-0.5h3.9v0.5\r\n\t\tc0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3v-0.5h5v0.5c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3v-0.5h3.9v0.5c0,2.9,2.4,5.3,5.3,5.3\r\n\t\tc2.9,0,5.3-2.4,5.3-5.3v-0.5h6v26.5H-143.7z\"/> </g> <g id=\"spr-service-consulting_&#x41F;&#x440;&#x44F;&#x43C;&#x43E;&#x443;&#x433;&#x43E;&#x43B;&#x44C;&#x43D;&#x438;&#x43A;_17_1_\"> <g id=\"spr-service-consulting_&#x41F;&#x440;&#x44F;&#x43C;&#x43E;&#x443;&#x433;&#x43E;&#x43B;&#x44C;&#x43D;&#x438;&#x43A;_17\"> <g> <path d=\"M-120,277h-144c-1.1,0-2,0.9-2,2s0.9,2,2,2h144c1.1,0,2-0.9,2-2S-118.9,277-120,277z\"/> </g> </g> </g> </symbol>";
	module.exports = sprite.add(image, "spr-service-consulting");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-271 190 139 100\" id=\"spr-service-outoftown\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <path d=\"M-134.3,281h-19.4v-14.9c9.5-1.1,16.8-9.2,16.8-18.9c0-16.9-16.4-50-17-51.4c-0.4-0.8-1.2-1.2-2-1.2\r\n\t\tc-0.9,0-1.6,0.5-2,1.2c0,0.1-4.3,8.7-8.5,19.2c-3.3,8.3-5.7,15.5-7.1,21.5l-27-15.2c-0.7-0.4-1.5-0.4-2.2,0l-15.9,8.9v-2.3h0.2\r\n\t\tc1.2,0,2.3-1,2.3-2.3c0-1.2-1-2.3-2.3-2.3h-14.3c-1.2,0-2.3,1-2.3,2.3c0,1.2,1,2.3,2.3,2.3h0.2v10.2l-2.3,1.3c-0.5-2-1-4-1.7-6\r\n\t\tc-3.1-9.9-6.6-14.8-10.6-14.8s-7.5,4.8-10.6,14.8c-2.2,7.2-3.6,15-3.6,18.1c0,6.2,5.2,11.4,12,12.3V281h-19.4c-1.3,0-2.3,1-2.3,2.2\r\n\t\tc0,1.2,1,2.3,2.3,2.3h134.5c1.2,0,2.3-1,2.3-2.3C-131.9,281.9-133,281-134.3,281z M-196.5,266.6h-0.2c-1.2,0-2.3,1-2.3,2.3\r\n\t\tc0,1.2,1,2.3,2.3,2.3h0.2v9.8h-9.9v-24.3h9.9V266.6z M-192,254.4c0-1.2-1-2.3-2.3-2.3h-14.4c-1.2,0-2.3,1-2.3,2.3V281h-24.3v-22.7\r\n\t\tc1.2-1.5,2-3.3,2.3-5.2l31.5-17.7l26.9,15.1c0.1,0.6,0.2,1.2,0.4,1.8c-0.3-0.1-0.6-0.2-0.9-0.2h-9.6c-1.2,0-2.3,1-2.3,2.3v16.8\r\n\t\tc0,1.2,1,2.3,2.3,2.3h9.6c1.2,0,2.3-1,2.3-2.3v-15.3c1.2,2.4,3,4.5,5.1,6.2V281H-192V254.4L-192,254.4z M-177.3,259.4h-5.1v-2.7\r\n\t\th5.1V259.4z M-182.4,263.9h5.1v5.1h-5.1V263.9z M-163.2,264.8c1.6,0.7,3.3,1.1,5.1,1.3V281h-5.1V264.8z M-155.9,202\r\n\t\tc4.4,9.5,14.6,32.7,14.6,45.2c0,7.3-5.3,13.3-12.3,14.4v-7.2l0,0v-6.3l6.5-6.5c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0\r\n\t\tl-3.4,3.4v-4.2c0-1.2-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3v9.6l0,0v1.8l-3.4-3.4c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2\r\n\t\tl6.5,6.5v6.2c-7-1.1-12.3-7.1-12.3-14.4C-170.4,234.7-160.3,211.5-155.9,202L-155.9,202z M-228.1,227.8h5.1v4.8l-5.1,2.9V227.8z\r\n\t\t M-201.5,225.8l27.1,15.2c-0.2,1.5-0.4,2.9-0.5,4.2l-25.5-14.4c-0.7-0.4-1.5-0.4-2.2,0l-30.6,17.2c-0.2-1.2-0.4-2.6-0.7-4.1\r\n\t\tL-201.5,225.8L-201.5,225.8z M-256.9,251.4c0-2.4,1.2-9.7,3.4-16.8c3-9.5,5.6-11.6,6.3-11.6s3.4,2.1,6.3,11.6\r\n\t\tc2.2,7,3.4,14.4,3.4,16.8c0,3.8-3.2,6.9-7.5,7.7V252c0-1.2-1-2.3-2.3-2.3s-2.3,1-2.3,2.3v7.1C-253.7,258.3-256.9,255.2-256.9,251.4\r\n\t\tz M-244.9,263.7c1.8-0.3,3.6-0.8,5.1-1.6V281h-5.1V263.7z\"/> <path d=\"M-218.3,252.2h-9.6c-1.2,0-2.3,1-2.3,2.3v16.8c0,1.2,1,2.3,2.3,2.3h9.6c1.2,0,2.3-1,2.3-2.3v-16.9\r\n\t\tC-216.1,253.2-217.1,252.2-218.3,252.2z M-220.6,256.7v2.7h-5.1v-2.7H-220.6z M-225.7,269v-5.1h5.1v5.1H-225.7z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-service-outoftown");

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-576 379 104 100\" id=\"spr-service-rent\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <path d=\"M-489.4,461.4c0.3,0.3,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5c0.7-0.7,0.7-1.8,0-2.5l-2.9-2.9\r\n\t\tc-0.7-0.7-1.8-0.7-2.5,0c-0.7,0.7-0.7,1.8,0,2.5L-489.4,461.4z\"/> <path d=\"M-526.8,421.7c-0.7,0.7-0.7,1.8,0,2.5l28.7,28.7c0.3,0.3,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5\r\n\t\tc0.7-0.7,0.7-1.8,0-2.5l-28.7-28.7C-525,421-526.1,421-526.8,421.7z\"/> <path d=\"M-474.3,462l-45.6-45.7c1-3,1.6-5.9,1.6-9.2c-0.1-15.4-12.6-28-28.1-28c-15.5,0-28,12.6-28,28\r\n\t\tc0,9.1,4.4,17.5,11.8,22.9c-0.7,1.6-1.2,3.4-1.2,4.9v39c0,3,2.4,5.2,5.2,5.2h17.5c3,0,5.2-2.4,5.2-5.2v-38.8l13.9,13.8\r\n\t\tc0.3,0.3,0.8,0.5,1.3,0.5h9.6v8.7c0,1,0.8,1.8,1.8,1.8h8.7v8c0,0.7,0.5,1.4,1.2,1.7c2.1,0.8,3.9,0.9,5.1,0.9c0.1,0,0.3,0,0.4,0h0.3\r\n\t\tc2.3,0,15.1-4.2,18.9-5.2c0.6-0.2,1-0.7,1.2-1.3C-473.7,463.1-473.8,462.5-474.3,462z M-539.5,473.8c0,1-0.8,1.8-1.8,1.8H-559\r\n\t\tc-1,0-1.8-0.8-1.8-1.8v-39.1c0-1.5,0.9-3.9,1.9-5l7.6-8.5c0.3-0.3,0.7-0.5,1-0.5c0.4,0,0.8,0.2,1,0.5l5,5.4c0,0,0,0,0.1,0.1\r\n\t\tl2.7,3.1c1,1.1,1.9,3.5,1.9,5L-539.5,473.8L-539.5,473.8z M-548.4,408.5c-0.1-0.8-0.9-1.5-1.8-1.5c-0.9,0-1.6,0.6-1.8,1.5\r\n\t\tc-2.1-0.7-3.6-2.7-3.6-5c0-3,2.4-5.2,5.2-5.2c2.9,0,5.2,2.4,5.2,5.2C-544.8,405.8-546.3,407.8-548.4,408.5z M-493.9,466.7h-0.4\r\n\t\tc-0.9,0-2,0-3.2-0.3v-8.5c0-1-0.8-1.8-1.8-1.8h-8.7v-8.7c0-1-0.8-1.8-1.8-1.8h-10.6l-15.3-15.2c-0.4-0.4-1-0.6-1.6-0.5\r\n\t\tc-0.4-1-1-1.8-1.6-2.5l-0.9-1c3.6-1.3,6.6-3.5,9-6.3c3.1-3.8,4.8-8.4,4.8-13.3c0-11.5-9.3-20.9-20.9-20.9\r\n\t\tc-11.5,0-20.8,9.3-20.8,20.9c0,5.2,2,10.3,5.4,14.2c0.7,0.7,1.8,0.8,2.5,0.1c0.7-0.7,0.8-1.8,0.1-2.5c-3-3.3-4.7-7.3-4.7-11.8\r\n\t\tc0-9.5,7.7-17.3,17.3-17.3c9.5,0,17.3,7.7,17.3,17.3c0,7.8-5.2,14.8-12.8,16.6l-4.3-4.8c-0.5-0.6-1.2-1.1-1.9-1.4V412\r\n\t\tc4.1-0.8,7-4.4,7-8.6c0-4.9-4-8.7-8.7-8.7s-8.7,4-8.7,8.7c0,4.3,3.1,7.7,7,8.6v5.3c-0.7,0.3-1.4,0.8-1.9,1.4l-7.2,8.1\r\n\t\tc-6.1-4.5-9.9-11.9-9.9-19.8c0-13.5,11-24.6,24.6-24.6c13.6,0,24.7,11,24.7,24.7c0,3.2-0.6,6-1.7,9c-0.3,0.7-0.1,1.4,0.4,1.9\r\n\t\tl44.6,44.6C-485.8,464.6-492.7,466.6-493.9,466.7z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-service-rent");

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-466.9 269 23.7 24\" id=\"spr-skype\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g id=\"spr-skype_layer1\" transform=\"translate(0,-852.36218)\"> <path id=\"spr-skype_path3\" d=\"M-444,1135.9c0.2-0.8,0.3-1.6,0.3-2.4c0-6.2-5.1-11.3-11.3-11.3c-0.7,0-1.3,0.1-1.9,0.2\r\n\t\tc-1-0.6-2.2-1-3.5-1c-3.6,0-6.5,2.9-6.5,6.5c0,1.2,0.3,2.3,0.9,3.3c-0.2,0.7-0.2,1.5-0.2,2.3c0,6.2,5.1,11.3,11.3,11.3\r\n\t\tc0.7,0,1.4-0.1,2.1-0.2c0.9,0.5,2,0.8,3.1,0.8c3.6,0,6.5-2.9,6.5-6.5C-443.4,1137.8-443.5,1136.8-444,1135.9L-444,1135.9z\r\n\t\t M-449.3,1138.9c-0.5,0.7-1.3,1.3-2.3,1.7c-1,0.4-2.2,0.6-3.5,0.6c-1.6,0-3-0.3-4-0.8c-0.8-0.4-1.4-1-1.9-1.6\r\n\t\tc-0.5-0.7-0.7-1.4-0.7-2c0-0.4,0.2-0.8,0.5-1.1c0.3-0.3,0.7-0.4,1.2-0.4c0.4,0,0.7,0.1,1,0.3c0.3,0.2,0.5,0.5,0.7,1\r\n\t\tc0.2,0.5,0.4,0.8,0.6,1.1c0.2,0.3,0.5,0.5,0.9,0.7c0.4,0.2,1,0.3,1.6,0.3c0.9,0,1.7-0.2,2.3-0.6s0.8-0.8,0.8-1.4\r\n\t\tc0-0.4-0.1-0.8-0.4-1.1c-0.3-0.3-0.7-0.5-1.2-0.7s-1.2-0.3-2.1-0.5c-1.2-0.3-2.2-0.5-3-0.9c-0.8-0.3-1.5-0.8-1.9-1.4\r\n\t\tc-0.5-0.6-0.7-1.4-0.7-2.3s0.3-1.6,0.8-2.3c0.5-0.7,1.2-1.2,2.2-1.5c0.9-0.3,2.1-0.5,3.3-0.5c1,0,1.9,0.1,2.6,0.3\r\n\t\tc0.7,0.2,1.4,0.5,1.9,0.9s0.9,0.8,1.1,1.2c0.2,0.4,0.4,0.9,0.4,1.3s-0.2,0.8-0.5,1.1c-0.3,0.3-0.7,0.5-1.2,0.5\r\n\t\tc-0.4,0-0.7-0.1-1-0.3c-0.2-0.2-0.4-0.5-0.7-0.9c-0.3-0.5-0.6-1-1-1.3s-1-0.4-1.9-0.4c-0.8,0-1.5,0.2-2,0.5s-0.7,0.7-0.7,1.1\r\n\t\tc0,0.3,0.1,0.5,0.2,0.7c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.1,0.6,0.3,0.9,0.4c0.3,0.1,0.8,0.2,1.6,0.4c0.9,0.2,1.8,0.4,2.5,0.7\r\n\t\tc0.8,0.2,1.4,0.5,1.9,0.9s1,0.8,1.3,1.3s0.5,1.2,0.5,2C-448.5,1137.3-448.8,1138.1-449.3,1138.9L-449.3,1138.9z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-skype");

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 8.977 14.977\" id=\"spr-slider-arrow-left\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.977,1.368L7.609,0L0,7.61l1.368,1.368L8.977,1.368z\"/> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.368,6L0,7.368l7.609,7.609l1.368-1.368L1.368,6z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-slider-arrow-left");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-445.5 271.4 8.9 19.2\" id=\"spr-social-icon-fb\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path id=\"spr-social-icon-fb_XMLID_2_\" d=\"M-436.6,277.6h-3v-2c0-0.7,0.5-0.9,0.8-0.9c0.3,0,2.1,0,2.1,0v-3.3h-2.9c-3.2,0-4,2.5-4,4v2.2\r\n\th-1.9v3.4h1.9c0,4.4,0,9.6,0,9.6h3.9c0,0,0-5.3,0-9.6h2.7L-436.6,277.6z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-social-icon-fb");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 512 512\" id=\"spr-social-icon-g\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <path d=\"M223.5,82.1c11.8,9.6,36.4,29.7,36.4,68c0,37.3-21.5,54.9-43.1,71.5c-6.7,6.6-14.4,13.6-14.4,24.7\r\n\t\tc0,11.1,7.7,17.2,13.3,21.7l18.5,14.1c22.6,18.6,43.1,35.8,43.1,70.6c0,47.4-46.7,95.2-135,95.2C67.9,448,32,413.2,32,375.9\r\n\t\tc0-18.1,9.2-43.8,39.5-61.5c31.8-19.1,75-21.7,98-23.2c-7.2-9.1-15.4-18.7-15.4-34.3c0-8.6,2.6-13.6,5.1-19.7\r\n\t\tc-5.6,0.5-11.3,1-16.4,1c-54.4,0-85.2-39.8-85.2-79.1c0-23.2,10.8-48.9,32.9-67.5C119.8,68,154.7,64,182.4,64h105.7l-32.8,18.1\r\n\t\tH223.5z M187,305.9c-4.1-0.5-6.7-0.5-11.8-0.5c-4.6,0-32.3,1-53.9,8c-11.3,4-44.1,16.1-44.1,51.9c0,35.8,35.4,61.5,90.3,61.5\r\n\t\tc49.3,0,75.4-23.2,75.4-54.4C242.9,346.7,226,333.1,187,305.9 M201.9,210.1c11.8-11.6,12.8-27.7,12.8-36.8\r\n\t\tc0-36.3-22.1-92.7-64.7-92.7c-13.3,0-27.7,6.5-35.9,16.6c-8.7,10.6-11.3,24.2-11.3,37.3c0,33.8,20,89.7,64.2,89.7\r\n\t\tC179.8,224.3,193.6,218.2,201.9,210.1\"/> <polygon points=\"480,142.3 401.7,142.3 401.7,64.1 384,64.1 384,142.3 304.3,142.3 304.3,160.1 384,160.1 384,241 401.7,241 \r\n\t\t401.7,160.1 480,160.1 \t\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-social-icon-g");

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-447.7 269.3 13.5 23.3\" id=\"spr-social-icon-ok\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <g> <path d=\"M-445,279.8c0.9,0.8,2.1,1.4,3.4,1.5c1.2,0.1,2.4-0.1,3.5-0.7c1.5-0.8,2.7-2.3,3-4c0.3-1.2,0.2-2.5-0.3-3.6\r\n\t\t\tc-0.6-1.3-1.6-2.4-2.8-3c-1.1-0.6-2.3-0.8-3.6-0.6c-1.8,0.2-3.4,1.4-4.3,2.9c-0.7,1.2-1,2.6-0.8,4\r\n\t\t\tC-446.7,277.6-446,278.9-445,279.8z M-442.8,273.7c0.4-0.4,1-0.7,1.6-0.8c0.7-0.1,1.4,0.2,1.9,0.6c0.5,0.4,0.8,1.1,0.9,1.8\r\n\t\t\tc0,0.6-0.2,1.3-0.6,1.8c-0.5,0.5-1.1,0.8-1.8,0.8s-1.4-0.3-1.8-0.7c-0.5-0.5-0.7-1.1-0.7-1.7\r\n\t\t\tC-443.5,274.7-443.2,274.1-442.8,273.7z M-434.5,282.4c-0.2-0.4-0.7-0.7-1.1-0.8c-0.5-0.1-0.9,0-1.3,0.2c-0.4,0.2-0.8,0.4-1.2,0.6\r\n\t\t\tc-2.1,0.8-4.5,0.7-6.5-0.4c-0.3-0.2-0.6-0.4-0.9-0.5c-0.5-0.1-1.1,0-1.6,0.3c-0.4,0.3-0.6,0.8-0.6,1.3s0.2,1,0.5,1.3\r\n\t\t\tc0.2,0.2,0.4,0.3,0.5,0.4c1,0.6,2.1,1,3.3,1.3c-1.1,1.1-2.1,2.1-3.2,3.2c-0.2,0.2-0.4,0.3-0.5,0.6c-0.3,0.5-0.3,1.1-0.1,1.6\r\n\t\t\ts0.6,0.9,1.1,1c0.5,0.2,1.2,0,1.6-0.3c0.2-0.1,0.3-0.3,0.4-0.4c1-1,2-2,3-3c1.1,1.1,2.2,2.2,3.4,3.4c0.6,0.6,1.6,0.6,2.3,0.1\r\n\t\t\tc0.4-0.3,0.7-0.8,0.7-1.3s-0.2-1-0.5-1.3c-1.1-1.1-2.2-2.2-3.4-3.4c1.2-0.3,2.4-0.7,3.5-1.4c0.4-0.2,0.6-0.6,0.8-1\r\n\t\t\tC-434.2,283.4-434.2,282.9-434.5,282.4z\"/> </g> </g> </symbol>";
	module.exports = sprite.add(image, "spr-social-icon-ok");

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 612 612\" id=\"spr-social-icon-tw\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <g> <path d=\"M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411    c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513    c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101    c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104    c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194    c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485    c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z\"/> </g> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> <g style=\"fill: rgb(255, 255, 255);\"> </g> </symbol>";
	module.exports = sprite.add(image, "spr-social-icon-tw");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-452.6 275 21.2 12.1\" id=\"spr-social-icon-vk\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M-445.6,275.8c0.4-0.7,1.4-0.8,2.1-0.8c0.9,0,1.9-0.1,2.7,0.2c0.5,0.2,0.6,0.7,0.6,1.2c0,1.1-0.1,2.2-0.1,3.4\r\n\tc0,0.4,0.1,0.9,0.5,1.1c0.4,0.1,0.7-0.3,0.9-0.6c0.9-1.1,1.6-2.4,2.2-3.7c0.1-0.3,0.2-0.6,0.4-0.8c0.1-0.1,0.3-0.1,0.5-0.1\r\n\tc1.2,0,2.4,0,3.6,0c0.3,0,0.7,0.1,0.7,0.4c0,0.4-0.2,0.8-0.3,1.1c-0.7,1.4-1.8,2.5-2.7,3.8c-0.2,0.3-0.4,0.6-0.4,1s0.3,0.6,0.6,0.9\r\n\tc0.9,0.9,1.9,1.7,2.6,2.9c0.2,0.3,0.4,0.6,0.2,0.9c-0.2,0.3-0.6,0.4-1,0.4c-1,0-1.9,0-2.9,0c-0.5,0-1-0.2-1.4-0.6\r\n\tc-0.7-0.6-1.2-1.3-1.9-1.9c-0.2-0.2-0.6-0.4-0.9-0.2c-0.5,0.3-0.6,0.9-0.6,1.4c-0.1,0.4,0.1,0.9-0.3,1.1c-0.4,0.3-1,0.2-1.5,0.2\r\n\tc-1.5,0.1-3-0.4-4.2-1.2c-1.3-0.8-2.2-2.1-3.1-3.3c-1.2-1.9-2.3-3.8-3.2-5.9c-0.1-0.2-0.2-0.4-0.1-0.7c0.1-0.2,0.4-0.3,0.6-0.3\r\n\tc0.9,0,1.9,0,2.8,0c0.4,0,0.8,0.1,0.9,0.5c0.7,1.6,1.5,3.2,2.6,4.5c0.2,0.2,0.5,0.5,0.8,0.4s0.3-0.4,0.4-0.7\r\n\tc0.2-0.8,0.1-1.7,0.1-2.6c0-0.4-0.1-0.9-0.3-1.3C-444.8,276-445.2,275.9-445.6,275.8z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-social-icon-vk");

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"-1370.5 795.5 19.1 18.9\" id=\"spr-social-icon-yt\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <g> <path d=\"M-1355,804.6h-12c-1.9,0-3.5,1.6-3.5,3.5v2.8c0,2,1.6,3.5,3.5,3.5h12.1c1.9,0,3.5-1.6,3.5-3.5v-2.8\r\n\t\t\tC-1351.5,806.1-1353,804.6-1355,804.6z M-1364.5,806.8h-1.1v5.7h-1.1v-5.7h-1.1v-1h3.3V806.8L-1364.5,806.8z M-1361.3,812.5h-1\r\n\t\t\tV812c-0.2,0.2-0.4,0.4-0.6,0.5c-0.2,0.1-0.4,0.2-0.6,0.2s-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.4-0.2-0.7v-4.1h1v3.8\r\n\t\t\tc0,0.1,0,0.2,0.1,0.3c0,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1s0.2-0.2,0.3-0.3v-3.7h1V812.5z M-1357.8,811.4\r\n\t\t\tc0,0.3-0.1,0.6-0.2,0.8c-0.1,0.2-0.4,0.3-0.7,0.3c-0.2,0-0.4,0-0.5-0.1c-0.1-0.1-0.3-0.2-0.4-0.3v0.4h-1v-6.7h1v2.1\r\n\t\t\tc0.1-0.1,0.3-0.3,0.4-0.3c0.1-0.1,0.3-0.1,0.4-0.1c0.3,0,0.5,0.1,0.7,0.3s0.2,0.5,0.2,0.9L-1357.8,811.4L-1357.8,811.4z\r\n\t\t\t M-1354.5,810.1h-1.8v0.9c0,0.3,0,0.4,0.1,0.5c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0,0.3,0,0.3-0.1c0.1-0.1,0.1-0.3,0.1-0.6v-0.2h1v0.3\r\n\t\t\tc0,0.5-0.1,0.9-0.4,1.1c-0.2,0.3-0.6,0.4-1.1,0.4c-0.4,0-0.8-0.1-1-0.4c-0.2-0.3-0.4-0.6-0.4-1.1v-2.2c0-0.4,0.1-0.8,0.4-1\r\n\t\t\tc0.3-0.3,0.6-0.4,1.1-0.4c0.4,0,0.8,0.1,1,0.4c0.2,0.2,0.4,0.6,0.4,1.1V810.1L-1354.5,810.1z M-1355.9,808.3c-0.2,0-0.3,0-0.3,0.1\r\n\t\t\tc-0.1,0.1-0.1,0.2-0.1,0.4v0.5h0.9v-0.5c0-0.2,0-0.4-0.1-0.4C-1355.7,808.3-1355.8,808.3-1355.9,808.3z M-1359.2,808.3\r\n\t\t\tc-0.1,0-0.1,0-0.2,0s-0.1,0.1-0.2,0.2v3.1c0.1,0.1,0.2,0.1,0.2,0.2c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3\r\n\t\t\tV809c0-0.2,0-0.3-0.1-0.4C-1359,808.3-1359.1,808.3-1359.2,808.3z M-1365.5,802.8h1.2v-3l1.4-4.3h-1.2l-0.8,2.9h-0.1l-0.8-2.9\r\n\t\t\th-1.2l1.5,4.4V802.8L-1365.5,802.8z M-1361.2,803c0.5,0,0.9-0.1,1.2-0.4c0.3-0.3,0.4-0.6,0.4-1.1v-2.8c0-0.4-0.1-0.8-0.4-1\r\n\t\t\tc-0.3-0.3-0.7-0.4-1.1-0.4c-0.5,0-0.9,0.1-1.2,0.4c-0.3,0.2-0.4,0.6-0.4,1v2.8c0,0.5,0.1,0.8,0.4,1.1\r\n\t\t\tC-1362,802.8-1361.6,803-1361.2,803z M-1361.6,798.6c0-0.1,0-0.2,0.1-0.3s0.2-0.1,0.3-0.1c0.1,0,0.3,0,0.3,0.1\r\n\t\t\tc0.1,0.1,0.1,0.2,0.1,0.3v2.9c0,0.1,0,0.3-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.3,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3V798.6\r\n\t\t\tz M-1358,802.9c0.2,0,0.4-0.1,0.6-0.2c0.2-0.1,0.4-0.3,0.6-0.5v0.6h1.1v-5.4h-1.1v4.1c-0.1,0.1-0.2,0.2-0.3,0.3\r\n\t\t\tc-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.2-0.1s-0.1-0.1-0.1-0.3v-4.1h-1.1v4.5c0,0.3,0.1,0.6,0.2,0.7\r\n\t\t\tC-1358.4,802.8-1358.2,802.9-1358,802.9z\"/> </g> </g> </symbol>";
	module.exports = sprite.add(image, "spr-social-icon-yt");

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 29.993 31.009\" id=\"spr-sort\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g> <path d=\"M2.5,4v5h26V4H2.5z M2.5,18h20v-5h-20V18z M2.5,27h14v-5h-14V27z\"/> </g> </symbol>";
	module.exports = sprite.add(image, "spr-sort");

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	;
	var sprite = __webpack_require__(5);;
	var image = "<symbol viewBox=\"0 0 23 23\" id=\"spr-zoom\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <path d=\"M22.3,19.2L22.2,19l0,0l-5.4-5.4c0.7-1.3,1.2-2.8,1.2-4.4c0-4.9-3.9-8.9-8.8-8.9c0,0,0,0-0.1,0\n\tc-4.9,0-8.8,3.9-8.8,8.8c0,4.9,3.9,8.9,8.8,8.9c0,0,0,0,0.1,0c1.6,0,3.1-0.4,4.4-1.2l5.4,5.4l0,0l0.1,0.1c0.4,0.4,1.1,0.4,1.5,0\n\tl1.7-1.7C22.7,20.2,22.7,19.6,22.3,19.2z M9.1,15.8c-3.6,0-6.6-3-6.5-6.7c0-3.6,3-6.6,6.6-6.6h0c1.8,0,3.4,0.7,4.6,2\n\tc1.2,1.3,1.9,2.9,1.9,4.7c0,1.8-0.7,3.4-1.9,4.7C12.6,15.1,10.9,15.8,9.1,15.8L9.1,15.8z M13.5,8.2h-3.1V5.1H8.4v3.1H5.3v2h3.1v3.1\n\th2.1v-3.1h3.1V8.2z M9.4,9.2L9.4,9.2L9.4,9.2L9.4,9.2L9.4,9.2z\"/> </symbol>";
	module.exports = sprite.add(image, "spr-zoom");

/***/ }
/******/ ]);