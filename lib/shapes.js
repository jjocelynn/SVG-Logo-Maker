const fs = require('fs');

class RenderShape {
    constructor({ text, textColor, shape, shapeColor }) {
        this.text = text
        this.textColor = textColor
        this.shape = shape
        this.shapeColor = shapeColor
    }

    shapeTemplate() {
        let chosenShape;
        if (this.shape === "circle") {
            chosenShape = new Circle({ shapeColor: this.shapeColor }).shapeSVG();
        } else if (this.shape === "triangle") {
            chosenShape = new Triangle({ shapeColor: this.shapeColor }).shapeSVG();
        } else if (this.shape === "square") {
            chosenShape = new Square({ shapeColor: this.shapeColor }).shapeSVG();
            console.log(chosenShape);
        }

        const svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${chosenShape}
        <text x="50%" y="52%" text-anchor="middle" alignment-baseline="middle" font-size="40px" fill="${this.textColor}">${this.text}</text>
        </svg>`
        fs.writeFile("./examples/Logo.svg", svg, (err) =>
            err ? console.error(err) : console.log('Logo.svg created!'));
    }
}

class Circle extends RenderShape {
    constructor({ shapeColor }) {
        super({ shapeColor });
    }
    shapeSVG() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends RenderShape {
    constructor({ shapeColor }) {
        super({ shapeColor });
    }
    shapeSVG() {
        return `<polygon points="150,0 275,200 25,200" fill="${this.shapeColor}" />`;
    }
}

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