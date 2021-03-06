import store from './store'
import config from '../config'
import { decrypt } from './util'

const apiPfalfa = config.api.pfalfa
// const apiDapps = config.api.dapps
const pubkey = decrypt(store.get('pubkey'))
const headerOptions = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
}

async function get(endpoint, headerAuth = true) {
  if (headerAuth) {
    headerOptions.Authorization = pubkey
  }

  return fetch(`${apiPfalfa}/${endpoint}`, {
    method: 'GET',
    // credentials: 'same-origin',
    headers: headerOptions,
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

async function post(endpoint, payload, headerAuth = true) {
  if (headerAuth) {
    headerOptions.Authorization = pubkey
  }

  return fetch(`${apiPfalfa}/${endpoint}`, {
    method: 'POST',
    // credentials: 'same-origin',
    headers: headerOptions,
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

async function put(endpoint, payload, headerAuth = true) {
  if (headerAuth) {
    headerOptions.Authorization = pubkey
  }

  return fetch(`${apiPfalfa}/${endpoint}`, {
    method: 'PUT',
    // credentials: 'same-origin',
    headers: headerOptions,
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

async function del(endpoint, headerAuth = true) {
  if (headerAuth) {
    headerOptions.Authorization = pubkey
  }

  return fetch(`${apiPfalfa}/${endpoint}`, {
    method: 'DELETE',
    // credentials: 'same-origin',
    headers: headerOptions,
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

async function uploadS3(endpoint, files) {
  const datas = new FormData()
  datas.append('file', files)

  return fetch(`${apiPfalfa}/${endpoint}`, {
    method: 'POST',
    // credentials: 'same-origin',
    headers: { Authorization: pubkey },
    body: datas,
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

async function uploadDapp(endpoint, files) {
  const datas = new FormData()
  datas.append('file', files)

  return fetch(`${apiPfalfa}/${endpoint}`, {
    method: 'POST',
    // credentials: 'same-origin',
    headers: { Authorization: pubkey },
    body: datas,
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

// async function uploadDapp(endpoint, files) {
//   const datas = new FormData()
//   datas.append('file', files)

//   return fetch(`${apiDapps}/${endpoint}`, {
//     method: 'POST',
//     credentials: 'same-origin',
//     body: datas,
//   })
//     .then(response => response.json())
//     .catch(error => error)
// }

const api = {
  get,
  post,
  put,
  del,
  uploadS3,
  uploadDapp,
}

export default api
