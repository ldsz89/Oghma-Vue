import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Landing from '@/components/Landing'
import UserAuth from '@/components/UserAuth'
import CharacterCreate from '@/components/CharacterCreate'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
      {
          path: '*',
          redirect: '/auth'
      },
      {
          path: '/',
          redirect: '/auth'
      },
      {
          path: '/auth',
          name: 'UserAuth',
          component: UserAuth
      },
      {
          path: '/charactercreate',
          name: 'CharacterCreate',
          component: CharacterCreate,
          meta: {
              requiresAuth: true
          }
      }
  ]
})

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('/auth')
    else if (!requiresAuth && currentUser) next('/charactercreate')
    else next()
})

export default router
