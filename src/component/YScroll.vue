<!--调用时，flbScroll的父元素需要固定高度，flbScroll包裹的元素（需要被监听的元素），高度不可固定，需要由内部元素撑开-->
<!--移动端使用，故未对ie8做兼容处理-->
<template>
    <div class="scrollWrapper" :ref="wrapperName">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'y-scroll',
    props:{
      // 被监听元素距离底部的距离
      disFromBottom:{
        type: Number,
        default: 300
      },
      // 被监听元素距离顶部的距离
      disFromTop:{
        type: Number,
        default: 300
      },
      // 给scroll组件外层定义一个ref，用于获取监听滚动
      wrapperName:{
        type: String,
        default: '1'
      },
      //触发判断的时间间隔
      interval: {
        type: Number,
        default: 300
      },
    },
    data() {
      return {
        lastTime: 0,
        timer:''
      }
    },
    mounted() {
      // 监听滚动事件
      this.$nextTick(()=> {
        this.$refs[this.wrapperName].addEventListener('scroll', this.listenPosition, true);
      })
    },
    methods:{
      listenPosition(){
        if(this.lastTime + this.interval < new Date().getTime()){
          this.lastTime = new Date().getTime()
          const scrollTop = this.$refs[this.wrapperName].scrollTop//卷去的高度
          const scrollHeight = this.$refs[this.wrapperName].scrollHeight//正文全文高
          const height = this.$refs[this.wrapperName].clientHeight//元素的高度
          // console.log('scrollTop:',scrollTop,'scrollHeight:',scrollHeight,'height:',height)
          if(scrollHeight <= scrollTop + height + this.disFromBottom){
            console.log('到底了！！')
            if(this.timer){
              clearTimeout(this.timer)
            }
            this.$emit('onBottom')
          } else {
            // 解决惯性滚动到底部不触发的问题
            this.timer=setTimeout(() => {
              const scrollTop = this.$refs[this.wrapperName].scrollTop//卷去的高度
              const scrollHeight = this.$refs[this.wrapperName].scrollHeight//正文全文高
              const height = this.$refs[this.wrapperName].clientHeight//元素的高度
              if(scrollHeight <= scrollTop + height + this.disFromBottom){
                this.$emit('onBottom')
              }
            },1000)
          }
        }
      },
      //解除滚动绑定
      unbindScroll(){
        this.$refs[this.wrapperName].removeEventListener('scroll', this.listenPosition, true);//第三个参数布尔值与绑定时要一致，第二个参数不能用匿名函数
      }
    },
    beforeDestroy(){
      // 移除监听滚动事件
      this.$refs[this.wrapperName].removeEventListener('scroll', this.listenPosition, true);
    }
  }
</script>

<style scoped>
    .scrollWrapper{
        height: 100%;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }
</style>