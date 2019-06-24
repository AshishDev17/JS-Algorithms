/**
 * Created by Ash on 6/1/2017.
 */

function indexOf(str, searchQuery){
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < searchQuery.length; j++){
            if(str[i + j] !== searchQuery[j]){
                break;
            }

            if(j === searchQuery.length - 1){
                return i;
            }
        }
    }

    return -1;
}

/*function indexOf(str, queryStr) {
    for(var i = 0; i < str.length; i++){
        for(var j = i + 1; j <= str.length; j++){
            if(str.slice(i,j) === queryStr){
                return i;
            }
        }
    }

    return -1;
}*/

console.log(indexOf("hello", "lo"));