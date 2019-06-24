/**
 * Created by Ash on 3/1/2017.
 */
/*
Build Tower by the following given argument: number of floors (integer and always greater than 0).
Tower block is represented as * and returns an Array;

towerBuilder(4) will return a tower as shown below.
    *
   ***
  *****
 *******
*/

function towerBuilder(nFloors) {
    var tower = [];
    var baseLength = 2 * nFloors - 1
    for(var i = 1; i <=nFloors; i++){
        var spacing = (baseLength - (2 * i - 1)) / 2
        tower.push(" ".repeat(spacing) + "*".repeat(2 * i - 1) + " ".repeat(spacing));
    }
    console.log(tower.join("\n"));
}

towerBuilder(4);