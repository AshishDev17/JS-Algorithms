/**
 * Created by Ash on 3/1/2017.
 */
/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it
works for any size, outputting a grid of the given width and height.*/

function chessBoard(size){
    var chessBoard = [];
    //loop through 1 to size to get rows of chessboard
    for(var i = 1; i <= size; i++){
        var row = ""
        // loop through 1 to size to get columns of chessboard
        for(var j = 1; j <= size; j++){
            //check if row is odd or even; if odd, row will start from space and else row will start from #
            if(i % 2 != 0){ // case when i is odd, row will start from space
                if(j % 2 != 0){
                   row += ' '
                }
                else{
                    row += '#'
                }
            }
            else{ // case when i is even, row wil start with #
                if(j % 2 != 0){
                    row += '#'
                }
                else{
                    row += ' '
                }
            }
        }

        chessBoard.push(row)
    }
    console.log(chessBoard.join('\n'));
}

/*function chessBoard(size){
    var array = [];

    for(var i = 1; i <= size; i++){
        var str = "";

        if(i % 2 !== 0){
          for(var j = 1; j <= size; j++){
              if(j % 2 !== 0){
                  str += " ";
              }
              else if(j % 2 ===0){
                  str += "#";
              }
          }
          array.push(str);
        }
        else if(i % 2 === 0){
            for(var j = 1; j <= size; j++){
                if(j % 2 !== 0){
                    str += "#";
                }
                else if(j % 2 ===0){
                    str += " ";
                }
            }
            array.push(str);
        }
    }

    console.log(array.join("\n"));
}*/

chessBoard(8);