import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import UsuarioController from '../../controller/usuario/usuario-controller'

Vue.use(Vuex)

const labelToken = btoa(process.env.LABEL_TOKEN_STORAGE)
const labelUser = btoa(process.env.LABEL_USER_STORAGE)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem(labelToken) || '',
    user: localStorage.getItem(labelUser) || {}
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
      state.user = {}
    }
  },
  actions: {
    login ({commit}, user) {
      let usuario = new UsuarioController()

      return new Promise(function (resolve, reject) {
        usuario.login(user.username, user.password)
          .then((response) => {
            let userToken = response.token
            let user = response.user
            localStorage.setItem(labelToken, userToken)
            localStorage.setItem(labelUser, btoa(JSON.stringify(user)))
            axios.defaults.headers.common['Authorization'] = userToken
            resolve('Login realizado com sucesso')
            commit('auth_success', userToken, user)
          })
          .catch((error) => {
            commit('auth_error')
            localStorage.removeItem(labelToken)
            localStorage.removeItem(labelUser)
            reject(error)
          })
      })
    },
    logout ({commit}) {
      let usuario = new UsuarioController()
      usuario.logout()
        .then(() => {
          commit('logout')
          localStorage.removeItem(labelToken)
          localStorage.removeItem(labelUser)
          delete axios.defaults.headers.common['Authorization']
        })
        .catch((error) => {
          return error
        })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
})
