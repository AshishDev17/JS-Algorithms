/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
Remember to use Read-Search-Ask if you get stuck. Try to pair program.
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined*/


function fearNotLetter(str) {
    var alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    //find the index of first char of str in alphabetStr
    var index = alphabetStr.indexOf(str[0]);

    //compare both the strings by incrementing 1 to each index
    //if any char in str is not equal to its corresponding index in alphabetStr
    //then return that char in alphabetStr
    //else return undefined
    for(var i = 0; i < str.length; i++){
        if(str[i] !== alphabetStr[index + i]){
            return alphabetStr[index + i];
        }
    }

    return undefined;
}

fearNotLetter("abce");