/*Bubble Sort
How it works:
step-1: you compare the first item with the second. If the first item is bigger than the second item.
you swap them so that the bigger one stays in the second position.
step-2:And then compare second with third item. if second item is bigger than the third, we swap them.
otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.
step-3:we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest
item of the array to the right most position of the array.
step-4: We repeat this process, starting from the last item of the array.
We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.
step-5: and then we move backward inside the outer loop.*/

function bubbleSort(arr){
    var sorted = false;

    while (!sorted){
        sorted = true;

       arr.forEach(function(val, i){
           if(arr[i] > arr[i + 1]){
               var temp = arr[i];
               arr[i] = arr[i+1];
               arr[i+1] = temp;
               sorted = false;
           }
       })
    }

    return arr;
}

/*function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
            if(arr[j-1]>arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}*/

console.log(bubbleSort([4, 5, 3, 1, 2]));