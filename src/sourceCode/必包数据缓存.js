var a = (function() {
    var _cache = {};
    return {
        doSometing: function (name) {
            if (name in cache) {
                var data = _cache[name];//获取缓存数据
                doSometingByData(data);
            }else {
                _cache[name] = doSometingToGetData(name);
            }
        },
        setCache: function (name) {
            _cache[name] = doSometingToGetData(name);
        },
        getCache: function (name) {
            return _cache[name];
        }
         
    };
})();
 
function doSometingToGetData () {
    //可以在这里向后台取数据，也可以是其他操作，目的就是获取你需要缓存的数据并返回
    return data;
}

var c = function () {
    a.setCache('daihere');
    var data = a.getCache('daihere');
}