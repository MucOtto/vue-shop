// 把请求封装成函数，直接改变传参数 增加可读性

import request from '@/utils/request'

// 1、获取图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}

// 2、获取短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}

// 3、登陆验证
export const validLogin = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      partyData: {},
      mobile,
      smsCode
    }
  })
}
