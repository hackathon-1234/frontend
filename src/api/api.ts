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

export const Test = {
    get: async () => {
        return $api.get<IAuthUser>('/test')
    },
    create: async (data: any) => {
        return $api.post<IAuthUser>('/test', data)
    },
    delete: async (id: number) => {
        return $api.delete<IAuthUser>('/test' + id)
    },
    update: async (data: any) => {
        return $api.patch<IAuthUser>('/test', data)
    },
}

export const Activity = {
    get: async () => {
        return $api.get<IAuthUser>('/activity')
    },
    create: async (data: any) => {
        return $api.post<IAuthUser>('/activity', data)
    },
    delete: async (id: number) => {
        return $api.delete<IAuthUser>('/activity' + id)
    },
    update: async (data: any) => {
        return $api.patch<IAuthUser>('/activity', data)
    },
}

export const Manual = {
    get: async () => {
        return $api.get<IAuthUser>('/manual')
    },
    create: async (data: any) => {
        return $api.post<IAuthUser>('/manual', data)
    },
    delete: async (id: number) => {
        return $api.delete<IAuthUser>('/manual' + id)
    },
    update: async (data: any) => {
        return $api.patch<IAuthUser>('/manual', data)
    },
}
