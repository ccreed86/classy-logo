const { Triangle } = require("./shapes.js");
const { Circle } = require("./shapes.js");
const { Square } = require("./shapes.js");

//test from module challenge criteria--

describe("SVG Generation", () => {
  test("sets color for Triangle correctly", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150,18 244,182 56,182" fill="blue"/>'
    );
  });
});

// additional tests

describe("SVG Generation", () => {
  test("sets color for Square correctly", () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<rect x="40" y="21" width="120" height="120" fill="yellow"/>'
    );
  });
});

describe("SVG Generation", () => {
  test("sets color for Circle correctly", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="100" cy="100" r="73" fill="green"/>'
    );
  });
});
