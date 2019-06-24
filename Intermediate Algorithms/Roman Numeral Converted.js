/**
 * Created by Ash on 3/8/2017.
 */
/*
Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"*/

/*function numInBaseTen(num){
    var arr = [];
    var numInBaseTen = [];
    var numLength = num.toString().length;
    while(num >= 1){
        var x = num % 10;
        arr.push(x);
        num = Math.floor(num / 10);
    }

    for(var i = 0; i < numLength; i++){
        numInBaseTen.unshift(arr[i] * Math.pow(10, i));
    }
    return numInBaseTen;
}*/

function numInBaseTen(num) {
    var numInBaseTen = [];
    var digits = num.toString().split('').map(Number).reverse();

    digits.forEach(function(digit, index){
        numInBaseTen.unshift(digit * Math.pow(10, index));
    })

    return numInBaseTen;
}

function convertToRoman(number){
    var romanNumber = [];

    var numBaseTen = numInBaseTen(number);

    numBaseTen.forEach(function(val){
        var numStr = "";

        while (val >= 1000){
            numStr += "M";
            val = val - 1000;
        }

        while(val >= 500 && val < 1000){
            if(val >= 900){
                numStr += "CM";
                val = val - 900;
            }
            else{
                numStr += "D";
                val = val - 500;
            }
        }

        while(val >=100 && val < 500){
            if(val >= 400){
                numStr += "CD";
                val = val - 400;
            }
            else{
                numStr += "C"
                val = val - 100;
            }
        }

        while(val >= 50 && val < 100){
            if(val >=90){
                numStr += "XC";
                val = val - 90;
            }
            else{
                numStr += "L";
                val = val - 50;
            }
        }

        while(val >=10 && val < 50){
            if(val >= 40){
                numStr += "XL";
                val = val - 40;
            }
            else{
                numStr += "X";
                val = val - 10;
            }
        }

        while(val >=5 && val < 10){
            if(val === 9){
                numStr += "IX";
                val = val - 9;
            }
            else {
                numStr += "V";
                val = val - 5;
            }
        }

        while(val >= 1 && val < 5){
            if(val === 4){
                numStr += "IV";
                val = val - 4;
            }
            else{
                numStr += "I";
                val = val - 1;
            }
        }

        romanNumber.push(numStr);
    });

   return romanNumber.join("");
}

console.log(convertToRoman(68) ==="LXVIII");