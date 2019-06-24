/**
 * Created by Ash on 1/18/2017.
 */

function isPalindrome(str){
    var newStr= str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var length = newStr.length;

    for(var i = 0; i < length; i++){
        if(newStr[i] != newStr[length - 1 - i]){
            console.log(false);
            return false;
        }
    }

    console.log(true);
    return true;
}

/*function reverseString(str) {
    var newStr = "";
    newStr = str.split("").reverse().join("");
    return newStr;
}

function palindrome(str) {
    var newString = "";
    var regEx = /[^A-Za-z0-9]/g;
    newString = str.replace(regEx, "").toLowerCase();

    if(newString === reverseString(newString)){
        return true;
    }
    return false;
}*/



isPalindrome("A man, a plan, a canal. Panama");