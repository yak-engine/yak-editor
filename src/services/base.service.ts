import axios from 'axios'

export default class BaseService<TModel> {
    baseUrl: string = process.env.VUE_APP_API_BASE_URL;

    constructor() {
        axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
    }

    async get(url: string): Promise<TModel> {
        return axios.get(url, { method: 'get' }).then((response) => {
            return <TModel>response.data;
        });
    }

    async post<TData>(url: string, data?: TData) {
        return axios.post(url, { method: 'post' });
    }
}