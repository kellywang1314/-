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

