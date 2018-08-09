import Usuario from '../domain/entity/usuario'
import UsuarioService from '../domain/services/usuario-service'

class UsuarioController {
  _usuario = new Usuario()

  cadastrar (modelCadastro) {
    console.log('cadastrar: ', modelCadastro)

    this._usuario.nome = modelCadastro.nome
    this._usuario.login = modelCadastro.login
    this._usuario.senha = modelCadastro.senha

    UsuarioService.insert(this._usuario)
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
