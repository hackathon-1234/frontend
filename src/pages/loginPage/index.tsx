import React from "react";
import Login from "../../components/login";
import {Typography} from "antd";


const LoginPage = () => {

    return(
        <>
            <Typography.Title>
                Данные для входа
            </Typography.Title>
            <Login />
        </>
    )
}

export default LoginPage