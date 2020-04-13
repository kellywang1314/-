/* 用 Promise.race来实现，先并发请求3个图片资源，这样可以得到 3 个 Promise实例，
组成一个数组promises ，然后不断的调用 Promise.race 来返回最快改变状态的 Promise，
然后从数组（promises ）中删掉这个 Promise 对象实例，
再加入一个新的 Promise实例，直到全部的 url 被取完。 */


//省略代码

function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function () {
            console.log('一张图片加载完成');
            resolve();
        }
        img.onerror = reject
        img.src = url
    })
};

function limitLoad(urls, handler, limit) {
    // 对数组做一个拷贝
    const sequence = [].concat(urls)
    let promises = [];

    //并发请求到最大数
    promises = sequence.splice(0, limit).map((url, index) => {
        // 这里返回的 index 是任务在 promises 的脚标，
        //用于在 Promise.race 之后找到完成的任务脚标
        return handler(url).then(() => {
            return index
        });
    });

    (async function loop() {
        let p = Promise.race(promises);
        for (let i = 0; i < sequence.length; i++) {
            p = p.then((res) => {
                promises[res] = handler(sequence[i]).then(() => {
                    return res
                });
                return Promise.race(promises)
            })
        }
    })()
}
limitLoad(urls, loadImg, 3)
