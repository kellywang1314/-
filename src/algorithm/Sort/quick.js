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

