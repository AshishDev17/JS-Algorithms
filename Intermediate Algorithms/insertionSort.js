/**
 * Created by Ash on 6/12/2017.
 */
/*
It starts with the second element. Pick the second element to be inserted and then compare to the previous element.
If the first one is bigger, move the first one to second position and second one at first.
Now first and second item is sorted.
Then, pick the third element and check whether the second element is bigger than the third. keep going similar way
until you hit the first element or a element smaller than the element you are comparing with. When you get an item
smaller than the picked item, you insert it.*/

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var smallest = arr[i];

        var j = i;
        while(arr[j - 1] > smallest && j > 0){
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = smallest;
    }

    return arr;
}

console.log(insertionSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(insertionSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(insertionSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]