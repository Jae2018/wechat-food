// pages/foods/foods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:1,
        url:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4214469316,1231206993&fm=170&s=B37018882E78228AD4BAAD7503009021&w=639&h=424&img.JPEG",
        name:"牛肉南瓜配沙司, 蛋白煎饼",
        content:"asdadasd"
      },
      {
        id:2,
        url:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1197568884,1961301758&fm=170&s=6001D71E59734F908849E46B03003073&w=640&h=437&img.JPEG",
        name:"蛋白煎饼",
        content:"asdasdas"
      },
      {
        id:3,
        url:"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3414123518,2886885999&fm=170&s=95E8FB15422374B4C615116D0300A078&w=640&h=428&img.JPEG",
        name:"高蛋白燕麦",
        content:"dasdas"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      
    });
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

  click(e){
    console.log(e)
    //拿到点击的index下标
    var index = e.currentTarget.dataset.index
    
    //将对象转为string
    var detailBean = JSON.stringify(this.data.list[index-1])
    console.log(detailBean)
    wx.navigateTo({
      url: "../details/details?detailBean=" + detailBean,
    })
  }
})