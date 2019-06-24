/**
 * Created by Ash on 1/19/2017.
 */

function mutation(arr) {

    var firstElement = arr[0].toLowerCase();
    var secondElement = arr[1].toLowerCase();

    for(i=0; i< secondElement.length; i++){

    if(firstElement.indexOf(secondElement[i]) < 0){
        return false;
    }
   }
   return true;
}

console.log(mutation(["hello", "Hello"]));