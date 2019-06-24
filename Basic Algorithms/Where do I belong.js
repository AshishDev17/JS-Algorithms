/**
 * Created by Ash on 1/22/2017.
 */
function getIndexToIns(arr, num) {
   /*var numIndex = 0;
   var sortedArray = [];

   sortedArray = arr.sort(function(a,b){
       return a-b;
   });

   for(i=0; i<sortedArray.length; i++){
       if(sortedArray[i]< num){
           numIndex++;
       }
   }

   return numIndex;*/
    arr.push(num);
   return arr.sort(function (a, b) {
       return( a- b);
   }).indexOf(num);

}

getIndexToIns([40, 60], 50);
