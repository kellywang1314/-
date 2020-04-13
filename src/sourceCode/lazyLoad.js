<div class='container'>
    <div class='img_area'>
        <img class='photo' data-src='./img1/img1.jpg' /> 
    </div>
    <div class='img_area'>
        <img class='photo' data-src='./img1/img2.jpg' /> 
    </div>
    <div class='img_area'>
        <img class='photo' data-src='./img1/img3.jpg' /> 
    </div>
    <div class='img_area'>
        <img class='photo' data-src='./img1/img4.jpg' /> 
    </div>
    <div class='img_area'>
        <img class='photo' data-src='./img1/img5.jpg' /> 
    </div>
</div>


// 判断元素是否进入可视区域
function isElementView(element){
    const dis = element.getBoundingClientRect()
    const clientHeight = window.innerHeight
    return dis.top <= clientHeight+100
}

let flag = 0
function checkImgs(){
    const imgs = document.querySelectorAll('.photo')
    for(let i = index; i< imgs.length; i++){
        if(isElementView(imgs[i])){
            loadImg(imgs[i])
            index = i
        }
    }
}
function loadImg(el){
    if(!el.src){
        const source = el.dataset.src
        el.src = source
    }
}
window.onload = checkImgs
window.onscroll = throttle(checkImgs)