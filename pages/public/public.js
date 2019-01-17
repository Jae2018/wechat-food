// pages/public/public.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      title: "保存",
      content: "仅保存不发布",
        check: false
      },
      {
        title: "发布",
        content: "所有人可见",
        check: false
      },
      {
        title: "发布并发送给指定的会员",
        content: "所有人及指定会员可见",
        check: false
      },
      {
        title: "仅发给指定会员",
        content: "仅指定会员可见",
        check: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  checkchange(e){

  },

  handleClick(e){
    wx.navigateBack({
      
    })
  }
})