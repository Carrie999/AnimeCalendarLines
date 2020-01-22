/**
 * 项目相关api
 */
import * as API from './'
import Env from './env'
const { version } = Env

export default {
  getTask: params => {
    return API.GET(``, params)
  },
  postLines: params => {
    return API.POST('lines', params)
  },
  getLines: params => {
    return API.GET('lines', params)
  },
  putLines: params => {
    return API.PUT('lines', params)
  },
  delLines: params => {
    return API.DELETE('lines/' + params._id)
  },
  postFile: params => {
    return API.POST('upload', params)
  },
  login: params => {
    return API.POST('login', params)
  },
  register: params => {
    return API.POST('register', params)
  }
}
