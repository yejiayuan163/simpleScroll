<template>
    <div>
        <div id="root">
            <div style="height: 20vh">我是无关紧要的内容</div>
            <div style="height: 70vh;">
                <data-list></data-list>
            </div>
        </div>
    </div>
</template>

<script>
  import dataList from '../component/dataList'

  export default {

    name: 'index.vue',
    data() {
      return {}
    },
    created() {
    },
    components: {
      dataList
    }
  }
</script>

<style scoped>
    #root {
        width: 100vw;
        height: 100vh;
        background-color: azure;
    }
</style>