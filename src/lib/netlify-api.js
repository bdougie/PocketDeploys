import axios from "axios";
import Config from 'react-native-config'

const url = `https://api.netlify.com/api/v1/sites?filter=all&access_token=${Config.ACCESS_TOKEN}`
const headers = {'User-Agent': `MyApp (brian+test@netlify.com)`}

export function login() {
  return axios.post(url, {
    methos: 'POST',
    headers
  })
}

export function fetchSites() {
  return axios.post(url, {
    methos: 'POST',
    headers
  })
}
