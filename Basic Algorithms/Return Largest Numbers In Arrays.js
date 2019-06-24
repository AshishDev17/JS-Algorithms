/**
 * Created by Ash on 1/19/2017.
 */
function largestOfFour(arr) {
    var arrOfLargest = [];

    for(i=0; i< arr.length; i++){
        var lrgstNumInArr = arr[i][0];

        for(j=1; j< arr[i].length; j++){
            if(lrgstNumInArr < arr[i][j]){
                lrgstNumInArr = arr[i][j];
            }
        }
        arrOfLargest.push(lrgstNumInArr);
    }

    return arrOfLargest;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
