/*
 * 设置api请求的baseURL
 * 实际项目中建议该文件不纳入版本管理
 */

// 测试环境

let baseUrl
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3000/'
} else {
  baseUrl = 'http://59.110.159.217:3221/'
}
export default {
  baseURL: baseUrl,
  version: '',
  picURL: 'http://59.110.159.217:3221/mongo/images'
}
