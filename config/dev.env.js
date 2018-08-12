'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_ROOT_API: '""',
  LABEL_TOKEN_STORAGE: '"token-sistema-teste"',
  LABEL_USER_STORAGE: '"user-sistema-teste"',
  AUTHENTICATION_MODE: '"firebase"',
  NOME_SISTEMA: '"Template Modelo"'
})
