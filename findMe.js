function findMe(num,set){
if(num<set[0]||num>set[set.length-1]){
  console.log('not even in range');
  return false;
}

function search(num,set){
  var check=Math.ceil((last-start)/2);
  if(check==0){
    console.log('not here');
    return false;
  }
  if(num>set[start+check]){
      start=start+check;
      console.log('gotta recurse');
      search(num,set)
    }
  else if(num<set[start+check]){
    last=last-check;
    console.log('gotta recurse');
    search(num,set)
  }
  else{
    console.log('im here')
    return true;
  }
}

var start=0;
var last=set.length-1;
}

test=[0,2,6,8,10,16,20,32,90];
findMe(1,test)
