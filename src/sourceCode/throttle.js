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

function debounce(fn, wait) {
    var timeout = null
    return function() {
        if(timeout !== null){
             clearTimeout(timeout)
        }
        timeout = setTimeout(fn, wait)
    }
}

function handle() {
    console.log(Math.random())
}
window.addEventListener('scroll', throttle(handle, 1000))