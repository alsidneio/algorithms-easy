function findMe(num,set){
var ans;
if(num<set[0]||num>set[set.length-1]){
  console.log('not even in range');
  ans=false;
}

function search(num,set){
  var check=Math.ceil((last-start)/2);
  if(check==0){
    ans=false;
    return;
  }
  if(num>set[start+check]){
      start=start+check;
      search(num,set)
    }
  else if(num<set[start+check]){
    last=last-check;
    search(num,set)
  }
  else{
    ans=true;
    return;
  }
}

var start=0;
var last=set.length-1;
search(num,set)
return ans;
}

test=[0,2,6,8,10,16,20,32,90];
findMe(1,test)
