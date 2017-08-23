// address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '白云区'],  //  地区
    customItem: '全部',  //  地区
    items: [  //  单选按钮选择
      { name: '先生', value: '先生', checked: 'true' },
      { name: '女士', value: '女士' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**e
   * 增加地址
   */
  formSubmit: function(e) {
    console.log(e.detail.value);
    var myname = e.detail.value.myname;
    var gender = e.detail.value.gender;
    var telphone = e.detail.value.telphone;
    var region = e.detail.value.region;
    var homenumber = e.detail.value.homenumber;
    var options = {
      name: myname,
      gender: gender,
      telphone: telphone,
      region: region,
      homenumber: homenumber
    };
    wx.setStorageSync('addressKey', options);
    console.log(myname, gender, telphone, region, homenumber);
  },

  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      region: e.detail.value
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