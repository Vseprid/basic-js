// const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    let l = this.chain
    return l.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push('( )');
      return chainMaker;
    } else {
      this.chain.push(`( ${value} )`);
      return chainMaker;
    }
  },

  removeLink(position) {
    if (this.chain[position] === undefined) {
      this.chain.splice(0);
      throw Error;
    } else {
      this.chain.splice(position - 1, 1);
      return chainMaker;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },

  finishChain() {
    let s = this.chain.join('~~');
    this.chain.splice(0);
    return s;
  }

};

module.exports = chainMaker;
