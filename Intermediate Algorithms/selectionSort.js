/**
 * Created by Ash on 6/12/2017.
 */
/*
 Selection Sort, how does it works: This is very simple. Go through the array, find the index of the lowest element
 swap the lowest element with the first element. Hence first element is the lowest element in the array.
 Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it
 with the second element. That's how it continues to select (find out) the lowest element of the array and putting
 it on the left until it hits the last element.*/

function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var minIndex = i;
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
               minIndex = j;
            }
        }

        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

console.log(selectionSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(selectionSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(selectionSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]