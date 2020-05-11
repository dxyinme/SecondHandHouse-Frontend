<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #325e8a;
}
.el-header, .el-footer {
    background-color: rgba(137, 187, 144, 0.644);
    color: #333;
    text-align: center;
    line-height: 60px;
}
</style>
