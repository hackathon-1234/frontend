// import $api from "./index";
import User from "../types/User";
import axios, {AxiosResponse} from "axios";
import IPost from "../types/Post";
import {LoginDto} from "../dto/loginDto";
import $api from "./index";
import {IAuthUser} from "../types/AuthUser";
import {RegistrationDto} from "../dto/registrationDto";

export const UserAPI = {
    getAll: async () => {
        return axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
    }
}

export const PostAPI = {
    getAll: async (limit: number) => {
        return axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    }
}

export const AuthAPI = {
    login: async (data: LoginDto): Promise<AxiosResponse<IAuthUser>> => {
        return $api.post<IAuthUser>('/token', data)
    },
    registration: async (data: RegistrationDto): Promise<AxiosResponse<IAuthUser>> => {
        return $api.post<IAuthUser>('/registration')
    },
    logout: async (): Promise<void> => {
        return $api.post('/logout');
    }
}