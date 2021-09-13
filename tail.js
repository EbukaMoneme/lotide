// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let ans = arr.slice(1);
  return ans;
};

// Test Case: 1 - Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: 2
const words2 = ["Yo Yo"];
assertEqual(tail(words2).length, 0); // no need to capture the return value since we are not checking it
assertEqual(words2.length, 1); // original array should still have 3 elements!

// Test Case: 3
const words3 = [];
assertEqual(tail(words3).length, 0); // no need to capture the return value since we are not checking it
assertEqual(words3.length, 0); // original array should still have 3 elements!