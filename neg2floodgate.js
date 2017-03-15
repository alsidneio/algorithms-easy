function floodgate(p){
  for(i=0;i<p.length;i++){
    if(p[i]<0){
      p[i]='floodgate';
    }
  }
return p
}

var test=[2, -5,-8,13,15, -1];
floodgate(test);
