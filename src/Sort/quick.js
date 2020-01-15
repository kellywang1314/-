//快排,注意边界条件，和每次循环要删除的值
module.exports =  Quick = (arr) => {
    if(arr.length<=1) return arr
    let pos = Math.floor(arr.length/2)
    let posvalue = arr.splice(pos,1)[0]
    let low = [],high = []
    for(let i=0; i<arr.length; i++){
        if(arr[i]<posvalue){
            low.push(arr[i])
        }else{
            high.push(arr[i])
        }
    }
    return [...Quick(low),posvalue,...Quick(high)]
}

// 选择排序
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

// 插入排序 
function insertSort(arr){
    let len = arr.length
    let index,insert
    for(let i=0;i<len-1;i++){
        index = i+1
        insert = arr[i+1]
        for(let j=i;j>=0;j--){
            if(insert > arr[j]){
                arr[j+1] =  arr[j]
                index = j
            }
        } 
        arr[index] = insert 
    }
    return arr
}
