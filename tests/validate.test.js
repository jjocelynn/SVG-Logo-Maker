const { validateAnswers, allPromptsAnswered, textLengthCheck, cssColor } = require('../lib/validate.js');

describe('Validate Prompts', () => {
    describe('All prompts answered', () => {
        it('should return false when a response is empty', () => {
            const expected = false;
            const response = allPromptsAnswered({ text: "hi", shape: "" });

            expect(response).toBe(expected);
        });
        it('should return true when all responses have a valid input', () => {
            const expected = true;
            const response = allPromptsAnswered({ text: "hi", shape: "rhombicosidodecahedron" });

            expect(response).toBe(expected);
        });
    });

    describe('text length', () => {
        it('should return true when the text length is less than three but greater than zero', () => {
            const expected = true;
            const response = textLengthCheck({ text: "HI" });

            expect(response).toBe(expected);
        })
        it('should return false when the text length is greater than three', () => {
            const expected = false;
            const response = textLengthCheck({ text: "HELLO" });

            expect(response).toBe(expected);
        });
        it('should return false when the text length is 0 (empty)', () => {
            const expected = false;
            const response = textLengthCheck({ text: "" });

            expect(response).toBe(expected);
        })
    })
    describe('cssColor', () => {
        it('should return true when the value is a css color keyword', () => {
            const expected = true;
            const response = cssColor("	cornflowerblue");

            expect(response).toBe(expected);
        })
        it('should return false when the value is not a css color keyword', () => {
            const expected = false;
            const response = cssColor("almostwhite");

            expect(response).toBe(expected);
        })
        it('should return true when the value is a hexadecimal number', () => {
            const expected = true;
            const response = cssColor("6495ed");

            expect(response).toBe(expected);
        })
        it('should return false when the value is not a hexadecimal number', () => {
            const expected = false;
            const response = cssColor("100,149,237");

            expect(response).toBe(expected);
        })
    })
});

// it('', () => {
//     const expected =
//         const response =

//         expect(response).toBe(expected);
// })