// js实现简单的订阅发布模式


var Publish = function(name) {
    this.name = name
    this.subscribers = [] //接受所有的订阅者（每一个元素是函数类型fn的数组）
}

// Publish类的实例对象发布消息的方法
Publish.prototype.deliver = function(news) {
    var publish = this
    this.subscribers.forEach(function(fn) {
        // 把新消息发给一个订阅者
        fn(news, publish)
    })
}

// 具体的一个订阅者去订阅报纸的方法
Function.prototype.subscribe = function(publish) {
    var suber = this //当前订阅者
    // 检查当前这个人是不是已经订阅过了
    var isExists = publish.subscribers.some(function(item) {
        return item === suber
    });

    if (!isExists) {
        publish.subscribers.push(suber);
    }
}

// 取消订阅的方法
Function.prototype.unsubscribe = function(publish) {
    var suber = this
    // filter  返回一个心数组， 
    // 去掉suber
    publish.subscribers = publish.subscribers.filter(function(item) {
        return item !== suber;
    });
}

// 被订阅的对象
var pub1 = new Publish('第一报社');
var pub2 = new Publish('第二报社');

// 定义2个订阅者---订阅者是函数
var sub1 = function(news) {
    console.log(news)
}
var sub2 = function(news) {
    console.log(news)
}
// 执行订阅方法
sub1.subscribe(pub1)
sub2.subscribe(pub2)


setTimeout(() => {
    pub1.deliver('第一报社开始卖报')
},2000)

