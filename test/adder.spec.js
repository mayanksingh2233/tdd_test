import { assert } from "chai";
import { adder } from "../adder.js";

// import { adder } from "../adder.js";

describe("adder", () => {
  it("should return 0 for no input", () => {
    const result = adder();
    assert.equal(result, 0);
  });

});