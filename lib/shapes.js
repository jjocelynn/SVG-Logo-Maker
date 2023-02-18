//importing file system
const fs = require('fs');

//creating a RenderShape class that has a function to create an svg file
class RenderShape {
    constructor({ text, textColor, shape, shapeColor }) {
        this.text = text
        this.textColor = textColor
        this.shape = shape
        this.shapeColor = shapeColor
    }

    createShapeSvg() {
        //sets chosenShape to new instance and calls its shapeSVG() function based on user input
        let chosenShape;
        if (this.shape === "circle") {
            chosenShape = new Circle({ shapeColor: this.shapeColor }).shapeSVG();
        } else if (this.shape === "triangle") {
            chosenShape = new Triangle({ shapeColor: this.shapeColor }).shapeSVG();
        } else if (this.shape === "square") {
            chosenShape = new Square({ shapeColor: this.shapeColor }).shapeSVG();
        }

        //svg template with specified variables.
        const svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${chosenShape}
        <text x="50%" y="52%" text-anchor="middle" alignment-baseline="middle" font-size="40px" fill="${this.textColor}">${this.text}</text>
        </svg>`

        //creating an svg file in the examples folder
        fs.writeFile("./examples/Logo.svg", svg, (err) =>
            err ? console.error(err) : console.log('\nGenerated Logo.svg!'));
    }
}

//circle class inheriting shapeColor from RenderShape and using it in a function
class Circle extends RenderShape {
    constructor({ shapeColor }) {
        super({ shapeColor });
    }
    shapeSVG() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
    }
}

//triangle class inheriting shapeColor from RenderShape and using it in a function
class Triangle extends RenderShape {
    constructor({ shapeColor }) {
        super({ shapeColor });
    }
    shapeSVG() {
        return `<polygon points="150,0 275,200 25,200" fill="${this.shapeColor}" />`;
    }
}

//square class inheriting shapeColor from RenderShape and using it in a function
class Square extends RenderShape {
    constructor({ shapeColor }) {
        super({ shapeColor });
    }
    shapeSVG() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}" />`;
    }
}


module.exports = {
    RenderShape,
    Circle,
    Triangle,
    Square
};