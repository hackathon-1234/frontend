import {AppDispatch} from '../../index';
import {setAuth, setIsLoading, setUser} from './index';
import {AuthAPI, PostAPI} from '../../../api/api';
import IUser from "../../../types/User";
import {LoginDto} from "../../../dto/loginDto";
import {RegistrationDto} from "../../../dto/registrationDto";
import {IAuthUser} from "../../../types/AuthUser";
import axios from "axios";
import {API_URL} from "../../../api";

export const login = (data: LoginDto) => async (dispatch: AppDispatch) => {
    try {
        const response = await AuthAPI.login(data);
        localStorage.setItem("token", response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUser(response.data))
        console.log(response.data)
    } catch (e) {
        console.dir(e)
    }
}

export const registration = (data: RegistrationDto) => async (dispatch: AppDispatch) => {
    try {
        const response = await AuthAPI.registration(data);
        localStorage.setItem("token", response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUser(response.data))
    } catch (e) {
        console.dir(e)
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        const response = await AuthAPI.logout();
        localStorage.removeItem("token")
        dispatch(setAuth(false))
        dispatch(setUser({} as IAuthUser))
    } catch (e) {
        console.dir(e)
    }
}

export const checkAuth = () => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    try {
        const response = await axios.get<IAuthUser>(
            `${API_URL}/refresh`,
            {withCredentials: true}
        );

        localStorage.setItem("token", response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUser(response.data))
        dispatch(setIsLoading(false))
    } catch (e) {
        console.dir(e)
    } finally {
        dispatch(setIsLoading(false))
    }
}