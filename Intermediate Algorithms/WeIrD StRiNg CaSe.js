/**
 * Created by Ash on 3/3/2017.
 */
/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even
indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing
just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present
if there are multiple words. Words will be separated by a single space(' ').
Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"*/

function toWeirdCase(str){
    return str.split(" ").map(function(word){
        return word.split("").map(function(char, index){
          return (index % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
        }).join("");
    }).join(" ");
}

console.log(toWeirdCase( "Weird string case" ));