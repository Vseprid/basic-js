// const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { separator = '+', additionSeparator = '|', repeatTimes = 0, addition = '', additionRepeatTimes } = options;

  let additionToArr = [];
  if (typeof addition != 'string') addition.toString();
  do {
    additionToArr.push(addition);
  } while (additionToArr.length < additionRepeatTimes)


  let additionToStr = additionToArr.join(additionSeparator)


  if (typeof str != 'string') str.toString()

  let strCorrect = str.split('')
  additionToStr = additionToStr.split('');
  strCorrect = strCorrect.concat(additionToStr)
  strCorrect = strCorrect.join('')

  let strToArr = [];
  do {
    strToArr.push(strCorrect);
  } while (strToArr.length < repeatTimes)

  return strToArr.join(separator)
};
