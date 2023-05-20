import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IPost from "../../../types/Post";
import {IAuthUser} from "../../../types/AuthUser";

export interface AuthState  {
    user: IAuthUser;
    isAuth: boolean;
    isLoading: boolean;
    error: string;
}

const initialState: AuthState = {
    user: {} as IAuthUser,
    isAuth: false,
    isLoading: false,
    error: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setUser: (state, action: PayloadAction<IAuthUser>) => {
            state.user = action.payload;
        },
    },
})

export const {
    setIsLoading,
    setAuth,
    setUser
} = authSlice.actions;
export default authSlice.reducer;