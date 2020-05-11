<template>
  <div id="test">
    <div v-html="title"></div>
    <el-container>
      <el-main>
        <baidu-map class="map" center="北京"></baidu-map>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      title: '<title>test</title>',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #28a36a;
}
.block1 {
  width: 600px;
  height: 400px;
}
.block1 img{
  width:100%;
  height:100%;
}
.map {
  width: 100%;
  height: 400px;
}
</style>
