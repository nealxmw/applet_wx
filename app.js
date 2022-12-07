// app.js
const wilddog = require('./utils/wilddog.js')
const config = {
  syncURL: 'https://miemie.wilddogio.com',
  authDomain: 'miemie.wilddog.com'
}

App({
  onLaunch: () => {
    wilddog.initializeApp(config)
  },
  getUserInfo: cb => {
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(this.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})
