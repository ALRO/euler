"use strict";

class BigInt {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return this.value;
  }

  add(that) {
    const thisArray = this.toString().split("").reverse();
    const thatArray = that.toString().split("").reverse();

    const sumArray = [thisArray, thatArray].reduce(function(previous, current){
      current.forEach(function(value, index) {
        if(typeof previous[index] === "undefined"){
          previous[index] = 0;
        }
        previous[index] += parseInt(value, 10);
      });
      return previous;
    },[]);

    return new BigInt(sumArray.reverse().join(""));
  }
}

module.exports = BigInt;
