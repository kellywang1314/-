// XMLHttpRequest 2

function ajax(url, method, async, headers, data) {
    let xhr = new XMLHttpRequest()
    return new Promise((resolve, reject) => {
        xhr.open(method, url, async)
        for (let i in headers) {
            xhr.setRequestHeader(i, headers[i])
        }
        xhr.onloadend = () => {
            if(xhr.status >= 200 && xhr.status<300 || xhr.status === 304){
                resolve(xhr)
            }else{
                reject({
                    error: 'status_error',
                    xhr:xhr
                })
            }
        }
        xhr.send(data)
    })
}

