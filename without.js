// Check if arrays are equal
const eqArrays = function(arr1, arr2) {
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

// Returns an array without unwanted items
const without = function(source, itemsToRemove) {
  let final = [];
  if (eqArrays(source, itemsToRemove)) {
    return final;
  } else {
    for (let i = 0; i < source.length; i++) {
      if (source[i] !== itemsToRemove[i]) {
        final.push(source[i]);
      }
    }
    return final;
  }
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1, 2, 3]), [])
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
assertArraysEqual(without(["1", "2", "3"], [1, 2, 3]), ["1", "2", "3"])