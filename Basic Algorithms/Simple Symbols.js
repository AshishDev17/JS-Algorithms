/**
 * Created by Ash on 2/28/2017.
 */
/*This challenge requires you to determine if every alphabetic character in a string has a plus (+) symbol on the
left and right side of itself. For example: the string "+a+b+c+" is good but the string "===+3+f=+b+" is not because
the "f" does not have a plus symbol to its right. A very simple way to solve this challenge is to create a loop
that every time it gets to an alphabetic character, it checks to see if it is surrounded by + symbols.*/


function simpleSymbols(str){
    // pad the strings so that if a character exists at the beginning
    // of the string for example, we don't get on out-of-bounds error by
    // trying to get the character before it
    var newStr = '=' + str + '=';

    // loop through entire string
    for (var i = 0; i < newStr.length; i++) {

        // check to see if current character is an alphabetic character
        // by using a simple case-insensitive regex pattern
        if (newStr[i].match(/[a-z]/i) !== null) {

            // check to see if a + symbol is to the left and right
            // if not, then we know this string is not valid
            if (newStr[i-1] !== '+' || newStr[i+1] !== '+') {
                return false;
            }

        }

    }

    return true;

    // code goes here

}

console.log(simpleSymbols("===+3+f=+b+"));
