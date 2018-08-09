import Vue from 'vue'
import Router from 'vue-router'
import UsuarioCadastro from '../../views/usuario/usuario-cadastro'

import '../assets/css/main.css'
import 'popper.js'
import 'jquery/dist/jquery.slim'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/usuario',
      name: 'UsuarioCadastro',
      component: UsuarioCadastro
    }
  ]
})
