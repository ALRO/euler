"use strict";

class BigInt {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return this.value;
  }

  add(that) {
    const thisArray = this.toString().split("");
    const thatArray = that.toString().split("");

    const sumArray = [thisArray, thatArray].reduce(function(previous, current){
      console.log(previous, current);
      current.forEach(function(value, index) {
        if(typeof previous[index] === "undefined"){
          previous[index] = 0;
        }
        previous[index] += parseInt(value, 10);
      });
      return previous;
    },[]);

    return new BigInt(sumArray.join(""));
  }
}

module.exports = BigInt;
