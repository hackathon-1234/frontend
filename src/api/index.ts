import axios from "axios";
import {IAuthUser} from "../types/AuthUser";

export const API_URL = 'http://localhost:3005'

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originRequest = error.config;

        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originRequest._isRetry = true;
            try {
                const response = await axios.get<IAuthUser>(
                    `${API_URL}/refresh`,
                    {withCredentials: true}
                );
                localStorage.setItem('token', response.data.accessToken)

                return $api.request(originRequest)
            } catch (e) {
                console.dir(e)
            }
        }
        throw error;
    }
)

export default $api;