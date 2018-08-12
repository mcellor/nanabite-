// pages/auth/auth.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // hasUserInfos: !!wx.getStorageSync("userinfo")
    isShowDetail: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!!wx.getStorageSync("userinfo")) {
      wx.reLaunch({
        url: "/pages/index/index",
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      isShowDetail: false
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo);
    app.setUserinfo(e)
  },

  user_aggre: function () {
    let isShow = this.data.isShowDetail
    if (!isShow) {
      isShow = true
    } else {
      isShow = false
    }
    this.setData({
      isShowDetail: isShow
    })
  }

})