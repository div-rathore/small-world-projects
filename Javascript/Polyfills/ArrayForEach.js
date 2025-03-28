Array.prototype.myForEach = function(callback){
    for(let i=0; i<this.length;i++){
        callback(thius[i],i)
    }
}