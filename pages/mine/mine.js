// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '../../images/phone.png',
    url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547529567905&di=d7965180f52feb893b88a0f1a01ed1cf&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012c8557dabc710000012e7e43c512.jpg%401280w_1l_2o_100sh.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  toorder:function(){
    wx.navigateTo({
      url: '../order-list/order-list',
    })
  },

  tolead: function () {
    wx.navigateTo({
      url: '../lead-list/lead-list',
    })
  },

  toalt: function () {
    wx.navigateTo({
      url: '../alt-list/alt-list',
    })
  },

  toaddress: function () {
    wx.navigateTo({
      url: '../addr-list/addr-list',
    })
  },

  tobelead: function () {
    wx.navigateTo({
      url: '../be-lead/be-lead',
    })
  }
})