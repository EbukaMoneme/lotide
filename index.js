// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const map = require('./map');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const takeUntil = require('./takeUntil');
const without = require('./without');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head,
  tail,
  middle,
  flatten,
  map,
  letterPositions,
  findKeyByValue,
  findKey,
  takeUntil,
  without,
  countOnly,
  countLetters,
  eqObjects,
  eqArrays,
  assertObjectsEqual,
  assertEqual,
  assertArraysEqual
};