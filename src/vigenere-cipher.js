// const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(typeOfMachine) {
    this.typeOfMachine = typeOfMachine;
  }

  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  encrypt(message, key) {
    if (!message || !key) throw new Error;
    message = message.toUpperCase();
    key = key.toUpperCase();


    key = key.split('');
    let keyStack = [];

    for (let j = 0, i = 0; j < message.length; j++, i++) {
      if (i >= key.length) i = 0
      if (!this.alphabet.includes(message[j])) {
        keyStack.push(message[j]);
        i--;
        continue;
      }
      keyStack.push(key[i]);
    }

    keyStack = keyStack.join('')

    let stack = [];


    let letter;

    for (let i = 0; i < message.length; i++) {
      if (!(this.alphabet.includes(message[i]))) {
        stack.push(message[i]);
        continue;
      }
      letter = ((this.alphabet.indexOf(message[i], 0) + this.alphabet.indexOf(keyStack[i], 0)) % 26)
      stack.push(this.alphabet[letter])
    }
    if (this.typeOfMachine === false) return stack.reverse().join('')
    return stack.join('')
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error;
    message.toUpperCase();
    key.toUpperCase();

    key = key.split('');
    let keyStack = [];

    for (let j = 0, i = 0; j < message.length; j++, i++) {
      if (i >= key.length) i = 0
      if (!this.alphabet.includes(message[j])) {
        keyStack.push(message[j]);
        i--;
        continue;
      }
      keyStack.push(key[i]);
    }

    keyStack = keyStack.join('').toUpperCase();

    let stack = [];


    let letter;

    for (let i = 0; i < message.length; i++) {
      if (!(this.alphabet.includes(message[i]))) {
        stack.push(message[i]);
        continue;
      }
      letter = (this.alphabet.indexOf(message[i], 0) - this.alphabet.indexOf(keyStack[i], 0) + 26) % 26;
      stack.push(this.alphabet[letter])
    }
    if (this.typeOfMachine === false) return stack.reverse().join('')
    return stack.join('')
  }

}

module.exports = VigenereCipheringMachine;
