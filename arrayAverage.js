function arrayAverage(array){
var sum=array[0];


  for(i=1;i<array.length;i++){
    if(array[i]==NaN){
      console.log("Sorry I cannot continue with this calculation");
      return;
    }
    sum+=array[i];
  }
console.log("averag of "+ sum/array.length);
}
var test=[ 2,10,3];
arrayAverage(test);
