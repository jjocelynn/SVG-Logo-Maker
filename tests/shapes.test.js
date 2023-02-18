const { RenderShape, Circle, Triangle, Square } = require('../lib/shapes');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

describe('text', () => {
    it('should write "Dog" using the <text> element', async () => {
        const userAns = {
            text: 'Dog',
            textColor: 'red',
            shape: 'circle',
            shapeColor: 'blue',
        }
        const text = new RenderShape(userAns);
        text.shapeTemplate();

        const read = await readFile('./examples/Logo.svg', 'utf8');
        expect(read).toContain('<text');
    });
});

describe('circle', () => {
    it('should return a circle using the <circle> element', () => {
        const circle = new Circle({ shapeColor: 'blue' });
        const svg = circle.shapeSVG();

        expect(svg).toContain('<circle cx="150" cy="100" r="100"');
    });

    it('should return a circle in the color blue', () => {
        const circle = new Circle({ shapeColor: 'blue' });
        const svg = circle.shapeSVG();

        expect(svg).toContain('fill="blue"');
    });
});

describe('triangle', () => {
    it('should return a triangle using the <polygon> element', () => {
        const triangle = new Triangle({ shapeColor: 'yellow' });
        const svg = triangle.shapeSVG();

        expect(svg).toContain('<polygon points="150,0 275,200 25,200"');
    });
    it('should return a triangle in the color yellow', () => {
        const triangle = new Triangle({ shapeColor: 'yellow' });
        const svg = triangle.shapeSVG();

        expect(svg).toContain('fill="yellow"');
    });
});

describe('square', () => {
    it('should return a square using the <rect> element', () => {
        const square = new Square({ shapeColor: 'red' });
        const svg = square.shapeSVG();

        expect(svg).toContain('<rect x="50" y="0" width="200" height="200"');
    });
    it('should return a square in the color red', () => {
        const square = new Square({ shapeColor: 'red' });
        const svg = square.shapeSVG();

        expect(svg).toContain('fill="red"');
    });
});
