"use strict";
/*
 * doudou.js 
 * version: V1.1
 * update date: 2016.02.23
 * author: qi.li5
 */
(function(window) {
  window.doudou = window.doudou || {};

  /*
   * 退出兜兜轻应用
   */
  doudou.exitLightApp = function() {
    Cordova.exec(null, null, "ExtendApp", "ExitLightApp", []);
  };

  /* 
   * 获取兜兜登录账号信息
   *
   * OUTPUT
   * _callback(res<json object>)
   * res = 
   * {
   *   "account" : "zhang.san",
   *   "name" : "张三",
   *   "number" : "1000123456"
   * }
   */
  doudou.getLoginInfo = function(_callback) {
    Cordova.exec(_callback, null, "Page", "getLoginInfo", []);
  };

  /*
   * 获取兜兜头像图片文件Base64字符串，后缀为png
   * [INPUT]
   * _account<string>: 域账号或员工编号
   * _accountType<string>:标识_account的类别。
   *   枚举值(2种)："account"-域账号类别；"number"-员工编号类别；
   * [OUTPUT]
   * callback(res<json object>)
   * res={
   *   "account" : "域账号/员工编号",
   *   "Base64String" : "Base64字符串" // 没有头像为空串
   * }
   */
  doudou.getAvatarBase64 = function(_account, _accountType, _callback) {
    _account = _account || "";
    _accountType = _accountType || "account";
    if (_account.length > 0) {
      if (_accountType.length > 0) {
        Cordova.exec(_callback, null, "Page", "getAvatarBase64", [_account, _accountType]);
      }
    }
  };

  /*
   * 弹出个人信息原生界面
   *
   * INPUT
   * _account: 用户账号
   */
  doudou.showPersonalInfoPanel = function(_account) {
    Cordova.exec(null, null, "Doudou", "showPersonalInfoPanel", [_account]);
  };

  /*
   * 获取当前轻应用信息
   *
   * OUTPUT
   * res<json object>=
   * {
   *   "lightAppID":"XX-XXX-XX",// 当前轻应用ID
   *   "lightAppVersionNo":"1.2.1.8" // 当前轻应用版本号
   * }
   */
  doudou.getLightAppInfo = function(_callback) {
    Cordova.exec(_callback, null, "Doudou", "getLightAppInfo", []);
  };

})(window);
