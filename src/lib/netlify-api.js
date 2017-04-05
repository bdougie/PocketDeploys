import axios from "axios";
import Config from 'react-native-config'

// const url = `https://api.netlify.com/api/v1/sites?filter=all&sort_by=updated_at&page=1&per_page=15&access_token=${Config.ACCESS_TOKEN}`
export const url = `https://api.netlify.com/api/v1/sites?access_token=${Config.ACCESS_TOKEN}`
export const headers = {'User-Agent': 'MyApp (yourname@example.com)'}

export function login() {
  return axios.post(url, {
    headers
  })
}

export function fetchSites() {
  return axios.get(url, {headers})
}
