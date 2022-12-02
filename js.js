var maxSequence = function(arr){
  let res = 0;

  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j <= arr.length + 1; j++){
      let subArr = arr.slice(i, j);
      let sum = subArr.reduce((a, b) => a + b);
      if(sum > res){
        res = sum;
      }
    }
  }
  return res;
}