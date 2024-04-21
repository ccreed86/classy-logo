# SVG-Logo
A Scalable Vector Graphics Logo file generator.

## Acceptance Criteria

GIVEN a command-line application that accepts user input
-WHEN I am prompted for text
THEN I can enter up to three characters
-WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
-WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
-WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
-WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
-WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

### Satisfies all of the preceding acceptance criteria plus the following:

√Uses the Inquirer packageLinks to an external site..

√Uses the Jest packageLinks to an external site. for a suite of unit tests.

The application must have Triangle, Square, and Circle classes.

## Directory Structure

── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           

## Description

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

## Usage

## Credits

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

## Features

## How to Contribute

## Tests

<!-- //The following example test should pass: -->

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');