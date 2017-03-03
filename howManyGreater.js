function howManyGreater(num,array){
var count=0;
  for(i=0;i<array.length; i++){
    if(num<array[0]){
      count++;
    }
  }
  console.log(count);
}
