function positiveOnly(x){
for(i=0;i<x.length;i++){
    if(x[i]<0){
      x[i]=0;
    }
}
return x
}

test=[9, -1, 6, -3,4,-10]
positiveOnly(test)
