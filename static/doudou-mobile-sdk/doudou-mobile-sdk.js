/*
 * doudou-mobile-sdk.js
 *
 * 核心文件加载管理
 */
(function() {

  // 所有引入路径均为www/目录之后的路径，如绝对路径/www/js/a.js 写为：js/a.js
  var injectScript = function(url, onload, onerror) {
    var script = document.createElement("script");
    // onload fires even when script fails loads with an error.
    onload = onload || function() {};
    onerror = onerror || onload;
    script.onload = onload;
    // onerror fires for malformed URLs.
    script.onerror = onerror;
    script.src = url;
    document.head.appendChild(script);
  };

  // 寻找本文件在当前页面的引用路径前缀
  var getSdkPathPrefix = function() {
    var path = "";
    var term = "doudou-mobile-sdk.js";
    var scripts = document.getElementsByTagName('script');
    for (var n = scripts.length - 1; n > -1; n--) {
      var src = scripts[n].src.replace(/\?.*$/, ''); // Strip any query param (CB-6007).
      if (src.indexOf(term) == (src.length - term.length)) {
        path = src.substring(0, src.length - term.length);
        break;
      }
    }
    return path;
  };

  var ua = navigator.userAgent.toLowerCase()
  var isiOS = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1;
  var sdkPathPrefix = getSdkPathPrefix(); // sdk路径前缀
  var cordovaPath = "";

  var nativeCorodvaPathKey = 'NATIVE_CORDOVA_PATH';
  if (!window.NativeCordovaPath) {
    var nativeCorodvaPath = window.sessionStorage.getItem(nativeCorodvaPathKey);
    if (!!nativeCorodvaPath && nativeCorodvaPath.length > 0) {
      window.NativeCordovaPath = nativeCorodvaPath;
    }
  }

  if (!!window.NativeCordovaPath) {
    window.sessionStorage.setItem(nativeCorodvaPathKey, window.NativeCordovaPath);
    if (isiOS) {
      var localPagePath = window.location.href;
      if (localPagePath.indexOf('http') === 0) {
        var cordovaRemotePath = "http://doudou.haihangyun.com/systempages/hybird-sdk/mobile/core/ios/cordova-ios.js";
        window.NativeCordovaPath = cordovaRemotePath;
        cordovaPath = window.NativeCordovaPath;
      } else {
        cordovaPath = window.NativeCordovaPath;
      }
    } else {
      cordovaPath = window.NativeCordovaPath;
    }
  } else {
    cordovaPath = sdkPathPrefix + "cordova/cordova-android.js";
    if (isiOS) {
      cordovaPath = sdkPathPrefix + "cordova/cordova-ios.js";
    }
  }
  document.write("<script src='" + cordovaPath + "'></script>");
  document.write("<script src='" + sdkPathPrefix + "api/eking.js" + "'></script>");
  document.write("<script src='" + sdkPathPrefix + "api/doudou.js" + "'></script>");
  document.write("<script src='" + sdkPathPrefix + "api/cordovaHttp.js" + "'></script>");
})();
