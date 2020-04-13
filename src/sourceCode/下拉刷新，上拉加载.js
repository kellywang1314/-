/* 监听原生touchstart事件，记录其初始位置的值，e.touches[0].pageY；
监听原生touchmove事件，记录并计算当前滑动的位置值与初始位置值的差值，大于0表示向下拉动，并借助CSS3的translateY属性使元素跟随手势向下滑动对应的差值，同时也应设置一个允许滑动的最大值；
监听原生touchend事件，若此时元素滑动达到最大值，则触发callback，同时将translateY重设为0，元素回到初始位置。 */
<p class="refreshText"></p>
<ul id="refreshContainer">
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <li>444</li>
    <li>555</li>
    ...
</ul>
(function(window) {
    var _element = document.getElementById('refreshContainer'),
      _refreshText = document.querySelector('.refreshText'),
      _startPos = 0,
      _transitionHeight = 0;

    _element.addEventListener('touchstart', function(e) {
        console.log('初始位置：', e.touches[0].pageY);
        _startPos = e.touches[0].pageY;
        _element.style.position = 'relative';
        _element.style.transition = 'transform 0s';
    }, false);
    
    _element.addEventListener('touchmove', function(e) {
        console.log('当前位置：', e.touches[0].pageY);
        _transitionHeight = e.touches[0].pageY - _startPos;
        
        if (_transitionHeight > 0 && _transitionHeight < 60) {
            _refreshText.innerText = '下拉刷新';
            _element.style.transform = 'translateY('+_transitionHeight+'px)';

            if (_transitionHeight > 55) {
              _refreshText.innerText = '释放更新';
            }
        }                
    }, false);

    _element.addEventListener('touchend', function(e) {
        _element.style.transition = 'transform 0.5s ease 1s';
        _element.style.transform = 'translateY(0px)';
        _refreshText.innerText = '更新中...';

        // todo...

    }, false);
})(window);


/* 上拉加载更多数据是在页面滚动时触发的动作，一般是页面滚动到底部时触发，也可以选择在滚动到一定位置的时候触发。
以滚动到页面底部为例。实现原理是分别获得当前滚动条的scrollTop值、当前可视范围的高度值clientHeight以及文档的总高度scrollHeight。
当scrollTop和clientHeight的值之和大于等于scrollHeight时，触发callback。 */