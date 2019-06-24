/**
 * Created by Ash on 1/19/2017.
 */
function repeatStringNumTimes(str, num) {

    if(num > 0){
        return str.repeat(num);
    }
    else{
        return "";
    }
}

console.log(repeatStringNumTimes("abc", 5));