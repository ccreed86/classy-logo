# SVG-Logo
A Scalable Vector Graphics Logo file generator.

## Description

A basic logo generatore utilizing svg files.

<!-- Video file goes here -->

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation
install inquirer@8.2.4
https://www.npmjs.com/package/inquirer/v/8.2.4


to run tests, install jest
https://www.npmjs.com/package/jest
## Usage

To create a simple two part logo. Shape and text, both with color options.

## Credits

N/A

## License
MIT License

![MIT License](https://img.shields.io/badge/License-MIT-purple)


Copyright (c) 2024 Clifton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![MIT License](https://img.shields.io/badge/License-MIT-purple)

![NPM Inquirer](https://img.shields.io/badge/NPM-INQUIRER-blue)

![NPM Jest](https://img.shields.io/badge/NPM-JEST-orange)

![GitHub](https://img.shields.io/badge/GitHub-darkblue)


(https://shields.io/) 

## How to Contribute

You can contribute via the GitHub repo.

https://github.com/ccreed86/classy-logo

## Tests

<!-- //The following example test should pass: -->

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

