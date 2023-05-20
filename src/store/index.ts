import {combineReducers, configureStore} from "@reduxjs/toolkit";

import postReducer from "./slices/post";
import countReducer from "./slices/counter";
import authReducer from "./slices/auth";

const rootReducer = combineReducers({
    count: countReducer,
    post: postReducer,
    auth: authReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];