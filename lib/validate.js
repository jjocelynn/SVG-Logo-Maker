//requiring the tinycolor2 npm package. (library for manipulating and converting colors)
const tinycolor = require('tinycolor2');

const validateAnswers = (response) => {
    if (allPromptsAnswered(response) && textLengthCheck(response) && cssColor(response.textColor) && cssColor(response.shapeColor)) {
        console.log("\nAll answers have passed! :)");
        return true;
    } else {
        console.log("\nSome of the answers did not pass! :(");
        return false;
    };
}

//checks that ALL of the prompted answers have a valid string
const allPromptsAnswered = (response) => {
    //function to validate prompt answer is not empty, null or undefined
    const validate = (name) => {
        return name !== "";
    };

    //checks if all prompts have valid answers
    const isValid = Object.values(response).every(validate);
    console.log("\nAll questions have been answered: " + isValid);
    return isValid;
}


//checks if logo text is three characters or less
const textLengthCheck = (response) => {
    const textLength = response.text.length <= 3 && response.text.length > 0;
    console.log(`Text is 3 characters or less: ${textLength}`);
    return textLength;
}


//checks if color is a color keyword or hex color
const cssColor = (color) => {
    const colorType = tinycolor(color);
    const colorFormat = colorType.getFormat();
    if (colorType.isValid() && (colorFormat === "name" || colorFormat === 'hex')) {
        console.log("Color value is accepted: true");
        return true;
    } else {
        console.log("Color value is accepted: false");
        return false;
    }
}

module.exports = {
    validateAnswers,
    allPromptsAnswered,
    textLengthCheck,
    cssColor
};