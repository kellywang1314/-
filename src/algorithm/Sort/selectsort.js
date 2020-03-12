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
