import axios from "axios";
import Config from 'react-native-config'

// const url = `https://api.netlify.com/api/v1/sites?filter=all&sort_by=updated_at&page=1&per_page=15&access_token=${Config.ACCESS_TOKEN}`
const url = `https://api.netlify.com/api/v1/sites?access_token=${Config.ACCESS_TOKEN}`
const headers = {'User-Agent': `MyApp (brian+test@netlify.com)`}

export function login() {
  return axios.get(url, {
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
