/**
 * 一、new Promise 和 Promise.resolve()的区别
 *      Promise.resolve()相当于new Promise((resolve) => {resolve()})，也就是
 * 二、Promise.resolve(param)
 *      1.param是一个promise实例，将不做任何修改、原封不动地返回这个实例。
 *      2.param是一个带有then方法的对象，会把这个对象转换成Promise对象并立即执行这个then方法
 *      3.param为一个原始值，或者为null，会返回一个resolved状态的 Promise 对象。
 * **/


/** 
 * 
 * 
 * 手动实现一个promise，
 * 参考：https://zhuanlan.zhihu.com/p/52714698
 * 
 * **/
//最基础的
function Promise(Fn){
    let resolveCall = function() {console.log('我是默认的');}; // 定义为函数是为了防止没有then方法时报错
    this.then = (onFulfilled) => {
        resolveCall = onFulfilled;
    };
    function resolve(v){ // 将resolve的参数传给then中的回调
        resolveCall(v);
    }
    Fn(resolve);
}

//增加链式调用
function Promise(Fn){
    this.resolves = []; // 方便存储onFulfilled
    this.then = (onFulfilled) => {
        this.resolves.push(onFulfilled);
        return this;
    };
    let resolve = (value) =>{ // 改用箭头函数，这样不用担心this指针问题
        setTimeout(_ => {
            this.resolves.forEach(fn => fn(value));
        });
    };
    Fn(resolve);
}

//增加状态
function Promise(Fn){
    this.resolves = [];
    this.status = 'PENDING'; // 初始为'PENDING'状态
    this.value;
    this.then = (onFulfilled) => {
        if (this.status === 'PENDING') { // 如果是'PENDING'，则储存到数组中
            this.resolves.push(onFulfilled);
        } else if (this.status === 'FULFILLED') { // 如果是'FULFILLED'，则立即执行回调
            console.log('isFULFILLED');
            onFulfilled(this.value);
        }
        return this;
    };
    let resolve = (value) =>{
        if (this.status === 'PENDING') { // 'PENDING' 状态才执行resolve操作
            setTimeout(_ => {
                //状态转换为FULFILLED
                //执行then时保存到resolves里的回调
                //如果回调有返回值，更新当前value
                this.status = 'FULFILLED';
                this.resolves.forEach(fn => value = fn(value) || value);
                this.value = value;
            });
        }
    };
    Fn(resolve);
}


/* 红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？
（用Promse实现）三个亮灯函数已经存在： */
function red(){
    console.log('red')
}
function green(){
    console.log('green')
}
function blue(){
    console.log('blue')
}
function light(timer,fn){
    return new Promise(function(resolve){
        setTimeout(function(){
            fn()
            resolve()
        },timer)
    })
}
function lightcontrol(){
  //new Promise((resolve) => {resolve()}).then(() =>{
    Promise.resolve().then(() =>{
        return light(3000,red)
    }).then(() => {
        return light(2000,green)
    }).then(() => {
        return light(1000,blue)
    }).then(() => {
        lightcontrol()
    }) 
}

