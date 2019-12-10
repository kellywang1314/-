//call源码实现:主要是吧调用call的函数赋值给thisObj对象
const myCall = function(thisObj){
    if (typeof this !== 'function') {
        throw this + ' is not a function';
      }
    let args = [...arguments]
    let fn = new Symbol('fn')
    thisObj[fn] = this
    const result = thisObj[fn](...args)
    delete thisObj[fn]
    return result
}

//bind的实现:同call不同的是不是立即执行的
const myBind= function(thisObj){
    if (typeof this !== 'function') {
        throw TypeError("Bind must be called on a function");
      }
    const args = [...arguments],
    self = this,
    bound = function() {
        return self.apply(thisObj,args)
    }
    return bound
}

export {myCall,myBind}




