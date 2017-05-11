function ready(fn) {
    // 首先判断兼容性是看是ie浏览器还是标准浏览器
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function () {
            alert("我是标准浏览器DOM加载完成后输出的！");
            fn();
        }, false)
    } else if (document.attachEvent) {
        // 页面没有iframe的情况下可以使用onreadystatechange来判断，如果有那么onreadystatechange会等待
        // iframe里面的所有数据加载完后在执行，这种情况下onreadystatechange就失去原本的意义
        document.attachEvent('onreadystatechange', function () {
                if (document.readyState == 'complete') {
                    alert("我是ie浏览器DOM加载完成后输出的！");
                }
                ;
            // 如果是IE且页面不在iframe中时，轮询调用doScroll 方法检测DOM是否加载完毕
                if (document.documentElement.doScroll && typeof window.frameElement === "undefined") {
                    try {
                        document.documentElement.doScroll('left');
                    } catch (error) {
                        return setTimeout(arguments.callee, 20);
                    };
                    alert("我是ie浏览器DOM加载完成后输出的！");
                    fn();
                }
            }
        )

    }
}
