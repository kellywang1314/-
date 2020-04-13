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
     let args = [...arguments].slice(1)
     let len = fn.length
     function __curry(){
         args.push(...arguments)
         if(args.length === len){
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
    let res = a+b+c+d
    return res
}
//测试
console.log(curry(add,1,2,3,4));//输出 10
console.log(curry(add,1,2,3)(4));//输出 10
console.log(curry(add,1,2)(3)(4));//输出 10
console.log(curry(add,1)(3)(4)(2));//输出 10
console.log(curry(add)(3)(4)(2)(1));//输出 10
console.log(curry(add)(3)(4)(2)(1));//输出 10
console.log(curry(add,1,2,3,4,5));//输出 参数传多了


// var arr=[1,2,3,4,2,2],找出这个数组中出现次数最多的元素，输出该元素，并且将这些元素的下标都输出出来

function Count(arr=[]){
    return arr.reduce((acc,item,index) => {
        acc[item] = {}
        acc[item].indexs = []
        acc[item].count = 0
        acc[item].count = (0 || acc[item].count)+1
        acc[item].indexs.push(index)
    },{})
}

