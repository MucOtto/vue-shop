// 本地的持久化

const USER_KEY = 'shopping-login-user-key'
const HISTORY_KEY = 'search-history-key'
export const getUserInfo = () => {
  // 如果不为空取 为空取默认值
  const defaultObj = { token: '', userId: '' }
  const res = localStorage.getItem(USER_KEY)
  return res ? JSON.parse(res) : defaultObj
}
export const setUserInfo = (info) => {
  localStorage.setItem(USER_KEY, JSON.stringify(info))
}
export const removeUserInfo = () => {
  localStorage.removeItem(USER_KEY)
}

// 搜索历史的本地化存储
export const getHistoryInfo = () => {
  const res = localStorage.getItem(HISTORY_KEY)
  return res ? JSON.parse(res) : []
}

export const setHistoryInfo = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}

export const deleteHistoryInfo = () => {
  localStorage.removeItem(HISTORY_KEY)
}
