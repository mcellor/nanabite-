/********************************************************************
  *                                                                *
  * Apollo&丸子君原创作品，代码仅供技术交流及学习使用                     *
  * 切勿用于商业环境中，如发生任何法律相关问题本人概不负责                  *
  *                                                                *
  * 此项目也是我的一个小程序组件化学习项目                               *
  * 如果你有相关问题想一起探讨的，欢迎加我微信：totorohost 【备注：小独】    *
  *                                                                *
  * 另外如果你有好的项目或者idea，需要找人合作，欢迎call me                *
  *                                                                *
**********************************************************************/

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = {
  attachInfo: function attachInfo() {
    var res = wx.getSystemInfoSync();

    wx.WIN_WIDTH = res.screenWidth;
    wx.WIN_HEIGHT = res.screenHeight;
    wx.IS_IOS = /ios/i.test(res.system);
    wx.IS_ANDROID = /android/i.test(res.system);
    wx.STATUS_BAR_HEIGHT = res.statusBarHeight;
    wx.DEFAULT_HEADER_HEIGHT = 46; // res.screenHeight - res.windowHeight - res.statusBarHeight
    wx.DEFAULT_CONTENT_HEIGHT = res.screenHeight - res.statusBarHeight - wx.DEFAULT_HEADER_HEIGHT;
    wx.IS_APP = true;

    wx.showAlert = function (options) {
      options.showCancel = false;
      wx.showModal(options);
    };

    wx.showConfirm = function (options) {
      wx.showModal(options);
    };
  }
};