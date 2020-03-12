// 1. 上面的jsonp  client+server

/* 
   2. cors(跨域资源共享) client+server 简单请求 + 非简单请求

对于简单请求，浏览器在请求加上一个origin，server根据这个值判断是否
同意请求（Access-Control-Allow-Origin）

非简单请求：比如请求方法是PUT或DELETE，
或者Content-Type字段的类型是application/json，
非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。
预检请求是options origin/method

*/
//  3.nginx代理跨域/nginx反向代理接口跨域

// 4. postMessage跨域