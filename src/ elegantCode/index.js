/*
*  主要包括日常代码中，同一功能优雅的写法收集
*/

// 一、switch
const func1 = () => {
    console.log('执行1')
}
const func2 = () => {
    console.log('执行2')
}
const func3 = () => {
    console.log('执行3')
}
const index = 1

// switch的写法 
switch(index){
    case 1:
        func1()
        break
    case 2:
        func2()
        break
    case 3:
        func3()
        break
}
// new Map
const funcs = new Map([
    [1,func1],
    [2,func1],
    [3,func1]
])
let map = (index) => {
    return funcs.get(index)
}
map(index)()

/**
 * 代码中有多个分支，并且不同的分支有大量重复代码：
 * 举个例子：在小程序拼券系统中，需要对不同身份的用户（游客/登陆用户）
 * 在用户开的团不同的状态中有不同的处理（1开团中 2开团失败 3 开团成功 4 券已抢光 5 券有库存未开团）
 * 这时候就可以有很多不同的分支
 * 
 * **/
// if-else的缩写

if (identity == 'guest') {
    if (status == 1) {
    //函数处理
    } else if (status == 2) {
    //函数处理
    } else if (status == 3) {
    //函数处理
    } else if (status == 4) {
    //函数处理
    } else if (status == 5) {
    //函数处理
    } else {
    //函数处理
    }
} else if (identity == 'master') {
    if (status == 1) {
    //函数处理
    } else if (status == 2) {
    //函数处理
    } else if (status == 3) {
    //函数处理
    } else if (status == 4) {
    //函数处理
    } else if (status == 5) {
    //函数处理
    } else {
    //函数处理
    }
}

// new Map写法，定义一个key-value map
let mapSet = new Map([
    [guest_1,()=>{func1()}],
    [guest_2,()=>{func2()}],
])

let actions = mapSet.get(`${identity}_${status}`)
actions.call(this)


// reduce实现下面功能，多用于各种分类/统计
// 数组扁平化：const arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]]
    function Flat(arr=[]){
        return arr.reduce((cum,item) => (
            cum.concat(Array.isArray(item) ? Flat(item): item)
        ),[])
    }
    
// 数组去重：const arr = [2, 1, 0, 3, 2, 1, 2],这里不能用push，因为push返回的是值
    function Unique(arr=[]){
        return arr.reduce((cum,item) => {
            return cum.includes(item) ? cum : [...cum,item]
        },[])
    }


// 数组成员个数统计：const arr = [0, 1, 1, 2, 2, 2],
// 必须要返回cum，如果处理语句没有返回，需要处理逻辑,cum,这里返回的是cum[item]，不是cum本身，所以要加,cum
    function Count(arr=[]){
        return arr.reduce((cum,item)=>{
            return cum[item]=(cum[item] || 0)+1,cum
        },{})
    }

// 数组成员位置记录：const  arr = [2, 1, 5, 4, 2, 1, 6, 6, 7]
    function Postion(arr=[],pos){
        return arr.reduce((cum,item,index)=>{
            return item === pos && cum.push(index),cum
        },[])
    }


// URL参数反序列化  const url = https://www.baidu.com?age=25&name=TYJ
    function ParseUrl(url=''){
        let params = url.split('?')[1].split('&')
        return params.reduce((cum,item) => {
            let items = item.split('=')
            return cum[item[0]]=items[1],cum
        },{})
    }


    

