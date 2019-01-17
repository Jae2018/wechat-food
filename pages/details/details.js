// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547529567905&di=d7965180f52feb893b88a0f1a01ed1cf&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012c8557dabc710000012e7e43c512.jpg%401280w_1l_2o_100sh.jpg",
    list:[
      {
        id:1,
        name:"鸡蛋",
        weight:"100g",
        p:"张三",
        n:123
      },
      {
        id: 1,
        name: "牛肉",
        weight: "40g",
        p: "李四",
        n: 123
      },
      {
        id: 1,
        name: "生抽",
        weight: "5g",
        p: "王五",
        n: 123
      },
      {
        id: 1,
        name: "盐",
        weight: "3g",
        p: "赵六",
        n: 123
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

  goPay:function(){
    wx.navigateTo({
      url: '../pay/pay',
    })
  },

  gocart:function(){
    wx.switchTab({
      url: '../cart/cart',
    })
  }
})