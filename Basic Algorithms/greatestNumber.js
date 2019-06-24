/**
 * Created by Ash on 6/13/2017.
 */
//find greatest number in an array

function greatestNumber(arr){
    var greatestNum;

    arr.reduce(function(previous, current){
        current > previous ? greatestNum = current : greatestNum = previous;

        if(current > previous){
            return current;
        }
        else{
            return previous;
        }
    });

    return greatestNum;
}

console.log(greatestNumber([45, 24, 35, 31, 40, 38, 11]));