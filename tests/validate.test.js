// const validateAnswers = require('./validateAnswers');
// const tinycolor = require('tinycolor2');

// describe('validateAnswers', () => {
//     let response;

//     beforeEach(() => {
//         response = {
//             text: 'ABC',
//             textColor: 'red',
//             shape: 'circle',
//             shapeColor: '#00FF00'
//         };
//     });

//     it('returns true for valid inputs', () => {
//         const cssColorSpy = jest.spyOn(tinycolor, 'isValid').mockReturnValue(true);

//         expect(validateAnswers(response)).toBe(true);
//         expect(cssColorSpy).toHaveBeenCalledTimes(2);
//         expect(cssColorSpy).toHaveBeenNthCalledWith(1, response.textColor);
//         expect(cssColorSpy).toHaveBeenNthCalledWith(2, response.shapeColor);
//     });

//     it('returns false if any response is empty, null or undefined', () => {
//         response.text = null;
//         expect(validateAnswers(response)).toBe(false);
//     });

//     it('returns false if text length is more than 3 characters', () => {
//         response.text = 'ABCD';
//         expect(validateAnswers(response)).toBe(false);
//     });

//     it('returns false if text color is invalid', () => {
//         const cssColorSpy = jest.spyOn(tinycolor, 'isValid').mockReturnValue(false);
//         expect(validateAnswers(response)).toBe(false);
//         expect(cssColorSpy).toHaveBeenCalledTimes(1);
//         expect(cssColorSpy).toHaveBeenNthCalledWith(1, response.textColor);
//     });

//     it('returns false if shape color is invalid', () => {
//         const cssColorSpy = jest.spyOn(tinycolor, 'isValid').mockReturnValueOnce(true).mockReturnValueOnce(false);
//         expect(validateAnswers(response)).toBe(false);
//         expect(cssColorSpy).toHaveBeenCalledTimes(2);
//         expect(cssColorSpy).toHaveBeenNthCalledWith(1, response.textColor);
//         expect(cssColorSpy).toHaveBeenNthCalledWith(2, response.shapeColor);
//     });
// });