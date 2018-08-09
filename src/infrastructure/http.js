import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API

const httpService = {
  get (url, params) {
    return axios.get(url, {
      headers: {
        // Authorization: `Bearer `,
        'Content-Type': 'application/json'
      },
      crossdomain: true,
      params: params
    })
  },

  post (url, params) {
    return axios.post(url, params, {
      headers: {
        // Authorization: `Bearer `,
        'Content-Type': 'application/json'
      },
      crossdomain: true
    })
  },

  put (url, params) {
    return axios.put(url, params, {
      headers: {
        // Authorization: `Bearer `,
        'Content-Type': 'application/json'
      },
      crossdomain: true
    })
  },

  delete (url, params) {
    return axios.delete(url, {
      headers: {
        // Authorization: `Bearer `,
        'Content-Type': 'application/json'
      },
      crossdomain: true,
      params: params
    })
  }
}

export default httpService
