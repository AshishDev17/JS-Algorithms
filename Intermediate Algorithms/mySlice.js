function mySlice(arr, begin, end) {
    var slicedArray = [];
    var length = arr.length;

    if(begin === undefined){
        begin = 0;
    }
    if(begin < 0){
        begin = length + begin;
    }
    if(end === undefined){
        end = length;
    }
    if(end < 0){
        end = length + end;
    }

    for(var i = begin; i < end; i++){
        slicedArray.push(arr[i]);
    }

    return slicedArray;
}

//EXAMPLE TESTS

console.log(mySlice([1,2,1]));
//OUTPUT: [1, 2, 1]

console.log(mySlice([1,2,1], 1));
//OUTPUT: [2, 1]

console.log(mySlice([1,2,3,4], 2, 3));
//OUTPUT: [3]

console.log(mySlice([1,2,3,4], 0, -1));
//OUTPUT: [1, 2, 3]
