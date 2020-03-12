//new 的实现

function myNew () {
    //创建实例对象
    let obj = new Object()
    //传入构造函数
    let fn = Array.prototype.shift.call(arguments)
    let args = Array.prototype.slice.call(arguments,1)
    //实现继承
    obj.__proto__ = fn.prototype

    //调用构造器，改变this指向到实例
    let result = fn.apply(obj,args)

    return typeof result === 'object' ? result : obj
}


// 
function myNew(fn){
    let args = [...argument].slice(1)
    let obj = {}
    obj.__proto__ = fn.prototype
    let result = fn.call(obj,args)
    return typeof obj === 'object' ? result : obj

}
