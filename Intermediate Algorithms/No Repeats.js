/**
 * Created by Ash on 3/14/2017.
 */
/*
 Write a function, `no_repeats(year_start, year_end)`, which takes a
 range of years and outputs those years which do not have any
 repeated digits.
 You should probably write a helper function, `no_repeat?(year)` which
 returns true/false if a single year doesn't have a repeat.
 */

function hasNonRepeatedDigits(year){
    var digits = [];
    var yearArray = year.toString().split("");
    for(var i = 0; i < yearArray.length; i++){
        if(digits.indexOf(yearArray[i]) >= 0){
            return false;
        }
        digits.push(yearArray[i]);
    }
    return true;
}

function noRepeats(yearStart, yearEnd){
    var noRepeat = [];
    if(yearStart <= yearEnd){
        for(var i = yearStart; i <= yearEnd; i++){
            if(hasNonRepeatedDigits(i)){
                noRepeat.push(i);
            }
        }
    }
    return noRepeat;
}

console.log(noRepeats(1980, 1980));