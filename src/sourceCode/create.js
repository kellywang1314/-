// Object.create的实现原理
if(typeof Object.create !== 'function'){
    Object.create = function(prototype,properties){
        function f () {}
        f.prototype = prototype
        let res = new f()
        res.constructor = f
        if(properties){
            Object.defineProperties(res,properties)
        }
        return res
    }
}
