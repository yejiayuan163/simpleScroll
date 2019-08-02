<template>
    <y-scroll :ref="'list1'">
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div>dataList</div>
        <div @click="unbind" style="background-color: aliceblue;border-radius: 4px">点一下，解绑滚动监听(模拟接口没数据返回的情况)</div>
    </y-scroll>
</template>

<script>
  import YScroll from './YScroll'
  export default {
    components: {YScroll},
    name: 'data-list',
    methods:{
      unbind() {
        this.$refs['list1'].unbindScroll()
      }
    }
  }
</script>

<style scoped>
    div {
        height: 50px;
        background-color: aqua;
    }

</style>