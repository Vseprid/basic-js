// const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(Array.isArray(members))) return false;
  let requiredMembers = members.filter(item => typeof item == 'string');
  requiredMembers = requiredMembers.map(item => item.trim());
  requiredMembers = requiredMembers.map(item => item[0].toUpperCase())
  let stack = [];
  for (let i = 0; i < requiredMembers.length; i++) {
    stack.push(requiredMembers[i][0])
  }
  stack = stack.sort();
  return stack.join('');

};
