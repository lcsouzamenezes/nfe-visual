import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes =  [
      {
          path: '/nfe/nota/:id',
          name: 'nota',
          component: () => import(/* webpackChunkName: "nota" */ './nfe/views/Nota.vue')
      },
      {
          path: '/nfe/listar',
          name: 'notas',
          component: () => import(/* webpackChunkName: "notas" */ './nfe/views/Notas.vue')
      },
      {
          path: '/login-again',
          name: 'login-again',
          component: () => import(/* webpackChunkName: "LoginAgain" */ './nfe/views/LoginAgain.vue')
      },
      {
          path: '/nfe/notas-by-user',
          name: 'notas-by-user',
          component: () => import(/* webpackChunkName: "NotasByUser" */ './nfe/views/NotasByUser.vue')
      },
      {
          path: '/nfe/:token',
          name: 'home',
          component: () => import(/* webpackChunkName: "Home" */ './nfe/views/Home.vue')
      },
  ]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});

router.beforeEach(function(to, from, next) {
    const usuario = localStorage.getItem('usuario')

    if (to.name === '/login-again') {
        return next()
    }

    if (to.name === 'home' && !to.params.token) {
       return  next('/login-again')
    }

    if(typeof usuario === 'undefined'){
       return  next('/login-again')
    }
    console.log('te')

    next()
});

export default router;
