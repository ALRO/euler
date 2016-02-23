"use strict";

const assert = require("assert");
const BigInt = require("./BigInt");

describe("BigInt", function() {
  describe("Basics", function() {
    it("should be able to be created", function() {
      const bigInt = new BigInt("123");
      assert.equal(bigInt.toString(), "123");
    });
  });
  describe("Addition", function() {
    it("should be able to add 2 small numbers", function() {
      const bigInt1 = new BigInt("11");
      const bigInt2 = new BigInt("22");
      const bigInt3 = bigInt1.add(bigInt2);

      assert.equal(bigInt3.toString(), "33");
    });

    it("should be able to add 2 small numbers of different length", function() {
      const bigInt1 = new BigInt("1111");
      const bigInt2 = new BigInt("22");
      const bigInt3 = bigInt1.add(bigInt2);

      assert.equal(bigInt3.toString(), "1133");
    });

    it("should be able to handle carries", function() {
      const bigInt1 = new BigInt("9999");
      const bigInt2 = bigInt1.add(bigInt1);

      assert.equal(bigInt2.toString(), "19998");
    });
  });
});
