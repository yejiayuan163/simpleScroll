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
        <div @click="unbind">button</div>
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