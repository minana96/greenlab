/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

export default freeGlobal;



//////////////////
// WEBPACK FOOTER
// ./~/lodash-es/_freeGlobal.js
// module id = 133
// module chunks = 0 1