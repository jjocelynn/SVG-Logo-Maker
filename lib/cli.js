//importing required documents
const inquirer = require('inquirer');
const { RenderShape } = require('./shapes');
const { validateAnswers } = require("./validate.js");

//creating a CLI class
class CLI {
    //creating a function called run
    run() {
        //Node terminal prompts
        inquirer.prompt([
            {
                type: "input",
                name: "text",
                message: "Logo Text(max 3 characters): "
            },
            {
                type: "input",
                name: "textColor",
                message: "Text Color(enter a color keyword or hex code): "
            },
            {
                type: "list",
                name: "shape",
                message: "Logo Shape: ",
                choices: ["circle", "triangle", "square"]
            },
            {
                type: "input",
                name: "shapeColor",
                message: "Shape Color(enter a color keyword or hex code): ",
            },
        ])
            .then((response) => {
                //using prompt responses to validate answers and only rendering if validateAnswers passes all tests
                if (validateAnswers(response)) {
                    const renderShape = new RenderShape(response);
                    renderShape.createShapeSvg();
                } else {
                    console.log("\nPlease try again!");
                }
            });
    }
}

module.exports = CLI;