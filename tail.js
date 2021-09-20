// assertEqual function
const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let ans = arr.slice(1);
  return ans;
};

module.exports = tail;