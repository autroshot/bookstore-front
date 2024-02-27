import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:9999';
const DEFAULT_TIMEOUT = 30000;

const httpClient = createClient();

function createClient(config?: AxiosRequestConfig) {
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: DEFAULT_TIMEOUT,
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
        ...config,
    });

    return axiosInstance;
}

export { createClient, httpClient };
