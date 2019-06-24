/**
 * Created by Ash on 6/11/2017.
 */
//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    // iterate through array and check for elements till last level of nesting
    var flattened = [];

    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            var subArr1 = arr[i];
            for(var j = 0; j < subArr1.length; j++){
                if(Array.isArray(subArr1[j])){
                    var subArr2 = subArr1[j];
                    for(var k = 0; k < subArr2.length; k++){
                        if(Array.isArray(subArr2[k])){
                            var subArr3 = subArr2[k];
                            for(var l = 0; l < subArr3.length; l++){
                                flattened.push(subArr3[l]);
                            }
                        }
                        else{
                            flattened.push(subArr2[k]);
                        }
                    }
                }
                else{
                    flattened.push(subArr1[j]);
                }
            }
        }
        else{
            flattened.push(arr[i]);
        }
    }

    return flattened;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));