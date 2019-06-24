/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any
elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/

function uniqueInOrder(iterable) {
    var result = [];
    var last;

    for (var i = 0; i < iterable.length; i++) {
        if (iterable[i] !== last) {
            last = iterable[i];
            result.push(last)
        }
    }

   return result;
}

/*var uniqueInOrder= function (iterable){
    var arr = [];
    var regEx = /(.)\1*!/g;
    if(iterable === "" || iterable.length <= 0){
        return [];
    }
    var strArray = iterable.constructor === Array ? iterable.join("").match(regEx) : iterable.match(regEx);


    strArray.forEach(function(str){
        arr.push(str.charAt(0));
    });

    var modifiedArray = arr.map(function(element){
        var x = Number(element);
        if(isNaN(x)){
            return element;
        }
        else{
            return x;
        }
    });

    console.log(modifiedArray);
}*/
console.log(uniqueInOrder([1,2,2,3,3,1,1,2]));
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
