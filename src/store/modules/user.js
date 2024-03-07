import { getUserInfo, setUserInfo } from '@/utils/storge'

export default {
  namespaced: true,
  state () {
    return {
      userInfo: getUserInfo()
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userInfo = obj
      setUserInfo(obj)
    }
  },
  actions: {

  },
  getters: {

  }
}
