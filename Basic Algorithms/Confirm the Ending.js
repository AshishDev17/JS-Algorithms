/**
 * Created by Ash on 1/19/2017.
 */
/*function confirmEnding(str, target) {
 var trgtLength = target.length;

 if(str.substr(-trgtLength)=== target){
 return true;
 }
 else {
 return false;
 }
 }*/

function confirmEnding(str, target){
    if(str.slice(str.length - target.length) === target){
        return true;
    }

    return false;
}
console.log(confirmEnding("Bastian", "ian"));