function amIPresent(num,x){
//----------------------------------
//Test the edge cases to see if the number I want
//is even in the array's range.
//-------------------------------------------

if(num<x[0]||num>x[x.length-1]){
  console.log('not even in range');
}
//Variable that tracks the length of the array
var count=x.length;
//-------------------------------------------
//I used a while loop because I did not know how many
//times I was going to have to iterate. I set the condition
//to stop at the point where there are no more elements in the array
// b/c at that point I know the target number is not in the array
//----------------------------------------------------er
while(count>0){
  if(num==x[Math.ceil(x.length/2)]){
    return true;
  }
  else if(num>x[Math.ceil(x.length/2)]){
    x.splice(0,Math.ceil(x.length/2));
  }
  else{
    //Used x.length-1 to handle the condition when there is only one
    //element in the array
    x.splice(Math.ceil((x.length-1)/2), x.length);
  }
  count=x.length; //assign a new length value to x
  console.log(x);//this command allows me to see how the array changes.
}
return false;
}

test=[3,4,5,6,7,8,9,10,12,30,32,73,80];
amIPresent(5,test);
