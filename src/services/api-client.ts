import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
  count: number;
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "f28d62fe8c86480f81386aeed1303f86"
  }
})

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }
}

export default ApiClient;