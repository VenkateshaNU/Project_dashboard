let nums = [12, 13, 5, 6, 45, 17, 16];

let evenNum = nums.filter(function(num) {
    return num % 2 != 0;
    
});

Array.prototype.myfilter=function(callback){
  let neweven=[]

  for( let i=0;i<this.length;i++){
    if(callback(this[i])){
        neweven.push(this[i])
    }
  }
  return neweven
    
}



console.log(evenNum);