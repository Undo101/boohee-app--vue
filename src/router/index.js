import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/second/Content'
// const Content = resolve => require(['./components/Content.vue'], resolve)
import search from '@/components/search'
import message from '@/components/message'
import Slim from '@/components/slim/Slim'
import Friend from '@/components/friend/Friend'
import Shop from '@/components/shop/Shop'
import Me from '@/components/me/Me'
import health_one from '@/components/slim/slim-components/health_one'
import dietary_two from '@/components/slim/slim-components/dietary_two'
import addmeal from '@/components/slim/slim-components/addmeal'
import common from '@/components/slim/slim-components/common.vue'
import other from '@/components/slim/slim-components/other.vue'
import Choiceness from '@/components/friend/Choiceness.vue'
import CircleFri from '@/components/friend/CircleFri.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'second/Content',
      component: Content
    },
    {
      path: '/message',
      component: message
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/',
      name: 'Slim',
      component: Slim
    },
     {
      path: '/slim',
      name: 'Slim',
      component: Slim
    },
    {
      path: '/slim-components/health_one',
      component: health_one
    },
    {
      path: '/slim-components/dietary_two',
      component: dietary_two
    },
    {
      path: '/addmeal',
      component: addmeal,
      children:[
        {
          path:'/',
          component:common
        },
        {
          path:'/common',
          component:common
        },
        {
          path:'/other',
          component:other
        }
      ]
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend,
      children:[
        {
          path:'/',
          component:Choiceness
        },{
          path:'/CircleFri',
          component:CircleFri
        }
      ]
    },
     {
      path: 'shop/Shop',
      name: 'Shop',
      component: Shop
    }, {
      path: '/me ',
      name: 'Me',
      component: Me
    }
  ]
})
