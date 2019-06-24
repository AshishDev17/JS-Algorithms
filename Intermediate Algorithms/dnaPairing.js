/**
 * Created by Ash on 6/8/2017.
 */
/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results
as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]*/

function pairElement(str) {
    //split the str into array of elements
    var elements = str.split('');
    var pairObj = {'A' : 'T', 'T' : 'A', 'C' : 'G', 'G' : 'C'};

    //iterate through each element and pair it to its pairing element
    //push them into an array
    //push each pair into an encapsulating array and return it
    return elements.reduce(function(pairs, element){
        var pair = [];
        pair.push(element, pairObj[element]);
        pairs.push(pair);
        return pairs;
    }, []);
}

pairElement("GCG");