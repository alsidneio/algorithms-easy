function maxValue(array){
var max=inputArray[0];
for(i=1; i<array.length;i++){ //looping through an array
    if (max<inputArray[i]){
      max=inputArray[i];

    }
  }
  console.log(max);
}
