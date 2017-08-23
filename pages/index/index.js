//index.js

var util = require('../../utils/util.js');

//获取应用实例
var app = getApp()
Page({
  data: {
    winWidth: 0,              // 页面配置
    winHeight: 0,             // 页面配置
    currentTab: 0,            // tab切换 
    eleHeight: 0,             //  侧边栏高度,
    thisNumber: 1,            //  增加数量
    minusStatus: 'disabled',  // 使用data数据对象设置样式名 
    footHeight: 45,           //  底部高度
    winLeft: 0,               //  左边
    winTop: 0,                //  顶部
    popupVisible: true,
    indicatorDots: false,
    autoplay: true, //  自动播放
    interval: 5000,
    duration: 1000,
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0,
    moneyCount: 0,  //  总价钱
    mainOption: [],
    listOption: [],
    selected: false, //  切换选项卡
    selected_is: true,  //  切换选项卡
    imgUrls: [
      {
        url: 'http://file.green-f.cn/2017/08/21/00/47/22/upload_dc30a7d8fab99d6de59a162de23adf19.jpg',
      },
      {
        url: 'http://file.green-f.cn/2017/08/19/07/49/45/upload_5de1963c7f23d5ab36a9f808e7e82800.jpg',
      }
    ],
    options: [
      {
        "id": 1,
        "tree": {
          "id": 26,
          "name": "蔬菜菌菇",
          "shotcut": "http://file.green-f.cn/2017/07/10/02/58/27/upload_489de148d522812201779ddacdc00a84.jpg",
          "tag": "",
          "nodes": [
            {
              "id": 157,
              "tree": {
                "id": 157,
                "title": "本地菜心",
                "price": "5.8",
                "logo": "http://file.green-f.cn/2017/07/10/01/04/44/upload_affff90ec8720374ddffba4e426f5393.jpg",
                "popular": 157,
                'num': 0,

                'guige': [
                  {
                    'id': 1,
                    'name': '加快乐',
                  },
                  {
                    'id': 2,
                    'name': '加雪碧',
                  },
                  {
                    'id': 3,
                    'name': '加煎蛋',
                  },
                  {
                    'id': 4,
                    'name': '单品',
                  }
                ],
                "nodes": null
              }
            },
            {
              "id": 158,
              "tree": {
                "id": 158,
                "title": "榨菜肉丝饭",
                "price": "5.8",
                "logo": "http://file.green-f.cn/2017/07/15/05/57/51/upload_17a16366aea41b152328ba0338c80c20.jpg",
                "popular": 157,
                'num': 0,
                'guige': [
                  {
                    'id': 1,
                    'name': '加快乐',
                  },
                  {
                    'id': 2,
                    'name': '加雪碧',
                  },
                ],
                "nodes": null
              }
            },
            {
              "id": 157,
              "tree": {
                "id": 157,
                "title": "榨菜肉丝饭",
                "price": "6.8",
                "logo": "http://file.green-f.cn/2017/08/14/08/44/23/upload_8b8c9cd045e74a2ee2e2f0e0860f4b2a.jpg",
                "popular": 157,
                'num': 0,
                "nodes": null
              }
            },
            {
              "id": 158,
              "tree": {
                "id": 158,
                "title": "榨菜肉丝饭",
                "price": "8.8",
                "logo": "http://file.green-f.cn/2017/07/14/07/58/20/upload_2f50806432ca6cca0edf55adeb35f83a.jpg",
                "popular": 157,
                'num': 0,
                "nodes": null
              }
            },
          ]
        },
      },
      {
        "id": 2,
        "tree": {
          "id": 27,
          "name": "瓜茎豆荚",
          "shotcut": "http://file.green-f.cn/2017/06/13/03/20/16/upload_3f10760bb5e2677f2b8fd39ce9cb4489.jpg",
          "tag": "",
          "nodes": [
            {
              "id": 158,
              "tree": {
                "id": 158,
                "title": "青瓜",
                "price": "5.8",
                "logo": "http://file.green-f.cn/2017/07/25/10/16/14/upload_e91fb5f84afa71c4fcb56da73abf9385.jpg",
                "popular": 157,
                'num': 0,
                "nodes": null
              }
            },
            {
              "id": 159,
              "tree": {
                "id": 158,
                "title": "黄瓜",
                "price": "50",
                "logo": "http://file.green-f.cn/2017/07/21/07/18/02/upload_693931672dd8f79c2aea0e9f462fbcb3.jpg",
                "popular": 157,
                'num': 0,
                "nodes": null
              }
            },
          ]
        },
      },
      {
        "id": 23,
        "tree": {
          "id": 23,
          "name": "缤纷水果",
          "shotcut": "http://file.green-f.cn/2017/08/08/07/54/20/upload_f913d48b61313d43c35529d970161330.jpg",
          "tag": "",
          "nodes": [
            {
              "id": 157,
              "tree": {
                "id": 157,
                "title": "释迦",
                "price": "28",
                "logo": "http://file.green-f.cn/2017/07/27/00/42/53/upload_5421242ae80720a349592db88f99013c.jpg",
                "popular": 157,
                'num': 0,
                "nodes": null
              }
            },
          ]
        },
      },
      {
        "id": 25,
        "tree": {
          "id": 25,
          "name": "猪牛羊肉",
          "shotcut": "http://file.green-f.cn/2017/06/13/03/20/30/upload_9f2c3f7fc28a5da49005adbef3ce9d73.jpg",
          "tag": "2",
          "nodes": []
        },
      },
      {
        "id": 20,
        "tree": {
          "id": 20,
          "name": "熟食面点",
          "shotcut": "http://file.green-f.cn/2017/06/13/03/20/58/upload_6eef7557c125515cc07dba2afaa45fe4.jpg",
          "tag": "2",
          "nodes": []
        },
      },
      {
        "id": 24,
        "tree": {
          "id": 24,
          "name": "海鲜水产",
          "shotcut": "http://file.green-f.cn/2017/06/13/03/20/42/upload_661caf44bf86db3776ce06c48232edd7.jpg",
          "tag": "2",
          "nodes": []
        },
      },
      {
        "id": 21,
        "tree": {
          "id": 21,
          "name": "有汁有味",
          "shotcut": "http://file.green-f.cn/2017/08/16/09/59/32/upload_10cecfbfaab1026a4bb5d678045d45d8.jpg",
          "tag": "2",
          "nodes": []
        },
      },
      {
        "id": 31,
        "tree": {
          "id": 31,
          "name": "滋润汤料",
          "shotcut": "http://file.green-f.cn/2017/08/17/07/04/52/upload_3e42402acd3c33e88ee8dd1f78d0937b.jpg",
          "tag": "2",
          "nodes": []
        },
      }
    ],
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          eleHeight: res.windowHeight - 250 - 45,
          winLeft: 0,
          winTop: (res.windowHeight - 350) / 2,
          winWidth: res.windowWidth,
          winHeight: res.windowHeight 
        });
      },
    })

    // 加载的使用进行网络访问，把需要的数据设置到data数据对象  
    var that = this
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {

      }
    })
  },

  //事件处理函数
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id, index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  //  数量递增
  addNumber: function (e) {
    var that = this, num = that.data.thisNumber

    let data = e.currentTarget.dataset,
      index = data.index,
      id = data.id,
      list = that.data.options[index].tree.nodes[index].tree;

    console.log(list, list.id, list.num);
    if (list.id == id) {
      list.num += 1;
    }
    console.log(list.num);
    return;
    that.setData({
      options: list.num,
    });
  },

  //  递减数量
  removeNumber: function () {
    var that = this, num = that.data.thisNumber;
    if (num > 1) num--;
    // 只有大于一件的时候，才能normal状态，否则disable状态 
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    that.setData({
      thisNumber: num,
      minusStatus: minusStatus,
    });
  },

  //  输入框数量
  bindManual: function (e) {
    var num = e.detail.value, that = this;
    let id = e.currentTarget.dataset.id;
    console.log(id);

    that.setData({
      num: num,
    });
  },

  goVisible: function () {
    var that = this;
    if (that.data.popupVisible) {
      that.setData({
        popupVisible: false,
      });
    } else {
      that.setData({
        popupVisible: true,
      });
    }
  },

  chonseOK: function () {
    wx.navigateTo({
      url: '../submit/submit',
    })
  },

  shopChonseOK: function (e) {
    let data = e.currentTarget.dataset,
      id = data.id,
      img = data.img,
      name = data.name,
      guige = data.guige,
      price = data.money;

    var that = this;

    var options = {
      id: id,
      img: img,
      name: name,
      guige: guige,
      price: price,
    };
    that.setData({
      popupVisible: false,
      mainOption: options
    });
  },

  okGoSubmit: function (e) {
    let data = e.currentTarget.dataset,
      id = data.id,
      image = data.image,
      name = data.name,
      price = data.money,
      that = this,
      options = {
        id: id,
        name: name,
        image: image,
        price: price,
      };
    wx.setStorageSync("chonseShop", options);

    that.setData({
      listOption: options,
    });
    console.log(that.data.listOption);

  },

  goSearchPage: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  //  切换tab
  selected: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  
  bindChange: function(e) {
    var that = this;
    that.setData({ 
      currentTab: e.detail.current 
    }); 
  },

})
