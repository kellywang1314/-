
// 浅拷贝
function Copy(obj){
    let newObj
    if(typeof obj === 'object'){
        newObj = {}
        for(let i in obj){
            newObj[i] = obj[i]
        }
    }else{
        newObj = obj
    }
    return newObj
}

// 深拷贝
function deepCopy(obj,hash = new WeakMap()){
    // 处理循环引用
    if(typeof obj !== 'object') return obj
    if(hash.has(obj)) return hash.get(obj)
    let newObj = Object.prototype.toString.call(obj) === '[object Object]' ? {} : []
    hash.set(obj,newObj)
    for(let i in obj){
       
        if(typeof obj[i] === 'object'){
            newObj[i] = deepCopy(obj[i],hash)
        }else{
            newObj[i] = obj[i] 
        }
    }
    return newObj
}
// 除了对可遍历对象进行遍历，还能对Date,Number等能遍历

function getType(target) {
    return Object.prototype.toString.call(target)
}

function getInit(target) {
    const Ctor = target.constructor
    return new Ctor()
}

// 克隆正则
function cloneReg(targe) {
    const reFlags = /\w*$/
    const result = new targe.constructor(targe.source, reFlags.exec(targe))
    result.lastIndex = targe.lastIndex
    return result
}
// 克隆其他类型
function cloneOtherType(targe, type) {
    const Ctor = targe.constructor;
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(targe);
        case regexpTag:
            return cloneReg(targe);
        case symbolTag:
            return cloneSymbol(targe);
        default:
            return null;
    }
}
