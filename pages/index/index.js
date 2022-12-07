const words = require('../../data/words.js')
const all = require('../../data/all.js')
const innerAudioContext = wx.createInnerAudioContext()
const audioPath = 'https://dict.youdao.com/dictvoice?audio='
Page({
  data: {
    content: null,
    pron: null, // 代词
    definition: null, // 定义
    audioUrl: null, // 音频
    wordsMax: 999,
    allMax: 12346,
    isReading: false
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        //唯一标识（其它设置不同的整数）  
        selected: 0
      })
    }
  },
  onLoad() {
    // 从本地随机选取一个单词
    var idx = Math.floor(Math.random() * this.data.wordsMax) + 1
    var word = words.wordList[idx]
    this.setData({
      content: word.content,
      pron: word.pron,
      definition: word.definition,
      audioUrl: audioPath + word.content
    })
    innerAudioContext.src = this.data.audioUrl
  },

  // 下一个
  next() {
    this.setData({
      showNot: false
    })
    const { allMax,wordsMax } = this.data
    // 按列表请求更多单词
    let idx = Math.floor(Math.random() * wordsMax) + 1
    var word = words.wordList[idx]
    this.setData({
      content: word.content,
      pron: word.pron,
      definition: word.definition,
      audioUrl: audioPath + word.content
    })
    innerAudioContext.src = this.data.audioUrl
    // api失效 目前只使用本地资源
    // wx.request({
    //   url: `https://api.shanbay.com/bdc/search/?word=${content}`,
    //   data: {},
    //   method: 'GET',
    //   success: res => {
    //     const data = res.data.data
    //     this.setData({
    //       content: data.content,
    //       audioUrl: data.us_audio,
    //       pron: data.pron,
    //       definition: data.definition
    //     })
    //     innerAudioContext.src = audioUrl
    //   }
    // })
  },

  show() {
    this.setData({
      showNot: true
    })
  },

  read() {
    if (this.data.audioUrl) {
      console.log(this.data.audioUrl)
      // 查询用户授权
      // wx.getSetting({
      //   success(e) {
      //     console.log(e, '用户授权')
      //     // 权限列表 https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8
      //     // if (!e.authSetting['scope.camera']) { // 添加需要的授权
      //     //   wx.authorize({
      //     //     scope: 'scope.camera',
      //     //     success(e) {
      //     //       console.log(e, '授权更改')
      //     //     }
      //     //   })
      //     // }
      //   }
      // })
      this.setData({
        isReading: true
      })
      innerAudioContext.play()
      setTimeout(() => {
        this.setData({
          isReading: false
        })
      }, 1500);
    }
  }
})
