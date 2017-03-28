function rFact(n){
if(n<1){return 0;}
if(n===1){return 1}
return n*rFact(n-1)
}

rFact(3)
