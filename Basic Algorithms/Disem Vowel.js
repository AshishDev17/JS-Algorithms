/**
 * Created by Ash on 3/7/2017.
 */
/*
Write a function disemvowel(string), which takes in a string, and returns that string with all the vowels removed.
Treat "y" as a consonant.
disemvowel("foobar") == "fbr"
disemvowel("ruby") == "rby"
disemvowel("aeiou") == ""    */

function disemVowel(string){
    var str = string.replace(/a|e|i|o|u/gi, "");
    return str;
}

console.log(disemVowel("foobar"));