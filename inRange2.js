function amIPresent(num,x){
var mid=Math.ceil((x.length-1)/2)
var newMid;
var diff;

if(num<x[0]||num>x[x.length-1]){
  console.log('not even in range');
}
do{
  if(num==x[mid]){
    return true;
  }
  else if(num>x[mid]){
    diff=(x.length-1)-(mid);
    newMid=(mid+Math.ceil(diff/2));
    mid=newMid;
  }
  else{
      newMid=(mid-Math.ceil(mid/2));
      mid=newMid;
  }
}
while(diff>0||newMid!=0);
return false;
}

test=[3,4,5,6,7,8,9,10,12,30,32,73,80];
amIPresent(5,test);
