// 简单的模版字符串实现
{/* <script type="template" id="template">
 <h2>
  <a href="{{href}}" rel="external nofollow" >
   {{title}}
  </a>
 </h2>
 <img src="{{imgSrc}}" alt="{{title}}">
</script> */}

// 将模板和数据作为参数，通过数据里所有的项将值替换到模板的标签上（注意不是遍历模板标签，因为标签可能不在数据里存在）。
function attachTemplateToData(template, data) {
    let len = data.length,
        fragment = ''
    // 遍历数据集合里的每一个项，做相应的替换
    function replace(obj) {
        let t, key, reg
        //遍历该数据项下所有的属性，将该属性作为key值来查找标签，然后替换
        for (key in obj) {
            reg = new RegExp('{{' + key + '}}', 'ig')
            t = (t || template).replace(reg, obj[key])
        }
        return t
    }
    for (let i = 0; i < len; i++) {
        fragment += replace(data[i])
    }
    return fragment
}


// 封装一个ajax请求库实现get和post方法
function ajaxMise(method,url,async,params,headers){
    let xhr = new XMLHttpRequest()
    return new Promise((resolve,reject) => {
        xhr.open(method,url,async)
        for(let [key,value] of Object.entries(headers)){
            xhr.setRequestHeader(key,value)
        }
        xhr.onloadend = function(res){
            if(xhr.status>200 && xhr.status<300 ||xhr.status===304){
                resolve(res)
            }else{
                reject({
                    error:''
                })
            }
        }
        xhr.send(params)
    })
}

