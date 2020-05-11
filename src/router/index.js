import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import houseInfo from '@/components/houseInfo'
import test from '@/components/test'
import BaiduMap from 'vue-baidu-map'

Vue.use(Router)

Vue.use(BaiduMap, {
  ak: 'SOhlZSYOsGgYucel06iFSVYzypXwYyrM'
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/houseInfo',
      name: 'houseInfo',
      component: houseInfo
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
