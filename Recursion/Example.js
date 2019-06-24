/*----------- Find First n Numbers Of Fibonacci Sequence ---*/ 

// function fibonacci(n){
// 	if(n <= 2){
// 		return [1, 1];	
// 	}

// 	var seq = fibonacci(n - 1);

// 	seq[n - 1] = seq[n - 2] + seq[n- 3];

// 	return seq;
// }

// console.log(fibonacci(15)); // output [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]



/*------------------- Find Exponent Using Recursion -----*/

// function power(base, exponent){
// 	if(exponent === 0){
// 		return 1;
// 	}

// 	return base * power(base, exponent - 1);
// }

// console.log(power(8, 3)); //output 512



/*------------------- Find Range Using Recursion ------*/

// function range(x, y){
// 	if(x === y - 1){
// 		return [];
// 	}

// 	return [x + 1].concat(range(x+1, y));
// }

// function range(x, y){
// 	if(x === y - 1){
// 		return [];
// 	}

// 	var list = range(x + 1, y);
// 	list.unshift(x + 1);

// 	return list;
// }

// console.log(range(2, 9)); //output [3, 4, 5, 6, 7, 8]



/*-------------------- Find GCD Of Two Numbers ---------*/

// function gcd(x, y){
// 	if(y === 0){
// 		return x;
// 	}

// 	return gcd(y, x % y);
// }

// function gcd(x, y){
// 	while(true){
// 		if(x === 0) return y;
// 		y = y % x;

// 		if(y === 0) return x;
// 		x = x % y;
// 	}
// }

//console.log(gcd(5, 20)); //output 5