// js 类型检测方法 typeof/instanceof(数据类型) Object.prototype.toString/constructor（构造函数）

// 1. typeof：number/string/boolean/undefined/function/object

// 2. instance: 用于判断变量是否是某一个对象的实例
//原理： L 的 __proto__ 是不是等于 R.prototype，不等于再找 L.__proto__.__proto__ 直到 __proto__ 为 null
function myinstance(L,R){
    let O = R.prototype
    L = L.__proto__
    while(true){
        if(L === null ) return false
        if(O === L) return true
        L = L.__proto__
    }
}

// Object.prototype.toString
var a = 123;
console.log(Object.prototype.toString.call(a));    // [object Number]

var b = "string";
console.log(Object.prototype.toString.call(b));    // [object String]

var c = [];
console.log(Object.prototype.toString.call(c));    // [object Array]

var d = {};
console.log(Object.prototype.toString.call(d));    // [object Object]


// constructor 属性返回对创建此对象的数组函数的引用。


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
