function shift(x){
var end=x[0];
for(i=0;i<x.length-1;i++){
  x[i]=x[i+1];
}
x[x.length-1]=end;
return x;
}
test=[1,5,10,7,-2];
shift(test)
