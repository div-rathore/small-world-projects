Array.prototype.myReduce = function(fn,init = 0, ...args ) {
    let acc = init;
   for(let i =0; i<this.length; i++){
    acc = acc?fn(acc, this[i], i, this): this[i]
   }
    return acc;
}


arr = ['a','b','c']
const result = arr.myReduce((acc,curr, index)=>{
acc[index] = curr;
return acc;
}, {})

console.log(result);
