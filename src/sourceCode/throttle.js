// throttle 节流

 function throttle(func, delay) {
    let timer = null
    return function() {
        let context = this
        let args = arguments
        if (!timer) {
            timer = setTimeout(function() {
                func.apply(context, args)
                timer = null
            }, delay)
        }
    }
}

// 防抖
function debounce(fn, wait) {
    var timeout = null
    return function() {
        if(timeout !== null){
             clearTimeout(timeout)
        }
        timeout = setTimeout(fn, wait)
    }
}

/* debounce 的问题在于它“太有耐心了”。试想，如果用户的操作十分频繁——他每次都不等 debounce 设置的 
delay 时间结束就进行下一次操作，于是每次 debounce 都为该用户重新生成定时器，回调函数被延迟了不计其数次。
频繁的延迟会导致用户迟迟得不到响应，用户同样会产生“这个页面卡死了”的观感。
为了避免弄巧成拙，我们需要借力 throttle 的思想，打造一个“有底线”的 debounce——等你可以，
但我有我的原则：delay 时间内，我可以为你重新生成定时器；但只要delay的时间到了，我必须要给用户一个响应。
这个 throttle 与 debounce “合体”思路，已经被很多成熟的前端库应用到了它们的加强版 
throttle 函数的实现中： */


// fn是我们需要包装的事件回调, delay是时间间隔的阈值
function throttle(fn, delay) {
    // last为上一次触发回调的时间, timer是定时器
    let last = 0, timer = null
    // 将throttle处理结果当作函数返回
    return function () { 
      // 保留调用时的this上下文
      let context = this
      // 保留调用时传入的参数
      let args = arguments
      // 记录本次触发回调的时间
      let now = +new Date()
      
      // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
      if (now - last < delay) {
      // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
         clearTimeout(timer)
         timer = setTimeout(function () {
            last = now
            fn.apply(context, args)
          }, delay)
      } else {
          // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
          last = now
          fn.apply(context, args)
      }
    }
  }
  

function handle() {
    console.log(Math.random())
}
window.addEventListener('scroll', throttle(handle, 1000))