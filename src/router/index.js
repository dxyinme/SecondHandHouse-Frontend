import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import houseInfo from '@/components/houseInfo'
import test from '@/components/test'

Vue.use(Router)

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
