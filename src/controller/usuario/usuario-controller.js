import Usuario from '../../domain/entity/usuario'
import UsuarioService from '../../domain/services/usuario-service'

class UsuarioController {
  _usuario = new Usuario()

  cadastrar (modelCadastro) {
    console.log('cadastrar: ', modelCadastro)

    this._usuario.nome = modelCadastro.nome
    this._usuario.login = modelCadastro.login
    this._usuario.senha = modelCadastro.senha

    UsuarioService.insert(this._usuario)
  }

  login (username, senha) {
    if (process.env.AUTHENTICATION_MODE === 'firebase') {
      return new Promise(function (resolve, reject) {
        UsuarioService.loginFirebase(username, senha)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }

  editar (modelEdicao) {
    console.log('editar: ', modelEdicao)
    UsuarioService.update(modelEdicao)
  }

  excluir (idUsuario) {
    console.log('excluir: ', idUsuario)
    UsuarioService.delete(idUsuario)
  }

  listarTodos () {
    console.log('listarTodos:')
    UsuarioService.getAll()
  }

  listar (modelListarFiltro) {
    console.log('listarPorId: ', modelListarFiltro)
    UsuarioService.getByFilter(modelListarFiltro)
  }
}

export default UsuarioController
