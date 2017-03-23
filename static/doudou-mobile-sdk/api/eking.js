;
/**
 * 版本号 1.1
 */
(function(window) {
  var passWordEncode = "";

  window.eking = window.eking || {};

  window.eking.page = window.eking.page || {};

  //页面dom结构完成后的事件
  eking.page.onReady = function() {}

  // cordova加载完成后执行的事件
  eking.page.onLoad = function() {}

  //页面遇到脚本错误时候的事件
  eking.page.onError = function(msg, url, line) {
    alert("Error:" + msg + " ; url: " + url + " ; line: " + line);
  }

  //Dom结构加载完成
  window.onload = function() {
    //页面报错时候执行
    window.onerror = function(msg, url, line) {
      eking.page.onError(msg, url, line);
    }

    //dom结构加载完成执行
    eking.page.onReady();
  };

  //页面完整加载完成：onload的时候获取相关属性值
  window.onload = function() {
    // 页面初始化的时候先把这些常用数据拿到
    document.addEventListener("deviceready", function() {
      //声明页面事件
      eking.page.onLoad();
    }, false);
  }();

  /*======================== Page =======================================*/
  /**
   *  页面切换
   * @param  {[type]} url                      [切换页面的url]
   * @param  {[type]} params                   [页面传递的参数]
   * @param  {[type]} slideType                [页面切换的方向]
   * @param  [boolean] ifPreLoad               false-先切换再加载页面，可能有闪白；
                                               true -先加载再切换页面，可能有延迟；
   */
  eking.loadUrl = function(url, params, slideType, ifPreLoad) {
    if (typeof(url) == "undefined") {
      alert("url is necessary!");
      return;
    }
    params = params || {};
    slideType = slideType || "right";
    // if (url.indexOf('selectUserList.html')>0) {
    //   slideType = "bottom";
    // }
    if (url.startWith("http://") || url.startWith("https://") || url.startWith(
        "file://") || url.startWith("/")) {
      //to do
    } else {
      // 处理相对路径
      var selfUrl = window.location.href;
      var lio = selfUrl.lastIndexOf("/");
      url = selfUrl.substring(0, lio) + "/" + url;
    }

    // ifPreLoad默认值为true：先加载再切换页面
    if (typeof(ifPreLoad) == "undefined") {
      ifPreLoad = true;
    }

    Cordova.exec(null, null, "Page", "loadUrl", [url, params, slideType, ifPreLoad]);
    // 停顿500毫秒，防止连击
    setTimeout('', 500);
  }

  //返回上个页面，返回的时候可以在上个页面执行相关逻辑
  // jumpPage(int): 跨越页面个数，0为只跳转到上一个页面，1为跳转到上上个页面，以此类推
  eking.back = function(callBackJs, jumpPage) {
    // 如果第一个参数为数字，则设置为回调页面个数
    if (typeof callBackJs == "number") {
      jumpPage = callBackJs;
      callBackJs = "";
    }
    if (typeof callBackJs == "undefined") {
      callBackJs = "";
    }
    if (typeof jumpPage == "undefined") {
      jumpPage = 0;
    }
    if (typeof callBackJs === "function") {
      callBackJs = "(" + callBackJs.toString() + ")()";
    }
    Cordova.exec(null, null, "Page", "back", [callBackJs, jumpPage]);
  }

  /**
   *  获取页面传递的参数
   * @param  {[type]}  url                     [切换页面的url]
   * @param  {[type]} params                   [页面传递的参数]
   * @param  {[type]} slideType                [页面切换的方向]
   */
  eking.getPageParams = function(callback) {
    var success = function(result) {
      callback(eking.utils.toJSON(result));
    }
    Cordova.exec(success, null, "Page", "getPageParams", []);
  }

  /* ===========================HnaInnerBrowser=================================== */
  /*
   * _successCallback   
   * _errorCallback     
   * _url{string}  外链链接,必须是完整URL串
   * _windowHnaObj{json object}  window浏览器对象
   * _loadType{string}  加载动画类型:
   *                        right: 从右侧滑入
   *                        bottom: 从底部滑入
   *                        center: 从中间出现
   */
  eking.openInnerBrowser = function(_successCallback, _errorCallback, _url, _windowHnaObj, _loadType) {
    _url = _url || "";
    _windowHnaObj = _windowHnaObj || {};
    _loadType = _loadType || "center";
    Cordova.exec(_successCallback, _errorCallback, "HnaInnerBrowser", "open", [_loadType, _url, _windowHnaObj]);
  };



  /*============================ ExtendApp ==============================*/
  // 显示提示信息
  eking.hint = function(message, position) {
    message = message || "";
    // hint.show(message);
    position = position || "bottom";
    Cordova.exec(null, null, "ExtendApp", "hint", [message, position]);
  }

  //保存运行时变量
  eking.setRuntimeVariable = function(key, value) {
    key = key || "";
    value = value || "";
    Cordova.exec(function(res) {
      Cordova.exec(null, null, "ExtendApp", "setRuntimeVariable", [res.lightAppID + key, value]);
    }, null, "Doudou", "getLightAppInfo", []);
  }

  // 读取运行时变量
  eking.getRuntimeVariable = function(key, callback) {
    key = key || "";
    Cordova.exec(function(res) {
      Cordova.exec(callback, null, "ExtendApp", "getRuntimeVariable", [res.lightAppID + key]);
    }, null, "Doudou", "getLightAppInfo", []);
  }

  // 根据key移除某个运行时变量
  eking.removeRuntimeVariable = function(key) {
    key = key || "";
    Cordova.exec(function(res) {
      Cordova.exec(null, null, "ExtendApp", "removeRuntimeVariable", [res.lightAppID + key]);
    }, null, "Doudou", "getLightAppInfo", []);
  }

  //保存持久变量
  eking.setPersistentVariable = function(key, value) {
    key = key || "";
    value = value || "";
    Cordova.exec(function(res) {
      Cordova.exec(null, null, "ExtendApp", "setPersistentVariable", [res.lightAppID + key, value]);
    }, null, "Doudou", "getLightAppInfo", []);
  }

  // 读取持久变量
  eking.getPersistentVariable = function(key, callback) {
    key = key || "";
    Cordova.exec(function(res) {
      Cordova.exec(callback, null, "ExtendApp", "getPersistentVariable", [res.lightAppID + key]);
    }, null, "Doudou", "getLightAppInfo", []);
  }

  // 根据key移除某个持久变量
  eking.removePersistentVariable = function(key) {
    key = key || "";
    Cordova.exec(function(res) {
      Cordova.exec(null, null, "ExtendApp", "removePersistentVariable", [res.lightAppID + key]);
    }, null, "Doudou", "getLightAppInfo", []);
  }

  // 对话框
  eking.getSelect = function(jsonString, success) {
    jsonString = jsonString || "";
    Cordova.exec(success, null, "ExtendApp", "getSelect", ['{"Select":[' + jsonString + ']}']);
  }

  // 获取app相关信息:id,versionCode
  eking.getAppInfo = function(success) {
    Cordova.exec(success, null, "ExtendApp", "getInfo", []);
  }

  /**
   * 获取设备相关信息
   * 
   * OUTPUT
   * _callback(res<json object>)
   * res={
   *   "id":"设备ID"
   * }
   */
  eking.getDeviceInfo = function(_callback) {
    Cordova.exec(_callback, null, "ExtendApp", "getDeviceInfo", []);
  };

  // 判断文件是否存在
  eking.ifFileExist = function(fileName, type, callback) {
    fileName = fileName || "";
    type = type || "";
    Cordova.exec(callback, null, "ExtendApp", "ifFileExist", [fileName, type]);
  }

  // 打开文件
  eking.openFile = function(fileName, type, title, titleColor, headerColor) {
    fileName = fileName || "";
    type = type || "";
    title = title || "";
    titleColor = titleColor || "";
    headerColor = headerColor || "";
    //alert(fileName + type + title + titleColor + headerColor);
    Cordova.exec(null, null, "ExtendApp", "openFile", [fileName, type, title, titleColor, headerColor]);
  }

  // 保存文件
  eking.saveFile = function(fileName, type, base64String, callback) {
    fileName = fileName || "";
    type = type || "";
    base64String = base64String || "";
    Cordova.exec(callback, null, "ExtendApp", "saveFile", [fileName, type, base64String]);
  }

  // 保存文件
  eking.removeFile = function(fileName, type, callback) {
    fileName = fileName || "";
    type = type || "";
    Cordova.exec(callback, null, "ExtendApp", "removeFile", [fileName, type]);
  }

  // 保存文件
  eking.clearFiles = function(callback) {
    Cordova.exec(callback, null, "ExtendApp", "clearFiles", []);
  }

  // 扫描二维码
  eking.QRCodeScan = function(callback) {
    Cordova.exec(callback, null, "ExtendApp", "QRCodeScan", []);
  }

  /*============================ PhonePlugin ==============================*/
  // 短信
  eking.sendSms = function(phoneNum, message) {
    Cordova.exec(null, null, "PhonePlugin", "sms", [phoneNum, message]);
  }

  // 电话
  eking.dial = function(phoneNum) {
    Cordova.exec(null, null, "PhonePlugin", "dial", [phoneNum]);
  }

  // 获取定位信息
  eking.getLocation = function(_success, _ifGetCityInfo) {
    _success = _success || function() {};
    _ifGetCityInfo = !!_ifGetCityInfo;
    var opt = {
      "ifGetCityInfo": _ifGetCityInfo
    };
    Cordova.exec(_success, function(error) {
      return _success(error);
    }, "PhonePlugin", "getLocation", [opt]);
  }

  /*============================ DateTimePicker ==============================*/

  //日期选择
  eking.selectDate = function(success, defaultDate) {
    var toDate = new Date();
    var year = toDate.getFullYear();
    var month = toDate.getMonth() + 1;
    var day = toDate.getDate();
    var defaultDate = defaultDate || year + "-" + month + "-" + day;
    Cordova.exec(success, null, "DateTimePicker", "selectDate", [defaultDate]);
  }

  //时间选择
  eking.selectTime = function(success, defaultTime) {
    var toDate = new Date();
    var hour = toDate.getHours();
    var minute = toDate.getMinutes();
    var defaultTime = defaultTime || hour + ":" + minute;
    Cordova.exec(success, null, "DateTimePicker", "selectTime", [defaultTime]);
  }

  /*============================ HNANetWorkPlugin ==============================*/
  // 调用微平台接口
  /*
    请求XML格式：
    <xmlParameter>
      <OA_Route>Call</OA_Route>
      <OA_Parm>
        <ParmBM>{0}</ParmBM>
      </OA_Parm>
    </xmlParameter>

    响应XML格式：
    <returnData>
      业务接口返回
    </returnData>
  */
  var invokFlag = 1;
  eking.invoke = function(_successCallback, _errorCallback, _RTNo, _Params) {
    _RTNo = _RTNo || "";
    _Params = _Params || "";
    Cordova.exec(function(res) {
      // alert(res);
      _successCallback(res);
    }, _errorCallback, "HNANetWorkPlugin", "invoke", [_RTNo, _Params]);
  };

  // 跨域调用webservice
  eking.invokeWebService = function(url, success, fail) {
    Cordova.exec(success, fail, "HNANetWorkPlugin", "getWebService", [url]);
  }

  /* ===========================utils=================================== */
  window.eking.utils = window.utils || {};
  //将json字符串转成json对象
  eking.utils.toJSON = function(param) {
    return typeof(param) == "string" ? eval('(' + param + ')') : param;
  }

  //判断是否在PC上
  eking.utils.isPC = function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  /**
   * 获取平台类型：
   *   Android: 1
   *   iOS: 2
   */
  eking.utils.getPlatformType = function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "iPad", "iPod", "SymbianOS", "Windows Phone");
    if (userAgentInfo.indexOf(Agents[0]) > 0) {
      // Android
      return 1;
    } else if (userAgentInfo.indexOf(Agents[1]) > 0 || userAgentInfo.indexOf(Agents[2]) > 0 || userAgentInfo.indexOf(Agents[3]) > 0) {
      // iOS
      return 2;
    }
  }

  String.prototype.startWith = function(str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
  }

  /* ========================= navigator ============================== */
  // 弹出提示框
  eking.alert = function(title, message, buttonName, callback) {
    callback = callback || function(res) {};
    title = title || "提示";
    title = title.toString();
    buttonName = buttonName || "确定";
    buttonName = buttonName.toString();
    if (typeof(message) == "object") {
      message = JSON.stringify(message);
    }
    message = message || "";
    message = message.toString();

    navigator.notification.alert(message, callback, title, buttonName);
  }

  // 弹出确认框
  eking.confirm = function(title, message, buttonNames, callback) {
    callback = callback || function(res) {};
    title = title || "提示";
    buttonNames = buttonNames || ['确认', '取消'];
    navigator.notification.confirm(message, callback, title, buttonNames);
  }

  //拍照
  eking.getFromCamera = function(successCallback, errorCallback) {
    navigator.camera.getPicture(successCallback, errorCallback, {
      quality: 50,
      destinationType: navigator.camera.DestinationType.DATA_URL,
      sourceType: navigator.camera.PictureSourceType.CAMERA,
      targetWidth: 800,
      targetHeight: 800,
      encodingType: 1
    });
  }

  //从相册/相片库获取
  eking.getFromPhotoLibrary = function(successCallback, errorCallback) {
    navigator.camera.getPicture(successCallback, errorCallback, {
      quality: 50,
      destinationType: navigator.camera.DestinationType.DATA_URL,
      sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
  }
})(window);
