import baseIsNative from './_baseIsNative.js';
import getValue from './_getValue.js';

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

export default getNative;



//////////////////
// WEBPACK FOOTER
// ./~/lodash-es/_getNative.js
// module id = 20
// module chunks = 0 1