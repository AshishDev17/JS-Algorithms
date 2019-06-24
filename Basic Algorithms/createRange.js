//range of 0 - 4
var nums = Array.apply(0, Array(5)).map(function (element, index) {
    return index;
}); //[0, 1, 2, 3, 4]

//range from "a" - "z"
var alphabets = Array.apply(0, Array(26)).map(function (element, index) {
    return String.fromCharCode('a'.charCodeAt() + index);
}); //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
// "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]