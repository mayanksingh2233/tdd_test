import { assert } from "chai";
import { adder } from "../adder.js";

// import { adder } from "../adder.js";

describe("adder", () => {
  it("should return 0 for no input", () => {
    const result = adder();
    assert.equal(result, 0);
  });

  it("it should return addition for 2 numbers", () => {
    const result = adder(1, 2);
    assert.equal(result, 3);
  });

  it("should add 3 numbers", () => {
    const result = add(1, 2, 2);
    assert.equal(result, 5);
  });

});