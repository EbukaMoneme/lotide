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

const map = function(arr, callback) {
  const ans = [];
  for (let item of arr) {
    ans.push(callback(item));
  }
  
  return ans;
};

// Tests
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const double = map(nums, num => num * 2);
assertArraysEqual(double, [2, 4, 6, 8, 10, 12, 14, 16]);

const words2 = ["ground", "control", "to", "major", "tom"];
const results2 = map(words2, word => word.slice(2));
assertArraysEqual(results2, ['ound', 'ntrol', '', 'jor', 'm']);