import http from '../../infrastructure/http'
import firebase from 'firebase'

const UsuarioService = {
  urlPrefix: 'usuario',

  insert (model) {
    return http.post(`${this.urlPrefix}/cadastro`, model)
  },

  logoutFirebase () {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then(() => {
          resolve('Logout com sucesso')
        })
        .catch(error => reject(error))
    })
  },

  loginFirebase (email, password) {
    return new Promise(function (resolve, reject) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
          let dados = {
            token: response.user.uid,
            user: btoa(JSON.stringify(response.user))
          }
          resolve(dados)
        },
        (err) => {
          let errorMessage = ''

          switch (err.code) {
            case 'auth/wrong-password':
              errorMessage = 'Senha inválida'
              break

            case 'auth/user-not-found':
              errorMessage = 'Usuário não encontrado'
              break

            case 'auth/invalid-email':
              errorMessage = 'E-mail inválido'
              break

            default:
              break
          }
          reject(errorMessage)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default UsuarioService
