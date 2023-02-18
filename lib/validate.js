//requiring tinycolor2 npm package. (library for manipulating and converting colors)
const tinycolor = require('tinycolor2');


//if every criteria is met, validateAnswers will return true.
const validateAnswers = (response) => {
    if (allPromptsAnswered(response) && textLengthCheck(response) && cssColor(response.textColor) && cssColor(response.shapeColor)) {
        console.log("\nAll answers have passed! :)");
        return true;
    } else {
        console.log("\nSome of the answers did not pass! :(");
        return false;
    };
}

//checks that ALL of the prompted answers have an input and returns true or false
const allPromptsAnswered = (response) => {

    //checks value is not empty
    const validate = (name) => {
        return name !== "";
    };

    //checks if all prompts satisfy validate();
    const isValid = Object.values(response).every(validate);
    console.log("\nAll questions have been answered: " + isValid);
    return isValid;
}


//checks that logo text is between 0 and three characters long, and returns true or false
const textLengthCheck = (response) => {
    const textLength = response.text.length <= 3 && response.text.length > 0;
    console.log(`Text is 3 characters or less: ${textLength}`);
    return textLength;
}


//checks if value is a color keyword or hex color, and returns true or false
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