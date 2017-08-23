// distribution.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nothingTop: 0,  //  高度
    confirmHeight: 0, //  高度
    Administration: '管理',
    utilIcon: true,
    domShow: true,
    popoH1: '是否删除该地址？删除之后将无法恢复',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          nothingTop: (res.windowHeight - 100) / 2,
          confirmHeight: (res.windowHeight - 110) / 2,
        });
      },
    })
  },

  goChonse: function() {
    var that = this;
    if (that.data.Administration == '管理') {
      that.setData({
        Administration: '完成',
        utilIcon: false,
      });
    } else if (that.data.Administration == '完成') {
      that.setData({
        Administration: '管理',
        utilIcon: true,
      });
    }
  },

  /**
   * 跳转增加地址
   */
  goAddAddress: function() {
    wx.navigateTo({
      url: '../address/address',
      fail: function(err) {
        console.log(err);
      }
    });
  },

  /**
   * 删除地址
   */
  deleteAddress: function() {
    var that = this;
    that.setData({
      domShow: false,
    });
  },

  /**
   * 点击阴影层隐藏弹出层
   */
  overDome: function() {
    var that = this;
    that.setData({
      domShow: true,
      Administration: '管理',
      utilIcon: true,
    });
  },

  cancelEven: function() {
    var that = this;
    that.setData({
      domShow: true,
      Administration: '管理',
      utilIcon: true,
    });
  },

  confirmEven: function() {
    var that = this;
    that.setData({
      domShow: true,
      Administration: '管理',
      utilIcon: true,
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