import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "85b1845a-610b-40eb-b2eb-a23834f06e57"
  }
})

export const usersAPI = {
  async getUsers(currentPage = 2, pageSize = 20) {
    let response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)

    return response.data
  },
  postFollow(userId) {return instance.post(`follow/${userId}`)},
  deleteFollow(userId) {return instance.delete(`follow/${userId}`)},
  getUserProfile(userId) {
    console.warn('Obsolete method. Please use profileAPI object.') //вынос метода в отдельный объект (расширение функциональности)
    return profileAPI.getUserProfile(userId)},
}

export const profileAPI = {
  getUserProfile(userId) {return instance.get(`profile/${userId}`)},
  getStatus(userId) {return instance.get(`profile/status/${userId}`)},
  updateStatus(status) {
    return instance.put('profile/status', {status: status})}, // id сервер берет из кукисов
  pushPhoto(file) {
    const formData = new FormData()
    formData.append('image', file)
    return instance.put('profile/photo', formData, {
        headers: {'Content-Type': 'multipart/form-data'}}
        )},
}

export const authAPI = {
  getAuth() {return instance.get('auth/me')},
  setLogin(login, pass, logMemo = false) {
    return instance.post('auth/login', {email: login, password: pass, rememberMe: logMemo})
  },
   setLogout() {return instance.delete('auth/login')}

}
