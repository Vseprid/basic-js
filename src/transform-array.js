// const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(Array.isArray(arr))) throw Error;
  let correctArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--double-next") {
      correctArr.push(arr[i + 1]);
    } else if (arr[i] == "--double-prev") {
      correctArr.push(correctArr[correctArr.length - 1]);
    } else if (arr[i - 1] == "--discard-next") {
      correctArr.push(null)
    } else if (arr[i + 1] == "--discard-prev") {
      correctArr.push(null)
    } else {
      correctArr.push(arr[i])
    }
  }

  let s = correctArr.filter(item => item != null);
  s = s.filter(item => item != "--double-prev");
  s = s.filter(item => item != "--double-next");
  s = s.filter(item => item != "--discard-next");
  s = s.filter(item => item != "--discard-prev");
  return s
};
