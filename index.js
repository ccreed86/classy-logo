// Packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs");
const {generateSVG} = require('./lib/shapes.js')

// Prompt questions for logo text, text color, shape, and shape color.
const questions = [
    {
        //this will be the text that appears on the logo
        type: "input",
        name: "text",
        message: "What is the text of your Logo?",
    },
    {
        // this will be the color of the text for the logo
        type: "input",
        name: "textColor",
        message: "What color would you like your text to be?",
    },
    {
        // this will be the background shape for the logo
        type: "list",
        name: "shape",
        message: "What shape would you like your logo background to be?",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        // this will be the background shape color for the logo
        type: "input",
        name: "shapeColor",
        message: "What color would you like your backbround shape to be?",
    }
]
// function to wright the logo file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log("Generated logo.svg #GETGUERO")
    );
  }
// function to generate the Logo
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
       const markdown = generateSVG(answers)
        writeToFile("logo.svg", markdown)    
        })
    }

// Function call to initialize app
init();