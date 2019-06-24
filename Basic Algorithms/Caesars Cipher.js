/**
 * Created by Ash on 1/23/2017.
 */
function CaesarsCipher(str, offset){
    return str.replace(/[A-Z]/g, function(match){
        return String.fromCharCode('A'.charCodeAt() + (match.charCodeAt() - 'A'.charCodeAt() + offset) % 26)
    } );
}


/*function CaesarsCipher(str, shift){
    var converted = str.toLowerCase().replace(/[a-z]/gi, function(char){
        return String.fromCharCode( "a".charCodeAt() + ((char.charCodeAt() - "a".charCodeAt()) + shift) % 26);
    });

    console.log(converted);
}*/

console.log(CaesarsCipher("SERR PBQR PNZC", 13));

/*This challenge requires you to change every letter in the string to the letter following it in the alphabet, so a becomes
b, z becomes a, etc. Once every letter is changed, we then need to capitalize only the vowels, namely: a, e, i, o, u.*/

/*function LetterChanges(str){
   var converted = str.replace(/[a-zA-Z]/gi, function(char){
      return (char === "z" || char === "Z")? "a" : String.fromCharCode(char.charCodeAt() + 1);
   });

   var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel){
       return vowel.toUpperCase();
   });

   console.log(capitalized);
}

LetterChanges("fun times!")*/

/*function caesarsCipher(str, shift){
    var words = str.toUpperCase().split(" ");
    var newString = "";
    var A = "A";
    var Z = "Z";

    for(i = 0; i < words.length; i++){
        var word = words[i];
        var newStr = "";

        for(j = 0; j < word.length; j++){

            if(word.charCodeAt(j) >= A.charCodeAt(0) && word.charCodeAt(j) <= Z.charCodeAt(0)){
                var charDifference = word.charCodeAt(j) - A.charCodeAt(0);
                var newCharDifference = (charDifference + shift) % 26;
                newStr += String.fromCharCode(A.charCodeAt(0) + newCharDifference);
            }
            else{
                newStr += word[j];
            }

        }

        words[i] = newStr;
    }

    newString = words.join(" ");

    return newString;
}

caesarsCipher("SERR PBQR PNZC", 13);*/
/*
function rot13(str) {
    var strCipher = "";
    var newStr = str.toUpperCase();

    for(i=0; i < newStr.length; i++){
        if(newStr.charCodeAt(i)>= 65 && newStr.charCodeAt(i) <= 77){
            strCipher += String.fromCharCode(newStr.charCodeAt(i)+13);
        }
        else if( newStr.charCodeAt(i) >= 78 && newStr.charCodeAt(i) <= 90){
            strCipher += String.fromCharCode(newStr.charCodeAt(i)- 13);
        }
        else {
            strCipher += String.fromCharCode(newStr.charCodeAt(i));
        }
    }

    return strCipher;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");*/
