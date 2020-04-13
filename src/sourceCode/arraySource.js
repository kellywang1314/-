// reduce函数的实现
Array.prototype.reduceNew = function (callback, init) {
    for (let i = 0; i < this.length; i++) {
        init = callback(init, this[i], i, this)
    }
    return init
}

// filter函数实现
Array.prototype.filterNew = function (fn) {
    let res = []
    for (let i = 0; i < this.length; i++) {
        fn(this[i]) && res.push(this[i])
    }
    return res
}
// map函数的实现
Array.prototype.mapNew = function (fn) {
    let res = []
    for (let i = 0; i < this.length; i++) {
        res.push(fn(this[i],i,this))
    }
    return res
}

// some函数的实现
Array.prototype.someNew = function (fn) {
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            return true
        }
    }
    return false
};

// 函数柯里化
function curry(fn, args1 = []) {
    return fn.length === args1.length ? fn.apply(null, args1)
        : function (...args2) {
            return curry(fn, args1.concat(args2))
    }
}


// reduce 实现map
Array.prototype.map = function (callback) {
    let arr = this // this->调用该方法的数组
    return arr.reduce((prev, curr, index, arr) => {
        prev.push(callback(curr, index, arr))
        return prev
    }, []) // 最后返回的是prev,传入[]则第一轮prev = [], curr= 数组第1个元素
}

// substring
String.prototype.mysubstring = function (beginIndex, endIndex) {
    var str = this,
        newArr = [];
    if (!endIndex) {
        endIndex = str.length;
    }
    for (var i = beginIndex; i < endIndex; i++) {
        newArr.push(str.charAt(i));
    }
    return newArr.join("");
}


String.prototype.mysubstring = function (beginIndex, endIndex) {
    var str = this,
        strArr = str.split("");
    if (!endIndex) {
        endIndex = str.length;
    }
    return strArr.slice(beginIndex, endIndex).join("");
}

// 实现parseInt
function _parseInt(str,radix){
    var res = 0;
    if(typeof str !="string" && typeof str !="number"){
        return NaN
    }
    if(typeof radix !=="number" || radix < 2 || radix >36){
        return NaN
    }
    str = String(str).trim()
    let len = str.length
    let arr = str.split("")
    if(!len){
        return NaN
    }
    if(!radix){
        radix = 10
    }
    
    for(let i = 0; i < len; i++){
        res += Math.floor(arr[i])*Math.pow(radix,i)
    }
    return res
}
