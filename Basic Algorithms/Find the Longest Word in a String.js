/**
 * Created by Ash on 1/18/2017.
 */
/*This challenge requires you to return the longest word in a sentence. Our goal is therefore to somehow loop through
 the string (what is a string?) and compare the lengths of the words. For example, if the string were "hello from
 coderbyte" the program should return the word "coderbyte" because it has the longest length. To solve this we need
 to: 1. Strip away any punctuation because the challenge tells us to ignore these symbols, so the string "hello$%()"
 is actually just "hello"
2. Separate the sentence into a list of words in order to easily retrieve words and their respective lengths
3. Then loop through this list and compare the words to find the one with the longest length*/

/*function LongestWord(sen) {

    // we use the regex match function which searches the string for the
    // pattern and returns an array of strings it finds
    // in our case the pattern we define below returns words with
    // only the characters a through z and 0 through 9, stripping away punctuation
    // e.g. "hello$% ##all" becomes [hello, all]
    var arr = sen.match(/[a-z0-9]+/gi);

    // the array sort function takes a function as a parameter
    // which is used to compare each element in the array to the
    // next element in the array
    var sorted = arr.sort(function(a, b) {
        return b.length - a.length;
    });

    // this array now contains all the words in the original
    // string but in order from longest to shortest length
    // so we simply return the first element
    console.log(sorted[0]);

}*/

function LongestWord(str){
    var words = str.split(' ').map(function(word){
        return word.replace(/[^a-z0-9]/gi, '')
    });

    var longestWord = words.reduce(function(longestWord, word){
        if (word.length > longestWord.length){
            longestWord = word
        }

        return longestWord;
    });

    return longestWord;
}

/*function LongestWord(sen) {
    var words = sen.split(" ");
    var longestWord = words[0].replace(/[^a-zA-Z0-9]/g, "");

    for(var i = 1; i < words.length; i++){
        word = words[i].replace(/[^a-zA-Z0-9]/g, "");

        if(word.length > longestWord.length){
            longestWord = words[i];
        }
        else if(word.length === longestWord.length){
            longestWord = longestWord;
        }
    }

    return longestWord;
}*/

console.log(LongestWord("the $$$longest# word is coderbyte"));


/*function findLongestWord(str) {

    var arr = str.split(" ");
    var longestString = arr[0];

    for(i=1; i< arr.length; i++) {
        if (longestString.length < arr[i].length) {
            longestString = arr[i];
        }
    }
    console.log("The length of the longest word in the \"" + str + "\" is " + longestString.length);
    return longestString.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");*/
