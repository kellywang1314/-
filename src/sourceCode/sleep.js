// promise实现
// 缺点：当我们需要在某过程中需要停止执行，还必须得层层判断后跳出，非常麻烦
function sleep(time) {
    return new Promise(resolve => setTimeout(resolve,time))
}
