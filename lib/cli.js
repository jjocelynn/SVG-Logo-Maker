//importing required documents
const inquirer = require('inquirer');
const validateAnswers = require("./validate.js");
const { RenderShape }= require('./shapes');

//creating a CLI class
class CLI {

    //Node terminal prompts
    run() {

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
                console.log(response);
                //validateAnswers(response);
                if (validateAnswers(response)) {
                    const renderShape = new RenderShape(response);
                    renderShape.shapeTemplate();

                } else {
                    console.log("There was an error in your answers. Please try again! :(");
                }
            });
    }
}
module.exports = CLI;