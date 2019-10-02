import axios from 'axios'

export let api = axios.create({
  baseURL: '/api',
  timeout: 5000,
  withCredentials: true
})

export let auth = axios.create({
  baseURL: '/account',
  timeout: 5000,
  withCredentials: true
})

export let user = {}