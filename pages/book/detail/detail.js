// pages/settings/detail/detail.js
const innerAudioContext = wx.createInnerAudioContext()
const audioPath = 'https://dict.youdao.com/dictvoice?audio='

Page({
  data: {
    content:'',
    audioUrl:'',
    pron:'',
    definition:'',
    isReading: false
  },
  onLoad(e){
    const wordData = JSON.parse(e.data)
    if(wordData){
      this.setData({
        content: wordData.content,
        audioUrl: audioPath + wordData.content,
        pron: wordData.pron,
        definition: wordData.definition
      })
      innerAudioContext.src = this.data.audioUrl
    }
  },
  read() {
    if (this.data.audioUrl) {
      console.log(this.data.audioUrl)
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
