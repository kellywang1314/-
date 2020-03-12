
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

// 新增方法，用于查找
function find(arr, item) {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i].source === item) {
            return arr[i];
        }
    }
    return null;
}
let a = {
    name:"key1",
    eat:[
        "苹果",
        "香蕉"
    ]
}
a.d = a

// 防止循环引用
function deepCopy(obj,hash = new WeakMap()){
    if(typeof obj !== 'object') return obj
    let newObj = Array.isArray(obj) ? [] : {}
    if(hash.has(obj)) return hash.get(obj)
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
