;
// iOS7+的头部加高处理
(function(window) {
    // 获取文件绝对路径
    // dirAfterWww:在www/之后的路径，如js/jQuery.js
    // function getRelativeDir(dirAfterWww) {
    //     var prefixDir = window.location.href;
    //     var wwwString = "/www/";
    //     var prefixDirIndex = prefixDir.indexOf(wwwString);
    //     var ret = prefixDir.substring(prefixDirIndex + wwwString.length, prefixDir.length);
    //     var rets = ret.split('/');
    //     prefixDir = "";
    //     for (var i = 0; i < (rets.length - 1); i++) {
    //         prefixDir += "../";
    //     }
    //     return prefixDir + dirAfterWww;
    // }

    var ua = navigator.userAgent.toLowerCase();
    var isiOS = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1;
    if (isiOS) {
        var iosHeadCss = "plugin/iosHeader/ios_head.css";
        document.write('<link rel="stylesheet" type="text/css" href=" ./static/iosHeader/ios_head.css " />');

    }
})(window);
