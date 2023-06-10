import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "f28d62fe8c86480f81386aeed1303f86"
  }
})