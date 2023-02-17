//requiring the tinycolor2 npm package. (library for manipulating and converting colors)
const tinycolor = require('tinycolor2');

const validateAnswers = (response) => {

    //functin to validate input is not empty, null or undefined
    const validate = (name) => {
        return name !== "" && name !== null && name !== undefined;
    };

    //function to check if color is a color keyword or hex color
    const cssColor = (color) => {
        const colorType = tinycolor(color);
        if (colorType.isValid() && (colorType.getFormat() === "name" || colorType.getFormat() === 'hex')) {
            console.log("Color value is accepted: true");
            return true;
        } else {
            console.log("Color value is accepted: false");
            return false;
        }
    }

    //checks if all prompts have been answered
    const isValid = Object.values(response).every(validate);
    console.log(`All questions have been answered: ${isValid}`);

    //checks if text is three characters or less
    const textLengthCheck = response.text.length <= 3;
    console.log(`Text is 3 characters or less: ${textLengthCheck}`);

    //checks if the text color is valid
    const textColorCheck = cssColor(response.textColor);

    //checks if the logo color is valid
    const shapeColorCheck = cssColor(response.shapeColor);

    //checks if all tests above are true
    if (isValid && textLengthCheck && textColorCheck && shapeColorCheck) {
        console.log("All answers have passed! :)");
        return true;
    } else {
        console.log("Some of the answers did not pass. Please try again! :(");
        return false;
    }
}

module.exports = validateAnswers;