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

    it("should be able to add some random numers", function() {
      const bigInt1 = new BigInt("561289367");
      const bigInt2 = new BigInt( "34271399");
      const bigInt3 = bigInt1.add(bigInt2);

      assert.equal(bigInt3.toString(), "595560766");
    });

    it("should be able to add 2 big numbers", function() {
      const bigInt1 = new BigInt("2034788916521598628597634895762891764589375619827594893671");
      const bigInt2 = new BigInt("1279840298734901276891876190287459027869890571209751290384712897634128796498237641289746128973461289756912874512897634189234072489127638947");
      const bigInt3 = bigInt1.add(bigInt2);

      assert.equal(bigInt3.toString(), "1279840298734901276891876190287459027869890571209751290384712897634128796498237643324535045495059918354547770275789398778609692316722532618");

      const bigInt4 = new BigInt("1");
      const bigInt5 = new BigInt("1279840298734901276891876190287459027869890571209751290384712897634128796498237641289746128973461289756912874512897634189234072489127638947");
      const bigInt6 = bigInt4.add(bigInt5);

      assert.equal(bigInt6.toString(), "1279840298734901276891876190287459027869890571209751290384712897634128796498237641289746128973461289756912874512897634189234072489127638948");
    });
  });
});
