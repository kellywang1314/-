// 1. 上面的jsonp  client+server

/* 
   2. cors(跨域资源共享) client+server 简单请求 + 非简单请求

对于简单请求，浏览器在请求加上一个origin，server根据这个值判断是否
同意请求（Access-Control-Allow-Origin）

非简单请求：比如请求方法是PUT或DELETE，
或者Content-Type字段的类型是application/json，
非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。
预检请求是options origin/method

怎么避免options请求呢？
需要后端同学配合，在设置OPTIONS跨域响应headers的时候，添加 Access-Control-Max-Age ，
这个参数的意思是把OPTIONS响应缓存起来，在指定的时间内，不会再次发起OPTIONS预请求，这样只有在第一次请求的时候会有OPTIONS，之后浏览器会从缓存里读取响应，也就不会再发送OPTIONS请求了。

*/
//  3.nginx代理跨域/nginx反向代理接口跨域

// 4. postMessage跨域

