// ○ app.js: This will be the main file where the module is tested.

const stringUtils = require('./stringUtils');

console.log(`The capitalized word is ${stringUtils.capitalize("apple")}`);
console.log(`The reverse string is: ${stringUtils.reverse("apple")}`);
console.log(`Does the substring is present in: ${stringUtils.contains("apple", "le")}`);

console.log(`The capitalized word is ${stringUtils.capitalize("launchcode")}`);
console.log(`The reverse string is: ${stringUtils.reverse("launchcode")}`);
console.log(`Does the substring is present in: ${stringUtils.contains("launchcode", "apple")}`);
