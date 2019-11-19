// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import Config from '../config'
// import { setConnectedUser } from '../store/actions/user.action'

// export function storeToken(token) {
//   window.localStorage.setItem('hut_access_token', token)
// }
//
// export function extractToken() {
//   return window.localStorage.getItem('hut_access_token')
// }
//
// export function getProfile(forced = false) {
//   return new Promise((resolve, reject) => {
//     if (profileIsInLocalStorage() && !forced) {
//       const profile = loadProfileFromLocalStorage()
//       setConnectedUser(profile)
//       resolve(profile)
//     } else {
//       fetchProfile().then(profile => {
//         setConnectedUser(profile)
//         storeProfileLocalStorage(profile)
//         resolve(profile)
//       }).catch(err => {
//         reject(err)
//       })
//     }
//   })
// }
//
// export function setProfile(forced = false) {
//   if (profileIsInLocalStorage() && !forced) {
//     setConnectedUser(loadProfileFromLocalStorage())
//   } else {
//     fetchProfile().then(profile => {
//       setConnectedUser(profile)
//       storeProfileLocalStorage(profile)
//     })
//   }
// }
//
// export function updateProfileLocalStorage(profile) {
//   storeProfileLocalStorage(profile)
// }
//
export function isAuthenticated (role) {
  console.log('tokens : ' + window.localStorage.getItem('tokens'))
  if (window.localStorage.getItem('tokens') !== undefined &&
    window.localStorage.getItem('tokens') !== null) {
    // setTokenHeader()
    console.log('authenticated true')
    return true
  } else {
    console.log('authenticated false')
    return false
  }
  // return true
}
//
// export function isAuthenticatedSimple() {
//   if (window.localStorage.getItem('hut_access_token') !== undefined &&
//     window.localStorage.getItem('hut_access_token') !== null) {
//     return true
//   } else {
//     return false
//   }
// }
//
// export function setTokenHeader() {
//   axios.defaults.headers.common['authorization'] = null
//   axios.defaults.headers.common['authorization'] = `Bearer ${extractToken()}`
// }
//
// export function unsetTokenHeader() {
//   axios.defaults.headers.common['authorization'] = null
// }
//
// export function removeToken() {
//   window.localStorage.removeItem('hut_access_token')
// }
//
// export function logout() {
//   removeToken()
//   deleteProfileLocalStorage()
//   window.location = '/'
// }
//
// export function login(email, password) {
//   return new Promise((resolve, reject) => {
//     axios.post(`${Config.API_URL}/login`, {
//       email: email,
//       password: password
//     }).then((res) => {
//       resolve(res.data)
//     }).catch((err) => {
//       reject(err)
//     })
//   })
// }
//
// export function register(name, email, password) {
//   return new Promise((resolve, reject) => {
//     axios.post(`${Config.API_URL}/register`, {
//       email: email,
//       username: name,
//       password: password
//     }).then((res) => {
//       resolve(res.data)
//     }).catch((err) => {
//       reject(err)
//     })
//   })
// }
//
// const loadProfileFromLocalStorage = () => {
//   return JSON.parse(window.localStorage.getItem('hut_profile'))
// }
//
// const storeProfileLocalStorage = (profile) => {
//   let clearedProfile = Object.assign({}, profile)
//
//   // clearedProfile.comments.forEach(comment => delete comment.recipe.audio)
//   // clearedProfile.realisations.forEach(realisation => delete realisation.audio)
//   // clearedProfile.realisations.forEach(realisation => {
//   //   realisation.collaborators.forEach(collaborator => delete collaborator.picture)
//   // })
//
//   delete clearedProfile.comments
//   delete clearedProfile.realisations
//   delete clearedProfile.picture
//
//   window.localStorage.setItem('hut_profile', JSON.stringify(clearedProfile))
// }
//
// const deleteProfileLocalStorage = () => {
//   window.localStorage.removeItem('hut_profile')
// }
//
// const profileIsInLocalStorage = () => (
//   window.localStorage.getItem('hut_profile') !== undefined &&
//   window.localStorage.getItem('hut_profile') !== null
// )
//
// const fetchProfile = () => {
//   return new Promise((resolve, reject) => {
//     axios.get(`${Config.API_URL}/me`).then(res => {
//       resolve(res.data)
//     })
//   })
// }
