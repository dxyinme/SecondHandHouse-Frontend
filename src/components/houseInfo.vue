<template>
  <div id="houseInfo">
    <div v-html="title"></div>
    <el-container>
      <el-header></el-header>
    </el-container>
    <el-container>
      <el-aside width="500px">
        <el-menu text-align: justify>
          <div>
            <el-tag>地址</el-tag>
            <el-menu-item>
              {{data.houseLocation}}
            </el-menu-item>
          </div>
          <div>
            <el-tag>面积</el-tag>
            <el-menu-item>
              {{data.houseArea}}平方米
            </el-menu-item>
          </div>
          <div>
            <el-tag>价格</el-tag>
            <el-menu-item>
              {{data.housePrice}}万元
            </el-menu-item>
          </div>
          <div>
            <el-tag>楼层</el-tag>
            <el-menu-item>
              {{data.houseFloor}}楼
            </el-menu-item>
          </div>
          <div>
            <el-tag>建造时间</el-tag>
            <el-menu-item>
              {{data.buildTime}}
            </el-menu-item>
          </div>
          <div>
            <el-tag>使用年限</el-tag>
            <el-menu-item>
              {{data.timeLimit}}年
            </el-menu-item>
          </div>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="block1">
          <img :src="src" class="img1">
        </div>
        <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
          <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
            <bm-label :content="content" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
          </bm-marker>
        </baidu-map>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'houseInfo',
  data () {
    return {
      zoom: 15,
      center: {lng: 116.404, lat: 39.915},
      title: '<title>houseInfo</title>',
      houseId: this.$route.query.houseId,
      context: null,
      data: null,
      content: null,
      position: null,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  },
  methods: {
    getContext: function () {
      this.axios
        .get('http://localhost:8099/housesystem/getHouseById?' + this.QS.stringify({houseId: this.houseId}))
        .then(response => {
          this.context = response.data
          if (this.context.status === 200) {
            this.data = this.context.data
          } else {
            alert(this.context.status)
          }
        })
        .catch(function (error) {
          alert(error)
        })
    },
    handler: function ({BMap, map}) {
      console.log(BMap, map)
      this.center = this.data.position
      this.zoom = 15
    }
  },
  mounted: function () {
    this.getContext()
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
.el-menu-item {
  color: #2349c9;
  text-align: justify;
}
.el-aside {
  background-color: rgb(238, 241, 246);
}
.el-tag {
  width: 80px;
  text-align: center;
}
.block1 {
  width: 600px;
  height: 400px;
}
.block1 img{
  width: 80%;
  height: 80%;
}
.map {
  width: 60%;
  height: 60%;
}
</style>
