;
/*
 * Web调试插件
 * version: V1.0
 * author: qi.li5
 * 
 * 此文件专为Web开发所用，重写了一些eking API
 * 便于在PC浏览器进行开发调试
 */
(function(window) {
  /*
   * Web端跳过cordova的deviceready事件
   */
  eking.deviceready = function(_callback) {
    return _callback();
  }

  /*
   * 直接调用业务WebService接口
   */
  eking.invoke = function(_successCallback, _errorCallback, _RTNo, _Params) {
    // 接口转发服务地址
    var transferUrl = 'http://10.70.73.79:81/LightAppTrans/WebServiceTransfer/Transefer/TransferService.asmx';
    var requestXml = '<?xml version="1.0" encoding="utf-8"?>';
    requestXml += '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">';
    requestXml += '<soap:Body>';
    requestXml += '<TransferInvoke xmlns="http://tempuri.org/">';
    requestXml += '<WsUrl>{WsUrl}</WsUrl>';
    requestXml += '<MethodName>{MethodName}</MethodName>';
    requestXml += '<RequestXml>{RequestXml}</RequestXml>';
    requestXml += '</TransferInvoke>';
    requestXml += '</soap:Body>';
    requestXml += '</soap:Envelope>';

    // 获取业务系统WebService接口地址
    var targetWsUrl = "http://10.70.73.79/test/api/HNAGeneral.asmx";
    // 获取业务接口方法名
    var targetMethodName = "AgentList";

    _Params = _Params.replace(/</g, "&lt;");
    _Params = _Params.replace(/>/g, "&gt;");

    requestXml = requestXml.replace('{WsUrl}', targetWsUrl);
    requestXml = requestXml.replace('{MethodName}', targetMethodName);
    requestXml = requestXml.replace('{RequestXml}', _Params);
    var xmlhttp = null;
    if (window.XMLHttpRequest) { // code for all new browsers
      xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // code for IE5 and IE6
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
      // 调用Web Service
      xmlhttp.onreadystatechange = state_Change; // 回调句柄
      xmlhttp.open("POST", transferUrl, true);
      xmlhttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
      // xmlhttp.setRequestHeader("Content-Length", requestXml.length);
      xmlhttp.send(requestXml);
    } else {
      return _errorCallback("Your browser does not support XMLHTTP.");
    }

    function state_Change() {
      if (xmlhttp.readyState == 4) { // 4 = "loaded"
        if (xmlhttp.status == 200) { // 200 = OK
          var response = xmlhttp.responseText;
          response = response.replace(/&lt;/g, "<");
          response = response.replace(/&gt;/g, ">");
          // 调用成功，返回接口响应XML串
          return _successCallback(response);
        } else {
          return _errorCallback("Problem retrieving XML data");
        }
      }
    }
  }
})(window);
