<template>
  <div class="hello">
    <el-container>
      <el-header> - </el-header>
      <el-main>
        <div v-html="title"></div>
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <el-button type="primary" @click="toHouseInfo()">主要按钮</el-button>
        <el-button type="primary" @click="toTest()">test</el-button>
      </el-main>
      <el-footer>
        <i class="el-icon-phone">XXXX-XXXXXXXX</i>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '<title>二手房</title>',
      msg: '二手房begin!'
    }
  },
  methods: {
    toHouseInfo: function () {
      this.msg = 'ppp'
      this.$router.push({path: '/houseInfo', query: {houseId: '1588473009955_10'}})
    },
    toTest: function () {
      this.$router.push({path: '/test'})
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
  color: #42b983;
}
</style>
