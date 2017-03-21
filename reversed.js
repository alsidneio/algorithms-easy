function reversed(x){
var hold=[];
var count=0;

for(i=(x.length-1); i>=0;i--){
hold[count]=x[i];
count++;
}
for(i=0;i<x.length;i++){
x[i]=hold[i];
}
return x;
}

test=[1,2,3,4,5];
reversed(test);
