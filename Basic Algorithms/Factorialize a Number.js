/**
 * Created by Ash on 1/18/2017.
 */
function factorialize(num){
    if(num === 0){
        return 1;
    }

    return num * factorialize(num - 1);
}

/*function factorialize(num){
    var result = 1;

    for(var i = 2; i <= num; i++){
        result *= i;
    }

    return result;
}*/

/*function factorialize(num) {
    var result = 1;

    for(i=num; i>=1; i--){
        result *= i;
    }

    return result;
}*/

console.log(factorialize(5));