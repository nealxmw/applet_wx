const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    nickname: ''
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        //唯一标识（其它设置不同的整数）  
        selected: 2
      })
    }
  },
  showLogin() {
    // 登录
    // wx.checkSession({
    //   success(e) {
    //     console.log(e, 'session_key 未过期，并且在本生命周期一直有效')
    //   },
    //   fail(e) {
    //     console.log(e, 'session_key 已经失效，需要重新执行登录流程')
    //     wx.login({
    //       success(e) {
    //         console.log(e, '重新登录')
    //         // 发起网络请求 code -> openid(固定) / session_key(wx.checkSession()验证是否有效)
    //         // wx.request({
    //         //   url: 'https://*********/login',
    //         //   data: { code }
    //         // })
    //       }
    //     })
    //   }
    // })

    // 授权
    // wx.getSetting({
    //   success(e) {
    //     console.log(e,'用户授权')
    //     // 权限列表 https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8
    //     if (!e.authSetting['scope.camera']) { // 添加需要的授权
    //       wx.authorize({
    //         scope: 'scope.camera',
    //         success(e) {
    //           console.log(e,'授权更改')
    //         }
    //       })
    //     }
    //   }
    // })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    this.setData({
      avatarUrl,
    })
    console.log(this.data.avatarUrl, 'avatarUrl')
  },
  nameChange() {
    console.log(this.data.nickname, 'nikename')
  },
  showPrivacy() {
    wx.showModal({
      title: '提示',
      content: '非常抱歉，后续添加！',
      showCancel: false
    })
  },
  showUser() {
    wx.showModal({
      title: '提示',
      content: '非常抱歉，后续添加！',
      showCancel: false
    })
  },
  showFeedback() {
    wx.navigateTo({
      url: './help/help'
    })
  },

  onShareAppMessage(e) {
    console.log(e, '页面分享') // menu/button
    if (e && e.from == 'button') {
      // 来自页面内的转发按
    } else {
      // 点击微信右上角的分享按钮
    }
    return {
      title: '小程序分享',  // 默认分享，6字 后面变成省略号
      imageUrl: '../../images/logo.png',   // 分享封面。必须是URL地址。URL地址记得是否添加了安全域名
      path: '/pages/word/word',      // 分享的后，其他用户点击进来的路径
      query: {  // 分享传递的参数
        type: 'share',
      }
    }
  },
  onShareTimeline(e) {
    console.log(e, '朋友圈分享')
    const self = this;
    let shareObj = {
      title: '分享到朋友圈',
      imageUrl: '../../images/logo.png',
    };
    return shareObj;
  }
})
