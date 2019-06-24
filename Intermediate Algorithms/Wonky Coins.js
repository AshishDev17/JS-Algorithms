/*
Catsylvanian money is a strange thing: they have a coin for every
denomination (including zero!). A wonky change machine in
Catsylvania takes any coin of value N and returns 3 new coins,
valued at N/2, N/3 and N/4 (rounding down).
Write a method `wonky_coins(n)` that returns the number of coins you
are left with if you take all non-zero coins and keep feeding them
back into the machine until you are left with only zero-value coins.
*/

function wonkyCoins(n){
    if(n === 0){
        return 1;
    }

    return wonkyCoins(Math.floor(n / 2)) +  wonkyCoins(Math.floor(n / 3))  + wonkyCoins(Math.floor(n / 4));
}

console.log(wonkyCoins(1) == 3)
console.log(wonkyCoins(5) == 11)
console.log(wonkyCoins(6) == 15)
console.log(wonkyCoins(0) == 1)
