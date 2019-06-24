/*
 Consider a staircase of size :

    #
   ##
  ###
 ####
 Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces.
 The last line is not preceded by any spaces.
 Write a program that prints a staircase of size .*/

function stairCase(n){
    var stairs = [];
    var stair = 1;
    while(stair <= n){
        stairs.push(' '.repeat(n - stair) + '#'.repeat(stair));
        stair++;
    }

    return stairs.join('\n');
}

console.log(stairCase(6));