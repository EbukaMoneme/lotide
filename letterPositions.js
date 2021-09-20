// Check if arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Print result to console
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i]) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

// Tests
let result1 = letterPositions('hello');

assertArraysEqual(result1['l'], [2, 3]);
assertArraysEqual(result1['e'], [1]);

let result2 = letterPositions('Lighthouse in the house');
assertArraysEqual(result2['l'], [0]);
assertArraysEqual(result2['h'], [3, 5, 15, 18]);
assertArraysEqual(result2['e'], [9, 16, 22]);

module.exports = letterPositions;