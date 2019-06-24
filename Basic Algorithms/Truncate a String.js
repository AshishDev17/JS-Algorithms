/**
 * Created by Ash on 1/19/2017.
 */
function truncateString(str, num) {
    if(num < str.length) {

        if (num <= 3) {
            return str.slice(0, num) + "...";
        }

        else if (3 < num < str.length) {
            return str.slice(0, (num - 3)) + "...";
        }
    }

    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);