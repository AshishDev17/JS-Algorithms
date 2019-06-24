/**
 * Created by Ash on 5/22/2017.
 */

function uniq(arr){
    var uniq = [];

    arr.forEach(function(val){
        if(uniq.indexOf(val) < 0){
            uniq.push(val);
        }
    });

    return uniq;
}

console.log(uniq([1,1,3,4,5,3,4,6,7,2]));