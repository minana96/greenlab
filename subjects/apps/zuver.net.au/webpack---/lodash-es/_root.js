import freeGlobal from './_freeGlobal.js';

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

export default root;



//////////////////
// WEBPACK FOOTER
// ./~/lodash-es/_root.js
// module id = 11
// module chunks = 0 1