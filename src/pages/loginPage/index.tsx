import {Button, Typography} from "antd";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {fetchPosts} from "../../store/slices/post/ActionCreators";

const LoginPage = () => {

    return(
        <>
           <Typography>LOGIN</Typography>
        </>
    )
}

export default LoginPage