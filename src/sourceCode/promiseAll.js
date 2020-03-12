//  手写promise.all: 并行执行，结果依次返回

function PromiseAll(promises){
    let results = []
    let count = 0, len = promises.length
    return new Promise((resolve,reject) => {
       for(let i of promises){
           Promise.resolve(val).then((res) =>{
                count++
                result[i] = res
                if(len === count){
                    return resolve(results)
                }
           },(err) => {return reject(err)})
       }
    })
}