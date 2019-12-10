// ajax(XMLHttpRequest)相关知识点

//1. 兼容全平台的XMLHttpRequest
function getXMLHttpRequest () {
    let xhr = null
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    }else if(window.ActiveXObject){
        try{
            xhr = new ActiveXObject('Msxml2.XMLHTTP')
        }catch(e){
            try{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e){
                console.log(e,'浏览器不支持ajax')
            } 
        }
    }
}

//封装一个ajax请求函数
export const ajaxMise = (url, method, data, async, type) =>{
    var xhr = getXMLHttpRequest()
    return new Promise(function (resolve, reject) {
        xhr.open(method, url, async)
        type ? xhr.setRequestHeader('Content-Type',type) : ''
        //xhr.responseType = 'blob'/'json'/arraybuffer/text
        xhr.onloadend = function () {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
                resolve(xhr)
            } else
                reject({
                    errorType: 'status_error',
                    xhr: xhr
                })
        }
        xhr.send(data)
    })
}
   

