/**
 * Created by Ash on 3/1/2017.
 */
/*
Write a function tripledouble(num1,num2)which takes in numbers num1 and num2 and returns 1 if there is a straight
triple of a number at any place in num1 and also a straight double of the same number in num2.
For example:
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
                                          // num2 has straight double 99s
tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2
tripledouble(12345, 12345) == 0
tripledouble(666789, 12345667) == 1*/

    function tripleDouble(num1, num2) {
        var string1 = num1.toString();
        var string2 = num2.toString();
        var numStr = "0123456789";

        for(var i = 0; i < numStr.length; i++){
            var str1 = numStr[i].repeat(3);
            var str2 = numStr[i].repeat(2);

            if(string1.indexOf(str1) >= 0 && string2.indexOf(str2) >= 0){
              return 1;
            }
        }

        return 0;
        //code me
    }

console.log(tripleDouble(1222345, 12345));