//冒泡排序
export const Bubble = (arr) => {
    for(let i=0; i<arr.length; i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr 
}

//快排
export const Quick = (arr) => {
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

//二分查找
export const Binsearch = (arr,low,high,target) => {
    if(low >high) return -1
    let pos = Math.floor((low+high)/2)
    if(target>arr[pos]){
        return Binsearch(arr,pos+1,high,target)
    }else if(target<arr[pos]){
        return Binsearch(arr,low+1,pos,target)
    }else{
        return pos
    }
}