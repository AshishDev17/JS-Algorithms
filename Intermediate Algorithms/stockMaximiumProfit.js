/**
 * Created by Ash on 6/13/2017.
 */
/*
 You will be given a list of stock prices for a given day and your goal is to return the maximum profit that
 could have been made by buying a stock at the given price and then selling the stock later on. For example if
 the input is: [45, 24, 35, 31, 40, 38, 11] then your program should return 16 because if you bought the
 stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made.
 If no profit could have been made, return -1.*/

function stockMaxProfit(arr){
    var maxProfit = 0;

    arr.reduce(function(prev, item){
        var profit = Math.max(item - prev, 0);

        profit > maxProfit ? maxProfit = profit : null;

        if(profit === 0){
            return item;
        }
        else{
            return prev;
        }
    });

    if(maxProfit === 0){
        return -1;
    }

    return maxProfit;
}

/*
function stockMaxProfit(arr){
    var profit = 0;

    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] - arr[i] > profit){
                profit = arr[j] - arr[i];
            }
        }
    }

    if(profit > 0){
        return profit;
    }
    return -1;
}
*/

console.log(stockMaxProfit([45, 24, 35, 31, 40, 38, 11]));
