/**
 * Created by Ash on 6/8/2017.
 */
/*Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word
and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase*/


function translatePigLatin(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    //if first char is a vowel add 'way' to the end of str
    if(vowels.indexOf(str[0]) >= 0) return str + 'way';

    //iterate through each char and check for vowel
    //if first char is not vowel, then check till char is a vowel and
    //move all consonants at the end of str
    var i = 0;

    while(vowels.indexOf(str[0]) < 0 && i < str.length){
        str = str.slice(1) + str[0];
        i++;
    }

    //if the first char of str is vowel then add 'ay' to the end of str
    if(vowels.indexOf(str[0]) >= 0){
        str = str + 'ay';
    }

    return str;
}

translatePigLatin("consonant");