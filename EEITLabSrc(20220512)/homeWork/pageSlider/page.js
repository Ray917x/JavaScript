window.onload = function () {
    var slider = document.getElementById('slider');
    var slider_main = document.getElementById('slider_main');
    var allboxes = slider_main.children;
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
    var slider_index = document.getElementById('slider_index');
    var iNow = 0;
    for (var i = 0; i < allboxes.length; i++) {
        var span = document.createElement('span');
        if (i === 0) {
            span.classname = 'slider_index_icon current';
        } else {
            span.className = 'slider_index_icon'
        }
        span.innerHTML = i + 1;
        slider_index.appendChild(span);
    }
    var scroll_w = parseInt(getStyle(slider, 'width'));
    for (var j = 1; j < allboxes.length; j++) {
        allboxes[j].style.left = scroll_w + 'px';
    }
    next.onclick = function () {
        startAnimation(allboxes[iNow], {
            "left": -scroll_w
        })
        iNow++;
        if (iNow >= allboxes.length) {
            iNow = 0;
        }
        allboxes[iNow].style.left = scroll_w + 'px';
        startAnimation(allboxes[iNow], {
            "left": 0
        })
        changeIndex();
    }
    function changeIndex(index) {

        for (var i = 0; i < slider_index.children.length; i++) { slider_index.children[i].className = 'slider_index_icon'; }
        slider_index.children[iNow], className = 'slider_index_icon current';
    }
}
