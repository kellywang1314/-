//  手写promise.all: 并行执行，结果依次返回

function PromiseAll(promises){
    let results = []
    let count = 0, len = promises.length
    return new Promise((resolve,reject) => {
       for(let i of promises){
           Promise.resolve(i).then((res) =>{
                count++
                results[count] = res
                if(len === count){
                    return resolve(results)
                }
           },(err) => {return reject(err)})
       }
    })
}


let promises = [new Promise((resolve) => {
    setTimeout(() => {
        resolve(1)
    },4000)
    // resolve(1)
}),new Promise((resolve) => {
    setTimeout(() => {
        resolve(2)
    },3000)
    // resolve(2)
})]
Promise.all(promises)