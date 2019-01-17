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
    userInfo: {},
    hasUserInfo: false,
    tabs: [{
        id: 1,
        name: "人气TOP"
      },
      {
        id: 2,
        name: "瘦身减脂"
      },
      {
        id: 3,
        name: "低卡高能"
      },
      {
        id: 4,
        name: "狂吃不胖"
      }
    ],
    list: [{
        id: 1,
        url: "https://img.xiaopiu.com/userImages/img419216857093218.png",
        name: "三文鱼烧饼",
        author: "张旭",
        praise: 100,
        price: "20.0",
        number: 1
      },
      {
        id: 1,
        url: "https://img.xiaopiu.com/userImages/img4195168570dd980.jpg",
        name: "三文鱼烧饼",
        author: "张旭",
        praise: 100,
        price: "20.0",
        number: 1
      },
      {
        id: 1,
        url: "https://img.xiaopiu.com/userImages/img420116857108900.jpeg",
        name: "三文鱼烧饼",
        author: "张旭",
        praise: 100,
        price: "20.0",
        number: 1
      }
    ]
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
  //类型点击回调
  tabselect: function(e) {
    console.log(e)
  },
  //套餐点击回调
  mealselect: function(e) {
    console.log(e.currentTarget.dataset)
  }
})