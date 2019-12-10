(function(global){
    let id = 0, container = document.getElementsByTagName('head')[0]
    function jsonp(req){
        if(!req||!req.url) return 0
        //参数处理,url拼接
        let scriptNode = document.createElement('script'),
            params = req.params || {},
            url = req.url,
            callback = req.callback,
            fnName = 'jsonp' + id++;
        params['callback'] = fnName
        let para = []
        for (let key in params) {
            para.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
        }
        url = url.indexOf("?") > 0 ? (url + "&") : (url + "?");
        url += para.join("&");
        scriptNode.src = url;
        //传递的是一个匿名的回调函数，要执行的话，暴露为一个全局方法
        global[fnName] = function (ret) {
            callback && callback(ret);
            container.removeChild(scriptNode);
            delete global[fnName];
        }

        // 出错处理
        scriptNode.onerror = function () {
            callback && callback({error:"error"});
            container.removeChild(scriptNode);
            global[fnName] && delete global[fnName];
        }

        scriptNode.type = "text/javascript";
        container.appendChild(scriptNode)
    } 
    global.jsonp = jsonp
})(this)
