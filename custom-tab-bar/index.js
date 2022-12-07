Component({
  data: {
    selected: null,
    list: [
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "../images/index.png",
        "selectedIconPath": "../images/index-selected.png"
      },
      {
        "pagePath": "/pages/book/book",
        "text": "查词",
        "iconPath": "../images/book.png",
        "selectedIconPath": "../images/book-selected.png"
      },
      {
        "pagePath": "/pages/user/user",
        "text": "用户",
        "iconPath": "../images/user.png",
        "selectedIconPath": "../images/user-selected.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data,'页面跳转')
      const url = data.path
      wx.switchTab({url})
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})