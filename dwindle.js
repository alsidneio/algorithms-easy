function dwindle(x){
var count=x.length;
var mid=Math.ceil((x.length)/2);
while(count>0){
    x.splice(0,mid);
    console.log(x);
    console.log(x.length);
    mid=Math.ceil((x.length)/2);
    count=x.length;
}
console.log('Im done')
}

test=[3,4,5,6,7,8,9,10,12,30,32,73,80];
dwindle(test);
