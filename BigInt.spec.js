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

  });
});
