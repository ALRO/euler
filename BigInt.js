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
      let carry = 0;
      let lastIndex = 0;

      // function that adds the digits together
      let addValueToIndexWithScopeCarry = function(value, index) {
        let newDigit;

        // we will need this later if the last digit has a carry
        lastIndex = index;

        if(typeof previous[index] === "undefined"){
          previous[index] = 0;
        }

        newDigit = previous[index];
        newDigit += parseInt(value, 10);
        newDigit += carry;

        if(newDigit >= 10){
          carry = Math.floor(newDigit / 10);
          newDigit -= carry * 10;
        } else {
          carry = 0;
        }

        previous[index] = newDigit;
      }

      current.forEach(addValueToIndexWithScopeCarry);

      while (carry !== 0) {
        lastIndex += 1;

        addValueToIndexWithScopeCarry(0, lastIndex);
      }

      return previous;
    },[]);

    return new BigInt(sumArray.reverse().join(""));
  }
}

module.exports = BigInt;
