/**
 * Created by Ash on 3/3/2017.
 */
/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
We want to create the text that should be displayed next to such an item.
Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who
like an item. It must return the display text as shown in the examples:
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"*/

function likes(names){
    switch(names.length){
        case 0: return "no one likes this"; break;
        case 1: return names[0] + " likes this"; break;
        case 2: return names[0] + " and " + names[1] + " like this"; break;
        case 3: return names[0] + ", " + names[1] + " and " + names[2] + " like this"; break;
        default: return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
}


/*function likes(names) {
    var str = "";

    if(names.length === 0){
        str += "no one likes this";
    }
    else if(names.length === 1){
        str += names[0] + " likes this";
    }
    else if(names.length === 2 || names.length === 3) {
        names.forEach(function (person) {
            if (person === names[names.length - 1]) {
                str += person + " ";
            }
            else if (person === names[names.length - 2]) {
                str += person + " and ";
            }
            else{
                str += person + ", ";
            }
        });

        str += "like this";
    }
    else if(names.length > 3){

        str += names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }

    console.log(str);
}*/

likes(["Alex", "Jacob", "Mark", "Max"]);