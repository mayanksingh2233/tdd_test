import { assert } from "chai";

describe("adder", () => {
  it("should return 0 for no input", () => {
    const result = add();
    assert.equal(result, 0);
  });

});