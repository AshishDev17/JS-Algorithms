/**
 * Created by Ash on 5/31/2017.
 */
function mySplice(arr, start, deleteCount) {
    var deleted = [];
    var keep = [];

    if(start < 0){
        start = arr.length + start;
    }

    if(start > arr.length){
        start = arr.length;
    }


    if(deleteCount === undefined){
        deleteCount = arr.length - start;
    }

    for(var i = 0; i < start; i++){
        keep.push(arr.shift());
    }

    for(var j = 0; j < deleteCount; j++){
        deleted.push(arr.shift());
    }

    for(var k = arguments.length - 1; k > 2; k--){
        arr.unshift(arguments[k]);
    }

    for(var l = keep.length - 1; l >= 0; l--){
        arr.unshift(keep[l]);
    }

    return deleted;
}

//EXAMPLE TESTS

var arr = [1,2,3,4]

console.log(mySplice(arr, 1));
console.log('arr = ' +  arr);
//OUTPUT: [2, 3, 4]  --> arr is now [1]

console.log(mySplice(arr, 0, 0, 5, 6, 7));
console.log('arr = ' +  arr);
//OUTPUT: []  --> arr is now [5, 6, 7, 1]

console.log(mySplice(arr, 1, 2, 'new'));
console.log('arr = ' +  arr);
//OUTPUT: [6, 7] --> arr is now [5, 'new', 1]
var arr1 = [5, 6, 7, 8];
console.log(mySplice(arr1, 8, 0, 9, 10));
console.log(arr1);