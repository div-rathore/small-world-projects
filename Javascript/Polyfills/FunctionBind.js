Function.prototype.myBind = function(...args){
    var callback = this;
    ctx = args.splice(1)
    return function(...a){
        callback.call(args[0], ...[...ctx,...a])
    }
}