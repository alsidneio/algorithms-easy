function Sigma(n){
var sum=0;
  if(n<0){
    for(i=n; i<=0;i++){
      sum+=i;
    }
  }
  else if(n>0){
    for(i=n;i>=0;i--){
      sum+=i;
    }
  }
  else{return 0;}
  return sum;
}

Sigma(6)
