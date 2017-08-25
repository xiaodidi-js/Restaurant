// me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aiphone: '0757-800-20',
    domShow: true,
    confirmHeight: 0,
    popoH1: '是否退出登录',
    nickName: '', //  名称
    avatarUrl: '',  // 头像
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.getUserInfo({
      success: function(res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        console.log(userInfo, nickName, avatarUrl, gender, province, city, country);
        that.setData({
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
        });
      }
    })

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          confirmHeight: (res.windowHeight - 110) / 2,
        });
      },
    })
  },

  callService: function() {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.aiphone,
    })
  },

  /**
   * 跳转页面
   */
  goAddress: function() {
    wx.navigateTo({
      url: '../distribution/distribution',
    })
  },

  /**
   * 跳转页面
   */
  goOrder: function() {
    wx.switchTab({
      url: '../order/order',
    })
  },

  /**
   * 退出登录
   */
  overPerson: function() {
    var that = this;
    that.setData({
      domShow: false,
    });
  },

  /**
   * 点击阴影层隐藏弹出层
   */
  overDome: function () {
    var that = this;
    that.setData({
      domShow: true,
    });
  },

  /**
   * 取消按钮
   */
  cancelEven: function () {
    var that = this;
    that.setData({
      domShow: true,
    });
  },

  /**
   * 确认按钮
   */
  confirmEven: function () {
    var that = this;
    that.setData({
      domShow: true,
    });
    wx.navigateTo({
      url: '../index/index',
    })
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