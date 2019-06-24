function properNounFilter(word) {
    var p1 = word.slice(0, 1); // first letter of word
    var p2 = word.slice(1); // remaining letters of word
    var A = 'A'.charCodeAt();
    var Z = 'Z'.charCodeAt();
    var a = 'a'.charCodeAt();
    var z = 'z'.charCodeAt();

    if(p1.charCodeAt() < A ||  p1.charCodeAt() > Z) return false;

    for(var i = 0; i < p2.length; i++){
        if(p2[i].charCodeAt() < a || p2[i].charCodeAt() > z) return false;
    }

    return true;
}

//EXAMPLE TESTS

console.log(properNounFilter('coffee'));
// OUTPUT: false

console.log(properNounFilter('Einstein'));
// OUTPUT: true

console.log(properNounFilter('ApoLLo'));
// OUTPUT: false