const baseURL = 'http://localhost:3000/api/wonders/'

export default {
  getWonders(){
    return fetch(baseURL)
    .then(res => res.json())
  },
}
