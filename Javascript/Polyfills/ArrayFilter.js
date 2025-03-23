Array.prototype.myFilter = function(fn, output=[] ){ 
this.forEach((e)=>{
    if(fn(e)){
        output.push(e)
    }
})
return output;
}

arr = [1,2,3,4,5,6,7,8,9]
console.log(arr.myFilter((x)=> x<=5));
