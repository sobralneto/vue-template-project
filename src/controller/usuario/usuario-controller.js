import Usuario from '../../domain/entity/usuario'
import service from '../../domain/services/usuario-service'

class UsuarioController {
  _usuario = new Usuario()

  cadastrar (modelCadastro) {
    console.log('cadastrar: ', modelCadastro)

    this._usuario.nome = modelCadastro.nome
    this._usuario.login = modelCadastro.login
    this._usuario.senha = modelCadastro.senha

    service.insert(this._usuario)
  }

  login (username, senha) {
    if (process.env.AUTHENTICATION_MODE === 'firebase') {
      return new Promise((resolve, reject) => {
        service.loginFirebase(username, senha)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }

  logout () {
    if (process.env.AUTHENTICATION_MODE === 'firebase') {
      return new Promise((resolve, reject) => {
        service.logoutFirebase()
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    }
  }

  editar (modelEdicao) {
    console.log('editar: ', modelEdicao)
    service.update(modelEdicao)
  }

  excluir (idUsuario) {
    console.log('excluir: ', idUsuario)
    service.delete(idUsuario)
  }

  listarTodos () {
    console.log('listarTodos:')
    service.getAll()
  }

  listar (modelListarFiltro) {
    console.log('listarPorId: ', modelListarFiltro)
    service.getByFilter(modelListarFiltro)
  }
}

export default UsuarioController
