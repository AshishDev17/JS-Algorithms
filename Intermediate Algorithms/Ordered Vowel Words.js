/**
 * Created by Ash on 3/14/2017.
 */
/*
 Write a method, `ordered_vowel_words(str)` that takes a string of
 lowercase words and returns a string with just the words containing
 all their vowels (excluding "y") in alphabetical order. Vowels may
 be repeated (`"afoot"` is an ordered vowel word).
 You will probably want a helper method, `ordered_vowel_word?(word)`
 which returns true/false if a word's vowels are ordered.*/

function orderedVowelWords(str){
    var words = str.split(' ');

    return words.filter(function(word){
        return isOrderedVowelWord(word);
    }).join(' ');
}

function isOrderedVowelWord(word){
    var vowelsInWord = word.match(/[aeiou]/g);
    if (vowelsInWord === null) return true;
    for(var i = 0; i < vowelsInWord.length - 1; i++){
        if(vowelsInWord[i + 1] < vowelsInWord[i]){
            return false;
        }
    }

    return true;
}

/*function isOrderedVowelWord(word){
    var vowels = ["a", "e", "i", "o", "u"];
    var lettersArr = word.split("");
    var vowelsIndex = []; for(var i = 0; i < vowels.length; i++){
        if(lettersArr.indexOf(vowels[i]) >= 0){
            vowelsIndex.push(lettersArr.indexOf(vowels[i]));
        }
    }

    for(var i = 0; i < vowelsIndex.length; i++){
        if((i + 1) < vowelsIndex.length && vowelsIndex[i] > vowelsIndex[i + 1]){
            return false;
        }
    }
    return true;
}

function orderedVowelWords(str){
    var words = str.split(" ");
    var orderedVowelWords = [];

    words.forEach(function(word){
        if(isOrderedVowelWord(word)){
            orderedVowelWords.push(word);
        }
    });

    return orderedVowelWords.join(" ");
}*/

console.log(orderedVowelWords("amends") === "amends");
console.log(orderedVowelWords("complicated") === "");
console.log(orderedVowelWords("afoot") === "afoot");
console.log(orderedVowelWords("ham") === "ham");
console.log(orderedVowelWords("crypt") === "crypt");
console.log(orderedVowelWords("o") === "o");
console.log(orderedVowelWords("this is a test of the vowel ordering system") === "this is a test of the system");