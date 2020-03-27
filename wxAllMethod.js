import wx from "weixin-js-sdk";
class wxAllMethod {
  constructor() {
      this.isWechatReady = false,
      this.isWechatError = false,
      this.readyFunctionArray = []
  }
  init(data) {
    console.log(data);
    let {
      appId,
      timestamp,
      nonceStr,
      signature,
    } = data
    console.log(signature,'签名');
    console.log(timestamp,'时间戳');
    console.log(nonceStr,'noce');
    console.log(appId,'appid');
    wx.config({
      debug: true,
      appId: appId,
      timestamp: timestamp,
      nonceStr: nonceStr,
      signature: signature, // url
      jsApiList: [
        "checkJsApi",
        "onMenuShareTimeline",
        "onMenuShareAppMessage",
        "updateAppMessageShareData",
        "updateTimelineShareData",
        "onMenuShareQQ",
        "onMenuShareWeibo",
        "hideMenuItems",
        "showMenuItems",
        "hideAllNonBaseMenuItem",
        "showAllNonBaseMenuItem",
        "translateVoice",
        "startRecord",
        "stopRecord",
        "onRecordEnd",
        "playVoice",
        "pauseVoice",
        "stopVoice",
        "uploadVoice",
        "downloadVoice",
        "chooseImage",
        "previewImage",
        "uploadImage",
        "downloadImage",
        "getNetworkType",
        "openLocation",
        "getLocation",
        "hideOptionMenu",
        "showOptionMenu",
        "closeWindow",
        "scanQRCode",
        "openProductSpecificView",
        "addCard",
        "chooseCard",
        "openCard",
        "getLocalImgData"
      ]
    });
    var that = this
    wx.ready(function () {
      that.isWechatReady = true;
      while (that.readyFunctionArray.length > 0) {
        //  存放 要执行的 方法数组
        //  每次拿它的第一项出来
        // 进行执行
        var fn = that.readyFunctionArray.shift();
        if (fn && typeof fn === "function") {
          fn();
        }
      }
    });
    wx.error(function () {
      that.isWechatError = false
    });
  }
  exec(fn) {
    if (!fn || typeof fn !== "function") {
      return;
    }
    if (this.isWechatReady) {
      fn();
    } else {
      this.readyFunctionArray.push(fn);
    }
  }
  sharePage() {
    console.log(this);
    console.log(this.isWechatReady);
    console.log(this.isWechatError);
    if (!this.isWechatReady || this.isWechatError) {
      return;
    }
    const title = "测试一下";
    const desc = "我是一只一只q";
    const link = 'www.baidu.com';
    const imgUrl = 'http://img3.imgtn.bdimg.com/it/u=814918627,4244049594&fm=26&gp=0.jpg';
    wx.onMenuShareTimeline({
      title,
      link,
      imgUrl
    });
    wx.onMenuShareAppMessage({
      title,
      desc,
      link,
      imgUrl
    });
    wx.updateAppMessageShareData({
      title,
      desc,
      link,
      imgUrl
    });
    wx.updateTimelineShareData({
      title,
      desc,
      link,
      imgUrl
    });
  }
}
export default new wxAllMethod()


