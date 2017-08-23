
// submit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showpop: true,
    phoneNumber: 13534308665,
    winTop: 0,  //  高度
    ideapop: true,  //  扫码弹出层
    addressJson: [],
    list: [],
  },

  /**
   * 隐藏弹出层
   */
  calcelPop: function() {
    var that = this;
    that.setData({
      showpop: true,
    });
  },

  /**
   * 提交订单
   */
  goPay: function () {
    var that = this;
    that.setData({
      
    });
  },

  goSeting: function() {
    wx.navigateTo({
      url: '../address/address',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  callMe: function() {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.phoneNumber,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winTop: (res.windowHeight - 250) / 2,
        });
        console.log()
      },
    });

    

    that.setData({
      addressJson: wx.getStorageSync('addressKey'),
      list: wx.getStorageSync('chonseShop'),
    });

    console.log(that.data.list);

  },

  /**
   * 选择用餐方式
   */
  openChonse: function() {
    var that = this;
    that.setData({
      showpop: false
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
  
  }
})