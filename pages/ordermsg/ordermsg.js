Page({

  /**
   * 页面的初始数据
   */
  data: {
    confirmHeight: 0, //  高度
    popoH1: "确定取消订单吗？",
    domShow: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          confirmHeight: (res.windowHeight - 110) / 2,
        });
      },
    })
  },

  /**
   * 取消订单
   */
  cancelOrder: function() {
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
      Administration: '管理',
      utilIcon: true,
    });
  },

  cancelEven: function () {
    var that = this;
    that.setData({
      domShow: true,
      Administration: '管理',
      utilIcon: true,
    });
  },

  confirmEven: function () {
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