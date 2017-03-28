function arrayContains(arr,val){
  return rBinSearch(arr,val,0,arr.length) //passes arrray and target value into the binary search
}

//base cases: a)found it, b)bookends met
//else: fwd prog=moving our bookends in

function rBinarySearch(arr,val,start,end){
  if(start>=end||val<arr[start]||val>arr[end-1]){ // base case and the boundary conditions
    return false;
  } //didnt find it

var mid= parseInt((start+end)/2); //in case we get half values take the integer
if(arr[mid]===val){ // looking at the value of the mid point
  return true;
}//found

if(arr[mid]>val){
  end=mid; //redefing the boundary indices of the array.
}
else{
  start=mid+1; //search mid+1 : end
}
return rBinSearch(arr,val,start,end);
}
