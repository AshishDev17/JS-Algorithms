/**
 * Created by Ash on 1/18/2017.
 */

function titleCase(str){
    var words = str.split(' ');
    return words.map(function(word){
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}


console.log(titleCase("I'm a little tea pot"));

/*function titleCase(str) {
    var strLowerCase = str.toLowerCase();
    var newString = "";

    var arr = strLowerCase.split(" ");

    for(i=0; i< arr.length; i++){
        var firstChar = arr[i].slice(0,1).toUpperCase();
        var remaingChars = arr[i].slice(1);
        arr[i] = firstChar + remaingChars;
    }

    newString = arr.join(" ");


    return newString;
}

titleCase("I'm a little tea pot");*/