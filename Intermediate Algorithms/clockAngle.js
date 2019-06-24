/**
 * Created by Ash on 6/6/2017.
 */
function getClockAngle(hours, mins){
    hours = hours % 12;

    //hour hand travels 30 degrees in one hour (12 hours => 360 degrees, 1 hour => 360 / 12 = 30 degrees)
    //hour hand travels 0.5 degrees in one minute (60 minutes => 30 degrees, 1 min => 30 / 60 = 0.5 degrees)
    var hourHandAngle = (30 * hours) + (0.5 * mins);

    //minute hand travels 6 degrees in one minute (60 minutes => 360 degrees, 1 min => 360 / 60 = 6 degrees)
    var minHandAngle = 6 * mins;

    if(hourHandAngle > minHandAngle){
        return hourHandAngle - minHandAngle;
    }
    else{
        return minHandAngle - hourHandAngle;
    }
}

console.log("4:42", getClockAngle(4, 42)); // 111 degrees
console.log("12:01", getClockAngle(12, 01)); // 5.5 degrees
console.log("12:00", getClockAngle(12, 00)); // 0 degrees
console.log("00:01", getClockAngle(00, 01)); // 5.5 degrees
console.log("24:01", getClockAngle(24, 01)); // 5.5 degrees
console.log("16:42", getClockAngle(16, 42)); // 111 degrees
console.log("11:01", getClockAngle(11, 01)); // 324.5 degrees