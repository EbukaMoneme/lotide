// Testing function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  let newString = string.split(' ').join('');
  for (let letter of newString) {
    if (result[letter]) {
      result[letter] +=  1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

// Tests
const result1 = countLetters("lighthouse in the house");

assertEqual(result1['l'], 1);
assertEqual(result1['i'], 2);
assertEqual(result1['h'], 4);
assertEqual(result1['z'], undefined);