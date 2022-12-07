const words = require('../../data/words.js')

Page({
  data: {},
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        //唯一标识（其它设置不同的整数）  
        selected: 1
      })
    }
  },
  search(e) {
    let content = e.detail.value
    let list = words.wordList
    let wordData = list[0]
    for (let i = 0; i < list.length; i++) {
      if(list[i].content === content){
        wordData = list[i]
      }
    }
    // 跳转详情页
    wx.navigateTo({
      url: `./detail/detail?data=${JSON.stringify(wordData)}`
    })
    // 查询失败
    // wx.showModal({
    //   title: '提示',
    //   content: '对不起，查询不到该词信息',
    //   showCancel: false
    // })
  },

  help() {
    wx.showModal({
      title: '提示',
      content: '输入单词后点击回车键即可查询',
      showCancel: false
    })
  }
})
