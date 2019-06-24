/**
 * Created by Ash on 2/28/2017.
 */
/*
 This challenge requires you to alphabetically sort the characters in a string. We'll sort the characters using the
 built-in array sort function.*/

function AlphabetSoup(str){
    var newStr = str.split('').sort().join('');
    console.log(newStr);
}

/*function AlphabetSoup(str) {

    var newStr = "";
    var array = [];

    for(var i = 0; i < str.length; i++){
        array.push(str.charCodeAt(i));
    }

    var sortedArray = array.sort(function(a, b){
        return a - b;
    })

    for(var j = 0; j < sortedArray.length; j++){
        newStr += String.fromCharCode(sortedArray[j]);
    }
    // code goes here
    console.log(newStr);

}*/

AlphabetSoup("1co80der24c22b!yte45");
