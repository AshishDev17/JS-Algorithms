/**
 * Created by Ash on 1/18/2017.
 */
function reverseString(str) {
    var newString = "";

    newString = str.split("").reverse().join("");

    return newString;
}

console.log('reverseString("hello world") === "dlrow olleh": ' + (reverseString("hello world") === "dlrow olleh").toString());