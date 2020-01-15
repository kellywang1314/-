// 函数柯里化：本质就是把一个参数很多的函数分解成单一参数的多个函数
// 实际应用：延迟计算；参数复用；动态创建函数

// 1.参数复用应用
/*
如果存在一个正则校验函数，在多个地方使用，那就要分别调用check,那reg就要被写很多次
使用函数柯里化可以解决这个问题
*/
function check(reg,text){
    return reg.test(text)
}
check(/\d(+)/g,'12')
check(/\d(+)/g,'145')

function checkcurry(reg){
    return function(text){
        return reg.text(text)
    }
}
let hasNumber = checkcurry(/\d(+)/g)
hasNumber('12')
hasNumber('145')


// 2. 延迟运行，比如bind函数

// 柯里化封装
function curry(fn){
    //去掉curry第一个参数 该参数是后续参数传递结束的一个函数
     let args = [].slice.call(arguments,1)
     //获取需要柯里化执行函数的形参参数个数
     let len = fn.length
     //定义变量获得传入参数个数
     let newLen = args.length
     //参数未传递结束继续返回函数就行传参
     function __curry(){
         //保持除调用函数外所有参数
          args.push(...arguments)
         //参数不够时保存每次传参个数
         newLen+=arguments.length
         //判断参数是否和需要调用函数的参数保持一致
         if(newLen === len){
             //保持一致就传入所有参数调用该函数
             return fn.apply(this,args)
         }
         //否则返回函数继续传参
         return __curry
     }
     //判断是否一次性传完参数如果传完参数则传入参数调用需要调用的函数
     if(args.length === len){
         return fn.apply(this,[...args])
     }else{
        return __curry
     }
}

//使用柯里化调用 的函数
function add(a,b,c,d){
    return a+b+c+d;
}
//测试
console.log(curry(add,1,2,3,4));//输出 10
console.log(curry(add,1,2,3)(4));//输出 10
console.log(curry(add,1,2)(3)(4));//输出 10
console.log(curry(add,1)(3)(4)(2));//输出 10
console.log(curry(add)(3)(4)(2)(1));//输出 10
console.log(curry(add)(3)(4)(2)(1));//输出 10
console.log(curry(add,1,2,3,4,5));//输出 参数传多了