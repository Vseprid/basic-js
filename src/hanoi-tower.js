// const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let t = 2 ** disksNumber - 1;
  let s = Math.floor(t / turnsSpeed * 3600);
  const hanoi = {};
  hanoi['turns'] = t;
  hanoi['seconds'] = s;
  return hanoi;
};
