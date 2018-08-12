import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import UsuarioCadastro from '../../views/usuario/usuario-cadastro'
import Login from '../../views/login/login'

import '../../assets/css/main.css'
import 'popper.js'
import 'jquery/dist/jquery.slim'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/usuario',
      name: 'usuario-cadastro',
      component: UsuarioCadastro,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// guarda de rotas
router.beforeEach((to, from, next) => {
  // verificando quais rotas necessitam de autenticação
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // verificando no Vuex se o usuário está logado
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    // se não está logado, redirect para login
    next('/login')
  } else {
    // se não precisa de autenticação, segue normalmente
    next()
  }
})

export default router
