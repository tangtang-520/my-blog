import request from '../../service'

import type { loginType } from '../types'

// 登录接口
export const login = (data: loginType) => {
    return request({
        url: '/login',
        method: 'post',
        data,
    })
}