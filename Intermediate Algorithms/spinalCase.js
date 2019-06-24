/**
 * Created by Ash on 6/10/2017.
 */
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/


function spinalCase(str) {
    var words = [];
    var word = '';

    for(var i = 0; i < str.length; i++){
        if(str[i] === ' ' || str[i] === '-' || str[i] === '_'){
            words.push(word);
            word = '';
        }
        else if(str[i] === str[i].toUpperCase()){
            if(i - 1 > 0 && word !== ''){words.push(word);}
            word = '';
            word += str[i].toLowerCase();
        }
        else{
            word += str[i];
        }

        if(i === str.length - 1){words.push(word);}
    }

    return words.join('-');
}



console.log(spinalCase('This Is Spinal Tap'));