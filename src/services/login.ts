import axios from "axios"


// 实验室质控登录接口
export interface LoginParamsType {
  loginName: string
  password: string
}

export async function fakeAccountLogin(host: string, params: LoginParamsType) {
  return axios.post(host + '/login/verify', {
  params,
  })
}

