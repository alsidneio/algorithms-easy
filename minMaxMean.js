function minMaxMean(x){
var sum=x[0];
var max=x[0];
var min=x[0];
for(i=1; i<x.length;i++){ //looping through an array
    if (max<x[i]){
      max=x[i];
    }
  }

for(i=1; i<x.length;i++){ //looping through an array
    if (min>x[i]){
      min=x[i];
    }
  }

for(i=1;i<x.length;i++){
    if(x[i]==NaN){
      console.log("Sorry I cannot continue with this calculation");
      return;
    }
    sum+=x[i];
  }
  console.log(max)
  console.log(min)
  console.log("average of "+ sum/x.length);

}


var test=[ 2,10,3,7,8];
minMaxMean(test);
