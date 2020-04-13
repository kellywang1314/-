// 选择排序 O(n^2) 不稳定
function selectSort (arr){
    let temp,min
    for(let i=0;i<arr.length;i++){
        temp = arr[i]
        min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

// 数每个元素的比它小的元素的数量
// 输入[8,1,2,2,3]
// 输出[4,0,1,1,3]
// 解释：比8小的有1，2，2，3所以是4
// 比1小的有0个所以是0

function Fuc(arr = []){
    return arr.reduce((cum,item) => {

    },[])
}

let res = []
let arr = [8,1,2,2,3]
arr.map((item,index) => {
    let i = 0
    console.log(arr.splice(index,1))
    console.log(arr)
    arr.splice(index,1).map(inneritem => {
        if(item>inneritem){
            i++
            console.log(i)
        }
    })
    res.push(i)
})
console.log(res)
