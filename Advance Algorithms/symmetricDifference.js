/**
 * Created by Ash on 6/11/2017.
 */
/*
 Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the
 provided arrays.
 Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference"
 of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
 For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements
 which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
 sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
 sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
 sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
 sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
 sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
 sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
 sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
 sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
 sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.*/

function sym(){
    //iterate through arguments and find the symmetric difference for each iteration and return the final
    //symmetric difference
    var symmetricDifference = arguments[0];

    for(var i = 1; i < arguments.length; i++){
        symmetricDifference = symmetricDiff(symmetricDifference, arguments[i]);
    }

    return symmetricDifference;
}

function symmetricDiff(arr1, arr2){
    //declare an empty array that will contain the symmetric diff of two arrays
    var symmetricDiff = [];

    //iterate over arr1 and check for the elements of arr1 that are not present in arr2, and push them
    //into symmetricDiff array, similarly will do fo arr2
    arr1.forEach(function(item){
        if(arr2.indexOf(item) < 0 && symmetricDiff.indexOf(item) < 0){
            symmetricDiff.push(item);
        }
    });

    arr2.forEach(function(item){
       if(arr1.indexOf(item) < 0 && symmetricDiff.indexOf(item) < 0){
           symmetricDiff.push(item);
       }
    });

    return symmetricDiff.sort();
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])); //[1, 4, 5]