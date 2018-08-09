import http from '../../infrastructure/http'

const UsuarioService = {
  urlPrefix: 'usuario',

  insert (model) {
    return http.post(`${this.urlPrefix}/cadastro`, model)
  }
}

export default UsuarioService
