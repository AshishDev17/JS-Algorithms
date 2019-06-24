/**
 * Created by Ash on 2/28/2017.
 */
/*
 This challenge requires you to convert an integer, which represents the number of minutes, for example 63 means 214
 minutes, and convert this integer into hours and minutes. So if the input was 63, then your program should output
 the string '1:3' because 63 minutes converts to 1 hour and 3 minutes.*/

/*
function timeConvert(minutes){
    var hours = Math.floor(minutes / 60);
    var minutes = minutes % 60;

    return hours + ":" + minutes;
}

/!*
function timeConvert(minutes) {
    var hours = 0;

    while(minutes >= 60){
        hours += 1;
        minutes = minutes - 60;
    }
    // code goes here
    return hours + ":" + minutes;
}*!/

console.log(timeConvert(3606));*/

function convertSeconds(secs){
    var hours = Math.floor(secs / 3600);
    var minutes = Math.floor((secs % 3600) / 60);
    var seconds = (secs % 3600) % 60;

    return padding(hours) + ":" + padding(minutes) + ":" + padding(seconds);
}

function padding(num){
    if(num < 10){
        return "0" + num;
    }
    else{
      return num;
    }
}

console.log(convertSeconds(4353636));