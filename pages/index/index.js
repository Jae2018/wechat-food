//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://img.xiaopiu.com/userImages/img41841685704cd18.jpg',
      'https://img.xiaopiu.com/userImages/img418516857053690.jpg',
      'https://img.xiaopiu.com/userImages/img418616857054630.jpg'
    ],
    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547529567905&di=d7965180f52feb893b88a0f1a01ed1cf&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012c8557dabc710000012e7e43c512.jpg%401280w_1l_2o_100sh.jpg",
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    list:[
      {
        id:1,
        name:"早餐"
      },
      {
        id: 2,
        name: "午餐"
      },
      {
        id: 3,
        name: "晚餐"
      },
      {
        id: 4,
        name: "加餐"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../content/content'
    })
  },
  bindViewTap2: function() {
    wx.navigateTo({
      url: '../foods/foods',
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goMaterial: function() {

  },
  goFoods: function() {
    wx.navigateTo({
      url: '../foods/foods',
    })
  },
  catering: function() {
    wx.navigateTo({
      url: '../meal/meal',
    })
  },
  cart: function() {
    wx.switchTab({
      url: '../cart/cart',
    })
  },
  godetail:function(){
    wx.navigateTo({
      url: '../details/details',
    })
  }
})