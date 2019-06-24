function myJoin(arr, separator) {
    var joinStr = '';

    if (separator === undefined) {
        separator = ',';
    }

    for (var i=0; i < arr.length; i++) {
        if( i === 0) {
            joinStr += arr[i];
        } else if(arr[i] !== undefined && arr[i] !== null) {
            joinStr += separator + arr[i];
        }
    }
    return joinStr;
}


console.log(myJoin(['hello',undefined,'world'], ' '));
// OUTPUT: 'hello world'
console.log(myJoin([2, "be", false]));
// OUTPUT: '2,be,false`


/* Solution 2
 function myJoin(arr, separator) {
 var joinStr = arr[0]+'' || '';

 if (separator === undefined) {
 separator = ',';
 }

 for (var i=1; i < arr.length; i++) {
 if(arr[i] !== undefined && arr[i] !== null) {
 joinStr += separator + arr[i];
 }
 }
 return joinStr;
 }

 */