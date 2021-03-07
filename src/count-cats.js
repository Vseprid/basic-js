// const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let line = matrix.flat(Infinity);
  line = line.filter(item => item === '^^');
  return line.length;
};
