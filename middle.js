// compare arrays
const eqArrays = require('./eqArrays');

// Print result to console
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let midIndex;
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    midIndex = Math.floor(arr.length / 2);
    return [arr[midIndex]];
  } else {
    midIndex = (arr.length / 2) - 1;
    let ans = arr.slice(midIndex, midIndex + 2);
    return ans;
  }
};

module.exports = middle;