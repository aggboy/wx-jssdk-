<template>
  <div>
    hello
  </div>
</template>

<script>
import myWx from './wxAllMethod'
export default {
  mounted () {
    this.initConfig()
  },
  methods: {
    initConfig () {
      // 传入后端返回的 
      //appId,
      //timestamp,
      //nonceStr,
      //signature,
      let obj = {
        appId:13433,
        timestamp:433442,
        nonceStr:45784784,
        signature:378483
      }
      // 先调用 myWx.init 初始化配置
      myWx.init(obj)
      // 接着调用 myWx.exec 方法
      // 把你想调用的方法 如分享方法（sharePage）传进去 同时记得改变this指向
      // 如果不改变this指向的话 当方法如（sharePage）执行
      // 它的this指向则是 myAllMethod.js 文件下 中的全局this
      // 如果想要传参数 可以这样写 bind(myWX,age,name,skill)
      myWx.exec(myWx.sharePage.bind(myWx))
    }
  },

}
</script>

<style lang="scss" scoped>
</style>