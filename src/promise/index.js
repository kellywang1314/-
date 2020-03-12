/**
 * 一、new Promise 和 Promise.resolve()的区别
 *      Promise.resolve()相当于new Promise((resolve) => {resolve()})，也就是
 * 二、Promise.resolve(param)
 *      1.param是一个promise实例，将不做任何修改、原封不动地返回这个实例。
 *      2.param是一个带有then方法的对象，会把这个对象转换成Promise对象并立即执行这个then方法
 *      3.param为一个原始值，或者为null，会返回一个resolved状态的 Promise 对象。
 * **/


/** 
 * 手动实现一个promise，
 * https://time.geekbang.org/dailylesson/detail/100028449
 * 参考：https://zhuanlan.zhihu.com/p/52714698
 * 
 * **/

 // 第一步：实现promise的基本框架
 class myPromise{
     constructor(fn){
        this.resolveValue = null
        this.rejectValue = null 

        const resolve = (resolveValue) => {
            this.resolveValue = resolveValue
         }
    
        const reject = (rejectValue) => {
            this.rejectValue = rejectValue
         }
    
         try{
            fn(resolve,reject)
         }catch(rejectValue){
            reject(rejectValue)
         }
     }
 }

const promise = new myPromise((resolve,reject) => {
    resolve('我来了')  
})


// 第二步：增加状态机
const pending = 'pending'
const fullfilled = 'fullfilled'
const rejected = 'rejected'
class myPromise{
    constructor(fn){
       this.resolveValue = null
       this.rejectValue = null 
       this.state = pending
       const resolve = (resolveValue) => {
           if(this.state === pending){
                this.resolveValue = resolveValue
                this.state = fullfilled
           }
        }
   
       const reject = (rejectValue) => {
           if(this.state === pending){
                this.rejectValue = rejectValue
                this.state = rejected
           }
           
        }
   
        try{
           fn(resolve,reject)
        }catch(rejectValue){
           reject(rejectValue)
        }
    }
}

// 第三步：增加then方法

const pending = 'pending'
const fullfilled = 'fullfilled'
const rejected = 'rejected'
class myPromise{
    constructor(fn){
       this.resolveValue = null
       this.rejectValue = null 
       this.state = pending
       const resolve = (resolveValue) => {
           if(this.state === pending){
                this.resolveValue = resolveValue
                this.state = fullfilled
           }
        }
       const reject = (rejectValue) => {
           if(this.state === pending){
                this.rejectValue = rejectValue
                this.state = rejected
           }  
        }
   
        try{
           fn(resolve,reject)
        }catch(rejectValue){
           reject(rejectValue)
        }
    }

    then(onFullFilled,onRejected){
        if(this.state === fullfilled){
            onFullFilled()
        }else{
            onRejected()
        }
    }
}


// 第四步：增加异步调用

const pending = 'pending'
const fullfilled = 'fullfilled'
const rejected = 'rejected'
class myPromise{
    constructor(fn){
       this.resolveValue = null
       this.rejectValue = null 
       this.state = pending
       this.fullfilledcallback = []
       this.rejectcallback = []
       const resolve = (resolveValue) => {
           if(this.state === pending){
                this.resolveValue = resolveValue
                this.state = fullfilled
                this.fullfilledcallback.shift()(this.resolveValue)
           }
        }
       const reject = (rejectValue) => {
           if(this.state === pending){
                this.rejectValue = rejectValue
                this.state = rejected
                this.rejectcallback .shift()(this.resolveValue)
           }  
        }
   
        try{
           fn(resolve,reject)
        }catch(rejectValue){
           reject(rejectValue)
        }
    }

    then(onFullFilled,onRejected){
        if(this.state === fullfilled){
            onFullFilled(this.resolveValue)
        // 在异步调用进来状态为pending，此时把onFullFilled放入队列等待状态改变的执行时机
        }else if(this.state === pending){
            this.fullfilledcallback.push(onFullFilled)
            this.rejectcallback.push(onRejected)
        }else{
            onRejected(this.resolveValue)
        }
        // 第五步，增加链式调用（最难的一步）？？？？
        return this
    }
}

