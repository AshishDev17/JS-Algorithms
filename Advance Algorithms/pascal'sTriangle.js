/* Pascal’s triangle is a triangular array of the binomial coefficients. Write a function that takes an integer
 value n as input and prints first n lines of the Pascal’s triangle. Following are the first 6 rows of Pascal’s
 Triangle.
      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
 1 5 10 10 5 1 */

function pascalRecursive(n, a) {

    if (n < 2) return a; // We already have the top row

    var prevTier = a[a.length-1];
    var curTier = [1];

    for (var i = 1; i < prevTier.length; i++) {
        curTier[i] = prevTier[i] + prevTier[i-1];
    }
    curTier.push(1);
    a.push(curTier);

    return pascalRecursive(n-1, a);
}

console.log(pascalRecursive(6, [[1]]));

/*function pascalsTriangle(n){
    var pascalsTriangle = [];

    var i = 1;

    while(i <= n){
        if(i === 1){
            pascalsTriangle.push([1]);
        }
        else if(i === 2){
            pascalsTriangle.push([1, 1]);
        }
        else{
            pascalsTriangle.push(pascalsTriangleTier(pascalsTriangle[pascalsTriangle.length - 1]));
        }

        i++;
    }

    return pascalsTriangle;
}

function pascalsTriangleTier(arr){
    var tier = [];

    tier.push(1);

    for(var i = 0; i < arr.length -1; i++){
        tier.push(arr[i] + arr[i + 1]);
    }

    tier.push(1);

    return tier;
}


console.log(pascalsTriangle(6));*/
